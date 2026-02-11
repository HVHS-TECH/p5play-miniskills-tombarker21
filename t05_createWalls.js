/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	cnv = new Canvas(windowWidth,windowHeight);
	world.gravity.y = 10;

 	rectangle = new Sprite(100, 100, 20, 'd');
	rectangle.color = 'red';
	rectangle.rotationSpeed = 5;
	rectangle.bounciness = 1.5 ;

	circle = new Sprite(100, 100, 50, 'd');
	circle.color = 'green';
	circle.rotationSpeed = 2;
	circle.vel.x = 2;
	circle.bounciness = 1.5 ;

	platform_1 = new Sprite(windowWidth/2, windowHeight, windowWidth, 30, 'k');

	wallLH  = new Sprite(0, windowHeight/2, 8, windowHeight, 'k');

wallLH.color = 'black';

wallRH  = new Sprite(windowWidth, windowHeight/2, 8, windowHeight, 'k');

wallTop = new Sprite(windowWidth/2, 0, windowWidth, 30, 'k');

wallBot = new Sprite(windowWidth/2, windowHeight, windowWidth, 30, 'k');
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