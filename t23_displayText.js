/*******************************************************/
// P5.play: t23_display_text
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
	if (kb.pressing('a')) {

    // Set sprite's velocity to the left
rectangle.vel.x = -10;
} else if (kb.released ('a')) {
	rectangle.vel.x=0
};

if (kb.pressing('d')) {

    // Set sprite's velocity to the right
rectangle.vel.x = 10;
} else if (kb.released ('d')) {
	rectangle.vel.x=0
};

if (kb.pressing('w')) {

    // Set sprite's velocity to the up
rectangle.vel.y = -10;
} else if (kb.released ('w')) {
	rectangle.vel.y=0
};

if (kb.pressing('s')) {

    // Set sprite's velocity to the down
rectangle.vel.y = 10;
} else if (kb.released ('s')) {
	rectangle.vel.y=0
};


background('white'); 
text("Hello World", 50, 50);

var name = "mr Bell";

text("i am a better coder then "+name, 50, 100);


	
}
/*******************************************************/
//  END OF APP
/*******************************************************/
