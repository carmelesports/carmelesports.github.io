function switchGame(id) {
  var newGame = document.getElementById(id);
  var oldGame = document.getElementsByClassName("activeYear")[0];
  oldGame.classList.remove("activeYear");
  oldGame.classList.add("notActive");
  newGame.classList.remove("notActive");
  newGame.classList.add("activeYear");
}

$(function() {
  var id = getValueByName("id");
  var bar = '';
  if (id == "news") {
    bar = '<nav id="nav" class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">\
      <a class="navbar-brand" href="../index.html">\
        <img height="50" width="150" src="../bannerLogo2.png">\
      </a>\
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">\
        <span class="navbar-toggler-icon"></span>\
      </button>\
    \
      <div class="collapse navbar-collapse" id="navbar">\
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">\
          <li id="home" class="nav-item">\
            <a class="nav-link" href="../index.html">Home</a>\
          </li>\
          <li id="teams" class="nav-item">\
            <a class="nav-link" href="../teams.html">Teams</a>\
          </li>\
          <li id="watch" class="nav-item">\
            <a class="nav-link" href="../watch.html">Watch</a>\
          </li>\
          <li id="results" class="nav-item">\
            <a class="nav-link" href="../results.html">Results</a>\
          </li>\
          <li id="media" class="nav-item">\
            <a class="nav-link" href="../media.html">Media</a>\
          </li>\
          <li class="nav-item dropdown">\
            <a class="nav-link dropdown-toggle" href="../about.html" id="about" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
              About\
            </a>\
            <div class="dropdown-menu" aria-labelledby="about">\
              <a class="nav-link dropdown-item" href="../about.html">About</a>\
              <a id="sponsors" class="nav-link dropdown-item" href="../sponsors.html">Sponsors</a>\
              <a id="contact" class="nav-link dropdown-item" href="../contact.html">Contact</a>\
            </div>\
          </li>\
          <li id="calendar" class="nav-item">\
            <a class="nav-link" href="../calendar.html">Calendar</a>\
          </li>\
        </ul>\
      </div>\
    </nav>'
  } else {
    bar = '<nav id="nav" class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">\
      <a class="navbar-brand" href="./index.html">\
        <img height="50" width="150" src="./bannerLogo2.png">\
      </a>\
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">\
        <span class="navbar-toggler-icon"></span>\
      </button>\
    \
      <div class="collapse navbar-collapse" id="navbar">\
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">\
          <li id="home" class="nav-item">\
            <a class="nav-link" href="./index.html">Home</a>\
          </li>\
          <li id="teams" class="nav-item">\
            <a class="nav-link" href="./teams.html">Teams</a>\
          </li>\
          <li id="watch" class="nav-item">\
            <a class="nav-link" href="./watch.html">Watch</a>\
          </li>\
          <li id="calendar" class="nav-item">\
            <a class="nav-link" href="./calendar.html">Calendar</a>\
          </li>\
          <li id="results" class="nav-item">\
            <a class="nav-link" href="./results.html">Results</a>\
          </li>\
          <li id="media" class="nav-item">\
            <a class="nav-link" href="./media.html">Media</a>\
          </li>\
          <li class="nav-item dropdown">\
            <a class="nav-link dropdown-toggle" href="./about.html" id="about" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
              About\
            </a>\
            <div class="dropdown-menu" aria-labelledby="about">\
              <a class="nav-link dropdown-item" href="./about.html">About</a>\
              <a id="sponsors" class="nav-link dropdown-item" href="./sponsors.html">Sponsors</a>\
              <a id="contact" class="nav-link dropdown-item" href="./contact.html">Contact</a>\
            </div>\
          </li>\
        </ul>\
      </div>\
    </nav>'
  }
  $("#navDiv").html(bar);


  $("#" + id).addClass("active");
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $dropdown.hover(
    function() {
      const $this = $(this);
      $this.addClass(showClass);
      $this.find($dropdownToggle).attr("aria-expanded", "true");
      $this.find($dropdownMenu).addClass(showClass);
    },
    function() {
      const $this = $(this);
      $this.removeClass(showClass);
      $this.find($dropdownToggle).attr("aria-expanded", "false");
      $this.find($dropdownMenu).removeClass(showClass);
    }
  );
});

function getValueByName(name) {
  var url = document.getElementById('nav-bar').getAttribute('src');
  var param = new Array();
  if (url.indexOf("?") != -1) {
    var source = url.split("?")[1];
    items = source.split("&");
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var parameters = item.split("=");
      if (parameters[0] == "id") {
        return parameters[1];
      }
    }
  }
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