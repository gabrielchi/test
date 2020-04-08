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
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();

  amp = new p5.Amplitude();
}

function draw() {
  background(35);
  var vol = amp.getLevel();
  volhist.push(vol);
  noFill();

  beginShape();
  for (var i = 0; i < volhist.length; i++){
    var y = map(volhist[i], 0, 1, height, 0);
    vertex(i, y);
  }
  endShape();

  if (volhist.length > width){
    volhist.splice(0,1);
  }
  //ellipse (width/2, height/2, 200, vol * 200);
}
