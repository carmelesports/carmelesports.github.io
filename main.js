function switchGame(id) {
  var newGame = document.getElementById(id);
  var oldGame = document.getElementsByClassName("activeYear")[0];
  oldGame.classList.remove("activeYear");
  oldGame.classList.add("notActive");
  newGame.classList.remove("notActive");
  newGame.classList.add("activeYear");
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction()
};

// Get the header
var header = document.getElementById("theDiv");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    document.getElementById("nav").classList.add("borderBot");
  } else {
    document.getElementById("nav").classList.remove("borderBot");
  }
}
