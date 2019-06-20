let img; // Declare variable 'img'.

function setup() {
  createCanvas(600, 400);
  img = loadImage('marilyn.jpg'); // Load the image
	pixelDensity(1);
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
	loadPixels();
	for (var y = 0; y < height; y++){
		for (var x = 0; x < width; x++){
			var index = (x + y * width) * 4;
			// r(ed)
			pixels[index+0] += x;
			// g(reen)
			pixels[index+1] += y;
			// b(lue)
			pixels[index+2] += y;
			// a(lpha)
			pixels[index+2] += x;
		}
	}

	updatePixels();
}