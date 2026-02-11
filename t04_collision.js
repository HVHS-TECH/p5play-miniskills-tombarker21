/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
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
	rectangle.bounciness = 1.5 ;

	circle = new Sprite(100, 100, 50, 'd');
	circle.color = 'green';
	circle.rotationSpeed = 2;
	circle.vel.x = 2;

	platform_1 = new Sprite(windowWidth/2, windowHeight, windowWidth, 30, 'k');
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