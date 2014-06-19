
var browserify = require('browserify-middleware');
var express = require('express');

var version = require('../package.json').version;



function path(filename) {
  return '/static/' + version + '/' + filename;
}

module.exports = function static(app, config) {

  var staticServer = express.static(join(__dirname, 'static'), {
    maxAge: config.env === 'development' ? 0 : ms('12 months')
  });

  app.use('/static/' + version, staticServer);

  browserify.settings.production('cache', '12 months');

  [
    'listing.js',
    'topic.js',
    'edit.js',
    'login.js'
  ].forEach(function (filename) {
    app.get(path(filename), browserify('./client/' + filename));
  });
};
