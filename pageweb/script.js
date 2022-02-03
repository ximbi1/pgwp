textBox.addEventListener('click', function(e) {
    e.preventDefault();
    textBox.style.position = 'absolute';
    textBox.style.left = e.clientX + 'px';
    textBox.style.top = e.clientY + 'px';
});
/* var colors = ["blue", "yellow", "purple", "green", "white", "pink"]
var currentColor = 0
var logo = document.querySelectorAll("wrld")

function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length -1
  for (var i = 0; i < logo.length; 1++) {
    logo[i].style.color = colors[(currentColor + i) % colors.length]
  }
}
setInterval(changeColor, 5000)
*/ 
/* create a functional search bar down to the logo */


/* var searchBar = document.createElement('input');
searchBar.type = 'text';
searchBar.placeholder = 'Search';
searchBar.style.textAlign = 'center';
searchBar.style.position = 'absolute';
searchBar.style.left = '80%';
searchBar.style.top = '65%';
searchBar.style.webkitBorderTopRightRadius = '30%' ;
searchBar.style.webkitBorderTopLeftRadius = '30%' ;
searchBar.style.webkitBorderBottomRightRadius = '30%' ;
searchBar.style.webkitBorderBottomLeftRadius = '30%' ;
searchBar.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(searchBar);
*/
/* make searchBar search on google */
/*
searchBar.addEventListener('keyup', function(e) {
  if (e.keyCode == 13) {
    window.location.href = 'https://www.google.com/search?q=' + searchBar.value;
  }
});
*/