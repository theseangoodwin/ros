// I'd like to be able to figure out how to 
// a) have the nav closed by default (possibly by firing 'closeNav()' on page load, possibly by finding another way)
// b) prevent the .document call from throwing a console error (only be able to call the function when the page loads)

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // Adds event listener to open up the sidebar menu
    const menuBtn = document.getElementsByClassName('menu-button')[0];
    menuBtn.addEventListener('click', () => {
      openNav();
    });

    // Adds event listener to close nav sidebar
    const menuCloseBtn = document.getElementsByClassName('closebtn')[0];
    menuCloseBtn.addEventListener('click', (e) => {
      closeNav();
    });

});

/* Set the left margin of the page content to -370 */
function closeNav() {
  document.getElementById("mySidebar").style.marginLeft = "-448px";
}

/* Set the left margin of the page content to 0 */
function openNav() {
    document.getElementById("mySidebar").style.marginLeft = "0px";
  }
