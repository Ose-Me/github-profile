function responsiveNav() {
  var x = document.getElementById("bottom-nav-mobile");
  if (x.className === "bottom-nav") {
    x.className += " responsive";
  } else {
    x.className = "bottom-nav";
  }
}
