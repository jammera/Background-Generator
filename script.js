var css = document.querySelector('h3');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');
var button = document.getElementById('random');

function setGradient() {
	body.style.background = 'linear-gradient(to right,' + color1.value + ', ' + color2.value + ')';
	css.textContent = body.style.background + ";";
}
setGradient();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function randomColor() {
	color1.value = '#' + getRandomInt(16777215).toString(16);
	color2.value = '#' + getRandomInt(16777215).toString(16);
	setGradient();
}


button.addEventListener("click", randomColor);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);