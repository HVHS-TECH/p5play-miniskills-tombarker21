/*******************************************************/
// P5.play: t50_extension
// Extension tasks
// Written by Tom da tw***
/*******************************************************/

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);


	for (let i = 0; i < 11; i++) {

		spriteColor = color(random(255), random(255), random(255))
	//create a line of 10 sprites across the top of the screen
		for (var s = 0; s < 25; s++) {
			var block = new Sprite(s*80 + 40, i*80 + 40, 50, 50, 'k');
			block.color = spriteColor;
	}

}
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