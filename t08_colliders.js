/*******************************************************/
// P5.play: t08_colliders
// Work with colliders
// Written by ???
/*******************************************************/

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	

	cnv = new Canvas(windowWidth,windowHeight);


	world.gravity.y = 10;
	circle = new Sprite(100, 100, 50, 'd');
	circle.color = 'green';
	circle.rotationSpeed = 2;
	circle.vel.x = 2;
	circle.bounciness = 1.5 ;



 	rectangle = new Sprite(100, 100, 20, 'd');
	rectangle.color = 'red';
	rectangle.rotationSpeed = 5;
	rectangle.bounciness = 1.5 ;


	console.log('i love sushi')
	platform_1 = new Sprite(windowWidth/2, windowHeight, windowWidth, 30, 'k');

	wallLH  = new Sprite(0, windowHeight/2, 8, windowHeight, 'k');

wallLH.color = 'black';

wallRH  = new Sprite(windowWidth, windowHeight/2, 8, windowHeight, 'k');

wallTop = new Sprite(windowWidth/2, 0, windowWidth, 30, 'k');

wallBot = new Sprite(windowWidth/2, windowHeight, windowWidth, 30, 'k');

	alienGroup = new Group(); 
		alienGroup.collides(circle, func2Call); ///not working ;L

for (i = 0; i < 10; i++) {
console.log('helloooooo')
  alien = new Sprite(windowWidth/4, windowHeight/2, 40,'d');
	console.log('yoooo')
	const VELARRAY = [-1, 1];

  velx = random(4, 7) * random(VELARRAY);

  alien.vel.x = velx;

  alien.vel.y = 4;

  alien.bounciness = 1;

  alien.friction = 0;

  alienGroup.add(alien);
}
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('white'); 
}



function func2Call(_ssss, _circle) {

// Delete the alien which was hit

	_ssss.remove();

}
/*******************************************************/
//  END OF APP
/*******************************************************/