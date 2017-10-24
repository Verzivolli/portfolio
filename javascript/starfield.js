var canvas;

var stars = [];
var speed = 25;

function setup(){
	canvas = createCanvas(document.getElementById('canvas-container').offsetWidth,document.getElementById('canvas-svg-text').offsetHeight);
	canvas.parent('canvas-container');
	for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
  background(0);
}

function draw(){
	background(0);
	translate(width / 2, height / 2);
	for (var i = 0; i < stars.length; i++) {
    	stars[i].update();
    	stars[i].show();
	}
}

function canvasresize(){
	resizeCanvas(document.getElementById('canvas-container').offsetWidth,document.getElementById('canvas-svg-text').offsetHeight);
}

function Star() {
  this.x = random(-document.getElementById('canvas-container').offsetWidth, document.getElementById('canvas-container').offsetWidth);
  this.y = random(-document.getElementById('canvas-svg-text').offsetHeight, document.getElementById('canvas-svg-text').offsetHeight);
  this.z = random(document.getElementById('canvas-container').offsetWidth);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = document.getElementById('canvas-container').offsetWidth;
      this.x = random(-document.getElementById('canvas-container').offsetWidth, document.getElementById('canvas-container').offsetWidth);
      this.y = random(-document.getElementById('canvas-svg-text').offsetHeight, document.getElementById('canvas-svg-text').offsetHeight);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(255,255,0);
    noStroke();
    var sx = map(this.x / this.z, 0, 1, 0, document.getElementById('canvas-container').offsetWidth);
    var sy = map(this.y / this.z, 0, 1, 0, document.getElementById('canvas-container').offsetWidth);
    var r = map(this.z, 0, document.getElementById('canvas-container').offsetWidth, 2, 0);
    ellipse(sx, sy, r, r);
    var px = map(this.x / this.pz, 0, 1, 0, document.getElementById('canvas-container').offsetWidth);
    var py = map(this.y / this.pz, 0, 1, 0, document.getElementById('canvas-container').offsetWidth);
    this.pz = this.z;
    stroke(255);
    line(px, py, sx, sy);
  }
}