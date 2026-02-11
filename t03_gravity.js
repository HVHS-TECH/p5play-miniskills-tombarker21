/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
 	cnv = new Canvas(windowWidth,windowHeight);
	world.gravity.y = 10;

 	rectangle = new Sprite(100, 100, 20, 20, 'd');
	rectangle.color = 'red';
	rectangle.rotationSpeed = 5;

	circle = new Sprite(100, 100, 50, 'd');
	circle.color = 'green';
	circle.rotationSpeed = 2;
	circle.vel.x = 2;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('white'); 
}

/*******************************************************/
//  END OF APP
/*******************************************************/