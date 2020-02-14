function switchGame(id) {
  var newGame = document.getElementById(id);
  var oldGame = document.getElementsByClassName("activeYear")[0];
  oldGame.classList.remove("activeYear");
  oldGame.classList.add("notActive");
  newGame.classList.remove("notActive");
  newGame.classList.add("activeYear");
}

function changeYear(year, dir) {
	var newYear = document.getElementById(year);
	var oldYear = document.getElementsByClassName("activeYear")[0];
  oldYear.classList.remove("activeYear");
	oldYear.classList.add("notActive");
	newYear.classList.remove("notActive");
	newYear.classList.add("activeYear");
}
