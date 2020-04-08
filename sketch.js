var song; 
var amp;
var button;
var volhist = [];

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('jordan.mp3');
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();

  amp = new p5.Amplitude();
}

function draw() {
  background(35);
  var vol = amp.getLevel();
  volhist.push(vol);
  
  stroke(255);
  noFill();
  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 360; i++){
    var r = map(volhist[i], 0, 1, 10, 100);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volhist.length > 360){
    volhist.splice(0,1);
  }

  

}
