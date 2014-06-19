
var static = require('./static');
var home = require('./home');
var robots = require('./robots');

module.exports = function routes(app, config) {

  static(app, config);
  home(app, config);
  robots(app, config);

};
