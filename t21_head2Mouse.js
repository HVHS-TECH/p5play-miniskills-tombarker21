/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv = new Canvas(windowWidth,windowHeight);
	world.gravity.y = 10;

 	rectangle = new Sprite(500, 300, 100, 200, 'd');
	rectangle.color = 'red';
	rectangle.rotationSpeed = 5;

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('white'); 
	rectangle.moveTowards(mouseX, mouseY, 0.2);

if (mouse.presses()) {

rectangle.moveTo(50, 50, 0.2);

}
}

/*******************************************************/
//  END OF APP
/*******************************************************/