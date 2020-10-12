$.getJSON("https://cors-anywhere.herokuapp.com/https://tinyurl.com/y3ocsch8", function(data) {
  console.log("retrieving scores");
  $.each(data, function(i, score) {
    var game = score.game;
    var gameInt = gameInterpret(game);
    var team1 = score.team1 + " " + gameInt;
    var team1 = team1.charAt(0).toUpperCase() + team1.slice(1)
    var team2 = score.team2;
    var team1Score = score.team1Score;
    var team2Score = score.team2Score;
    var date = score.date;
    var now = moment();
    var input = moment(date);
    var isThisWeek = (now.isoWeek() == input.isoWeek())
    var gameDiv = document.getElementById(game + "Div");
    if (isThisWeek) {
      gameDiv.innerHTML += ('<div class="col-md-5 matchCard">\
        <br>\
        <div class="row">\
          <p class="team col-4">' + team1 + '</p>\
          <p class="score col-4">vs</p>\
          <p class="team col-4">' + team2 + '</p>\
        </div>\
        <div class="row text-wrap">\
          <p class="score col-4">' + team1Score + '</p>\
          <p class="score col-4">—</p>\
          <p class="score col-4">' + team2Score + '</p>\
        </div>\
        <div class="row">\
          <p class="col-12">' + input.format("MM/DD/yyyy") + '</p>\
        </div>\
      </div>');
    }
  });
});

function gameInterpret(game) {
  var ret = null;
  switch (game) {
    case "OW":
      ret = "Overwatch";
      break;
    case "R6PC":
      ret = "R6 PC";
      break;
    case "HS":
      ret = "Hearthstone";
      break;
    case "CSGO":
      ret = "CS:GO";
      break;
    case "LoL":
      ret = "League of Legends";
      break;
    case "SSBU":
      ret = "Smash";
      break;
    case "RL":
      ret = "Rocket League";
      break;
    case "Forza":
      ret = "Forza";
      break;
    case "CoD":
      ret = "Call of Duty";
      break;
    case "Val":
      ret = "Valorant";
      break;
    case "R6X1":
      ret = "R6 X1";
      break;
    case "Apex":
      ret = "Apex Legends";
      break;
    case "Overwatch":
      ret = "Overwatch";
      break;
    case "Hearthstone":
      ret = "Hearthstone";
      break;
    case "Valorant":
      ret = "Valorant";
      break;
  }
  return ret;
}