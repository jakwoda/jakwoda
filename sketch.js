let wholeHeight = document.documentElement.scrollHeight;
let x = 1;
let y = 1;
let easing = 0.05;
let rainbow;
let myColors;
// frameRate(5);

let path;
let textInput;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255);
  background(255); 
//   rainbow = [color('#c0392b'), color('#e67e22'), color('#f1c40f'), color('#2ecc71'), color('#3498db'), color('#8e44ad')];
rainbow = [color("#ff0000"), color("#f0f000"), color("#0000ff"),color("#000000")];

}

function draw() {
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;
   ellipse(x, y, 66, 66);

 
  
}
function doubleClicked(){
background(255);

}
function mouseClicked(){
fill(random(rainbow));
}
   

function mouseDragged(){
     fill(random(rainbow));
  ellipse(x, y, 66, 66);

 

}
function windowResized(){
  resizeCanvas(windowWidth, wholeHeight);
}

 