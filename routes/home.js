

module.exports = function home(app, config) {

  app.get('/', function (req, res) {
    res.render('home', {});
  });

};
