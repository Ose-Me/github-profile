// responsive navbar function
function responsiveNav() {
  var x = document.getElementById("bottom-nav-mobile");
  if (x.className === "bottom-nav") {
    x.className += " responsive";
  } else {
    x.className = "bottom-nav";
  }
}

// toggle add repositories dropdown
document
  .getElementById("add-dropdown-btn")
  .addEventListener("click", function () {
    document.getElementById("dropdown-menu1").classList.toggle("show");
  });

// toggle profile details dropdown
document
  .getElementById("profile-dropdown-btn")
  .addEventListener("click", function () {
    document.getElementById("dropdown-menu2").classList.toggle("show");
  });

//scroll animation on repo header
const headerUserNode = gitHubDOM.getNode(".repo_app_header-user");
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 370) {
    headerUserNode.classList.remove("hide");
  } else {
    headerUserNode.classList.add("hide");
  }
});
