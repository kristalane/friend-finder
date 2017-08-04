
var path = require("path");
var appDir = path.dirname(require.main.filename);

module.exports = function(app) {

  // serve the survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(appDir, "app", "public", "survey.html"));
  });

  // if not specified, default to home
  app.use(function(req, res) {
    res.sendFile(path.join(appDir, "app", "public", "home.html"));
  });

};
