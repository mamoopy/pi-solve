let d = 600;

let inCircle = 0;
let total = 0;

let pi;
let bestEst = 1;
let bestPi;

function setup() {
	createCanvas(d,d);
	background(0);
	speedSlider = createSlider(1,1000,1);
	speedSlider.position(50,90);
}

function draw() {
	for (let i = 0;i<speedSlider.value();i++){
		translate(d/2,d/2);
		stroke(255,0,0);
		strokeWeight(1);

		noFill();
		ellipse(0,0,d,d);

		spot();
		pi = 4 * inCircle/total;

		if (abs(PI-pi) < bestEst) {
			bestEst = abs(PI-pi);
			bestPi = pi;
		}

		console.log(pi," : ",abs(PI-pi)," : ",bestPi," : ",bestEst," : ",frameRate());

		let piText = document.getElementById('pi');
		let pi_accText = document.getElementById('pi-acc');
		let best_piText = document.getElementById('best-pi');
		let best_pi_accText = document.getElementById('best-pi-acc');
		let fpsText = document.getElementById('fps');

		piText.innerHTML          = 'Last PI estimation: '+pi;
		pi_accText.innerHTML      = 'Last PI accuracy  : '+abs(PI-pi);
		best_piText.innerHTML     = 'Best PI estimation: '+bestPi;
		best_pi_accText.innerHTML = 'Best PI accuracy  : '+bestEst;
		fpsText.innerHTML         = 'Framerate         : '+frameRate();

	}
}

function spot() {
	translate(-d/2,-d/2);
	let x = getRanCoor();
	let y = getRanCoor();

	if (dist(d/2,d/2,x,y)>d/2) {
		stroke(255);
	} else {
		stroke(0,255,0);
		inCircle++;
	}

	total++;
	strokeWeight(1);
	point(x,y);

	function getRanCoor() {
		return floor(map(random(1),0,1,0,d));
	}
}
