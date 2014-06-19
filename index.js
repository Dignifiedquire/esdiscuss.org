
var defaults = require('lodash.defaults');
var ms = require('ms');
var express = require('express');
var routes = require('./routes');

function createApp(config) {

  var app = express();


  app.locals.asset = function (path) {
    return '/static/' + version + path;
  };

  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');

  app.use(require('static-favicon')(__dirname + '/favicon.ico'));
  app.use(function (req, res, next) {
    res.locals.path = req.path;
    next();
  });

  var staticFolder = express.static(join(__dirname, 'static'), {
    maxAge: config.env === 'development' ? 0 : ms('12 months')
  });

  app.use('/static/' + version, staticFolder);

  routes(app, config);

  return app;
}


function Server(config) {

  // Set defaults

  this.config = defaults(config || {}, {
    env: 'development',
    cookieSecret: 'adfkasjast',
    audience: 'http://localhost:' + port,
    githubClientId: '28627d32a6318f773fd3',
    githubSecret: '6baddae5b8ea007f43f0312be1afc07eb2ea19d0'
  });


  this.app = createApp(this.config);
}

Server.prototype.start = function start(port) {

  this.app.listen(port || 3000);

};
