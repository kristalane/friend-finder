var friends = require("../data/friends");
var bodyParser = require("body-parser");



module.exports = function(app) {


  app.get("/api/friends", function (req, res) {
    res.send(friends);
  });

  app.post("/api/friends", function(req, res) {
    var bestMatchSoFar = matchFriend(req.body);
    console.log("here be match" + JSON.stringify(bestMatchSoFar));
    res.send(bestMatchSoFar);
    friends.push(req.body);
  })
};

function matchFriend(newFriend) {
  var lowestRatingSoFar = 9999;
  var bestMatchSoFar = null;
  friends.forEach(function (thisFriend){
    var scores = thisFriend.scores;
    var matchRating = compareScores(thisFriend.scores, newFriend.scores);
    if (matchRating < lowestRatingSoFar) {
      lowestRatingSoFar = matchRating;
      bestMatchSoFar = thisFriend;
    }
  });
  return bestMatchSoFar;
}

function compareScores(scores1, scores2){
  var total = 0;
  for (let i = 0; i < scores1.length; i++){
    var difference = Math.abs(scores1[i] - scores2[i]);
    total = total + difference;
  }
  return total;

}
