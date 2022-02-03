 /* put google logo on the middle of page */
var logo = document.createElement('img');
logo.src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
logo.style.position = 'absolute';
logo.style.left = '50%';
logo.style.top = '50%';
logo.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(logo);
logo.style.top= '40%';

/* create a functional search bar down to the logo */
var searchBar = document.createElement('input');
searchBar.type = 'text';
searchBar.placeholder = 'Wanna Something?';
searchBar.style.backgroundColor = '#aab7b8';
searchBar.style.textAlign = 'center';
searchBar.style.position = 'absolute';
searchBar.style.left = '50%';
searchBar.style.top = '65%';
searchBar.style.webkitBorderTopRightRadius = '30%' ;
searchBar.style.webkitBorderTopLeftRadius = '30%' ;
searchBar.style.webkitBorderBottomRightRadius = '30%' ;
searchBar.style.webkitBorderBottomLeftRadius = '30%' ;
searchBar.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(searchBar);

/* make searchBar search on google */
searchBar.addEventListener('keyup', function(e) {
  if (e.keyCode == 13) {
    window.location.href = 'https://www.google.com/search?q=' + searchBar.value;
  }
});

/* do a dark theme function */
function darkTheme() {
  document.body.style.backgroundColor = '#303438';
  document.body.style.color = '#ffffff';
  logo.src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  logo.style.top= '40%';
}

/* create a switch button for darkTheme to change a blacktheme */
var darkThemeButton = document.createElement('button');
darkThemeButton.innerHTML = 'Dark Theme';
darkThemeButton.style.position = 'absolute';
darkThemeButton.style.left = '50%';
darkThemeButton.style.top = '75%';
darkThemeButton.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(darkThemeButton);

darkThemeButton.addEventListener('click', function() {
  darkTheme();
});

/* change position dark theme button to the right top of the screen */
darkThemeButton.style.left = '10%';
darkThemeButton.style.top = '10%';

/* create variable to change theme dark to light */
var lightThemeButton = document.createElement('button');
lightThemeButton.innerHTML = 'Light Theme';
lightThemeButton.style.position = 'absolute';
lightThemeButton.style.left = '50%';
lightThemeButton.style.top = '75%';
lightThemeButton.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(lightThemeButton);

/* move the lightThemeButton on the right foot of the page */
lightThemeButton.addEventListener('click', function() {
  document.body.style.backgroundColor = '#ffffff';
  document.body.style.color = '#303438';
  logo.src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  logo.style.top= '40%';
});

/* change position light theme button to the left top of the screen */
lightThemeButton.style.left = '90%';
lightThemeButton.style.top = '10%';

/* create a function to print the weather on a pop up */
function weather() {
  var weather = document.createElement('div');
  weather.innerHTML = '<iframe src="https://weather.com/weather/today/l/41.39,2.17?par=google;MR=1" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>';
  weather.style.position = 'absolute';
  weather.style.left = '50%';
  weather.style.top = '50%';
  weather.style.transform = 'translate(-50%, -50%)';
  document.body.appendChild(weather);
}

/* show weather if you click on logo */
logo.addEventListener('click', function() {
  weather();
});

/* create a function that creates background particles */
function particles() {
  var canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  var particles = [];
  var particleCount = 100;
  for (var i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      vx: Math.random() * 6 - 3,
      vy: Math.random() * 6 - 3,
      color: '#' + Math.floor(Math.random() * 16777215).toString(16)
    });
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < particleCount; i++) {
      var p = particles[i];
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.x > canvas.width) {
        p.x = 0;
      } else if (p.x < 0) {
        p.x = canvas.width;
      }
      if (p.y > canvas.height) {
        p.y = 0;
      } else if (p.y < 0) {
        p.y = canvas.height;
      }
    }
  }
  setInterval(draw, 33);
}

/* if you click on the left corner show particles */
document.addEventListener('click', function(e) {
  if (e.clientX < window.innerWidth / 2) {
    particles();
  }
});

/* if screen size display changes, then adapt the screen to new size */
window.addEventListener('resize', function() {
  var canvas = document.getElementsByTagName('canvas');
  for (var i = 0; i < canvas.length; i++) {
    canvas[i].width = window.innerWidth;
    canvas[i].height = window.innerHeight;
  }
});
/* if you click on the right corner stop to show particles */
document.addEventListener('click', function(e) {
  if (e.clientX > window.innerWidth / 2) {
    var canvas = document.getElementsByTagName('canvas');
    for (var i = 0; i < canvas.length; i++) {
      document.body.removeChild(canvas[i]);
    }
  }
});
/*do a searchbar more bigger*/
searchBar.style.height = '7%';
searchBar.style.width = '20%'