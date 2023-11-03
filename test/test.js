const apple = new Image();
apple.src =
"Honeycrisp-Apple.png";

// get a reference to the canvas and its context
var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

// newly spawned objects start at Y=25
var spawnLineY = 50;
var spawnLineX = 50;

// spawn a new object every 1500ms
var spawnRate = 50;

// set how fast the objects will fall
var spawnRateOfDescent = 1.0;

// when was the last object spawned
var lastSpawn = -1;

// this array holds all spawned object
var objects = [];

// save the starting time (used to calculate elapsed time)
var startTime = Date.now();

// start animating
animate();

function spawnRandomObject() {
  // create the new object
  var object = {
    // set this object's type
    type: apple,
    // set x randomly anywhere on the canvas
    x: Math.random() * canvas.width,
    // set y randomly anywhere on the canvas
    y: Math.random() * canvas.height,
  };

  // check if the object is too close to other objects
  if (!objects.some((obj) => distanceBetween(obj, object) < 30)) {
    // add the new object to the objects[] array
    objects.push(object);
  }
}

// function to calculate the distance between two objects
function distanceBetween(obj1, obj2) {
  var a = obj1.x - obj2.x;
  var b = obj1.y - obj2.y;
  return Math.sqrt(a * a + b * b);
}

function animate() {
  // get the elapsed time
  var time = Date.now();

  // see if it's time to spawn a new object
  if (time > lastSpawn + spawnRate) {
    lastSpawn = time;
    spawnRandomObject();
  }

  // request another animation frame
  requestAnimationFrame(animate);

  // clear the canvas so all objects can be redrawn in new positions
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // move each object down the canvas
  for (var i = 0; i < objects.length; i++) {
    var object = objects[i];
    object.x += spawnRateOfDescent;
    object.y += spawnRateOfDescent;
    ctx.drawImage(object.type, object.x, object.y, 30, 30);
  }
}