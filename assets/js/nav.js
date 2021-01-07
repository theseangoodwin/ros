// I'd like to be able to figure out how to 
// a) have the nav closed by default (possibly by firing 'closeNav()' on page load, possibly by finding another way)
// b) prevent the .document call from throwing a console error (only be able to call the function when the page loads)

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

/* Set the left margin of the page content to 0 */
function openNav() {
  document.getElementById("mySidebar").style.marginLeft = "0px";
  console.log('Open, Console!');
//   document.getElementById("main").style.marginLeft = "370px";
}

/* Set the left margin of the page content to -370 */
function closeNav() {
  document.getElementById("mySidebar").style.marginLeft = "-370px";
  console.log('Closed, Console!');
//   document.getElementById("main").style.marginLeft = "0";
}
