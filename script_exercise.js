var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//console.log(css);
//console.log(color1);
//console.log(color2);
//console.log(body);
//body.style.background = "red";

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//===============================================================

//1. Write code so that the colour inputs match the background generated on the first page load.
color1.value = RGBToHex(255,0,0); // red = rgb(255,0,0)
color2.value = RGBToHex(255,255,0); // yellow = rgb(255,255,0)

//2. Display the initial CSS linear gradient property on page load.
css.textContent = "linear-gradient(to right, rgb(255,0,0), rgb(255,255,0))";

//3. BONUS: Add a random button which generates two random numbers for the colour inputs.
var randomButton = document.createElement("button");
randomButton.innerHTML = "Set Random Colors!";
body.appendChild(randomButton);

randomButton.addEventListener("click", generateRandColors);

function generateRandColors(){
  r1=rand0to255();
  r2=rand0to255();
  g1=rand0to255();
  g2=rand0to255();
  b1=rand0to255();
  b2=rand0to255();

  //console.log(concatenarRGB(r1,g1,b1));
  //console.log(concatenarRGB(r2,g2,b2));

// function concatenarRGB(r,g,b){
//    return "rgb(" + r + "," + g + "," + b +")";
//  }

  color1.value = RGBToHex(r1,g1,b1);
  color2.value = RGBToHex(r2,g2,b2);

  setGradient();
}

function rand0to255(){
  return Math.floor(Math.random() * 256);
}

function RGBToHex(r,g,b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}
