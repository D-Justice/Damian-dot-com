window.onscroll = function() {
   stickyBois();
 };
 var navbar = document.getElementById("btn");
 var sticky = navbar.offsetTop;
 var logo = document.getElementById("lego");
 var stickyImage = logo.offsetTop;

function stickyBois() {

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    logo.classList.add("stickyImage");
  } else {
    navbar.classList.remove("sticky");
    logo.classList.remove("stickyImage");
  }
}
