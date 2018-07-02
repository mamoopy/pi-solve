let d = 600;

let w = d;
let h = d;

let inCircle = 0;
let total = 0;

let pi;
let bestEst = 1;

function setup() {
	createCanvas(w,h);
	background(0);

	speedSlider = createSlider(1,1000,1);
	speedSlider.position(10,h);
}

function draw() {
	for (let i = 0;i<speedSlider.value();i++){
		translate(w/2,h/2);
		stroke(255,0,0);
		strokeWeight(1);

		noFill();
		ellipse(0,0,w,h);

		spot();
		pi = 4 * inCircle/total;

		if (abs(PI-pi) < bestEst) {
			bestEst = abs(PI-pi);
		}

		console.log(pi," : ",abs(PI-pi)," : ",bestEst," : ",frameRate());
	}
}

function spot() {
	translate(-w/2,-h/2);
	let x = getRanCoor(w);
	let y = getRanCoor(h);

	if (dist(w/2,h/2,x,y)>w/2) {
		stroke(255);
	} else {
		stroke(0,255,0);
		inCircle++;
	}

	total++;
	strokeWeight(1);
	point(x,y);

	function getRanCoor(axis) {
		return floor(map(random(1),0,1,0,axis));
	}
}