function switchGame(id) {
  var newGame = document.getElementById(id);
  var oldGame = document.getElementsByClassName("activeYear")[0];
  oldGame.classList.remove("activeYear");
  oldGame.classList.add("notActive");
  newGame.classList.remove("notActive");
  newGame.classList.add("activeYear");
}
