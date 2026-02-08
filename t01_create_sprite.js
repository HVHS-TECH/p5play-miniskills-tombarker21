/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by tom barker
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth,windowHeight);

 	rectangle = new Sprite(100, 100, 20, 20, 'd');
	rectangle.color = 'red';

	circle = new Sprite(100, 100, 50, 'd');
	circle.color = 'green';
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	rectangle = new Sprite(100, 100, 20, 20, 'd');
	rectangle.color = 'red';

	circle = new Sprite(100, 100, 50, 'd');
	circle.color = 'green';
}

/*******************************************************/
//  END OF APP
/*******************************************************/