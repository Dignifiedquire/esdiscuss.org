

module.exports = function robots(app, config) {

  app.get('/robots.txt', function (req, res) {
    res.end('User-agent: *\nDisallow: /source');
  });

};
