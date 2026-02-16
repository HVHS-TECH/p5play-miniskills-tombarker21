/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv = new Canvas(windowWidth,windowHeight);
	

 	rectangle = new Sprite(500, 300, 100, 200, 'd');
	rectangle.color = 'red';
	rectangle.rotationSpeed = 5;

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
//******************************************************/
	//Keyboard Movements//
//******************************************************/
	if (kb.pressing('left')) {

    // Set sprite's velocity to the left
rectangle.vel.x = -10;
} else if (kb.released ('left')) {
	rectangle.vel.x=0
};

if (kb.pressing('right')) {

    // Set sprite's velocity to the right
rectangle.vel.x = 10;
} else if (kb.released ('right')) {
	rectangle.vel.x=0
};

if (kb.pressing('up')) {

    // Set sprite's velocity to the up
rectangle.vel.y = -10;
} else if (kb.released ('up')) {
	rectangle.vel.y=0
};

if (kb.pressing('down')) {

    // Set sprite's velocity to the down
rectangle.vel.y = 10;
} else if (kb.released ('down')) {
	rectangle.vel.y=0
};
//******************************************************/	
	



















background('white'); 
	
}
/*******************************************************/
//  END OF APP
/*******************************************************/