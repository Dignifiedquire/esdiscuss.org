

var db = require('../lib/database');

module.exports = function about(app, config) {

  app.get('/about', function (req, res, next) {

    var allTime = db.botRuns();

    db.botRuns().then(function (stats) {
      res.render('about', {
        allTime: stats
      });
    }).done(null, next);
  })
};
