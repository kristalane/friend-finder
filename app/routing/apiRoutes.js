var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function (req, res) {
    res.send(friends);
  });

  app.post("/api/friends", function(req, res) {
    // build the matchy part here.

    res.send();
  })

};
