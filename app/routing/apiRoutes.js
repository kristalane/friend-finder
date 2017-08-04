var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function (req, res) {
    console.log("friends should be here" + friends.length);
    res.send(friends);
  });

  app.post("/api/friends", function(req, res) {
    matchFriend(req.body);
    res.send(bestMatchSoFar);
  })
};

function matchFriend(newFriend) {
  var lowestRatingSoFar = 9999;
  var bestMatchSoFar = null;
  friends.forEach(function (thisFriend){
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
  for (let i = 0; scores.length; i++){
    var difference = Math.abs(scores1[i] - scores2[i]);
    total = total + difference;
  }
  return total;

}
