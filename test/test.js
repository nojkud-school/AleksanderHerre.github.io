// finner bilde og apple (id)
const apple = new Image();
apple.src = "Honeycrisp-Apple.png";

// får context av va canvaset er og formen på det
var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

// Nytt laget objekter starter på y=25
var spawnLineY = 50;
var spawnLineX = 50;

// Legger til et nytt objekt per x/ms
var spawnRate = 50;

// Sjekker hvor fort et objekt vill falle
var spawnRateOfDescent = 2;

// sjekker når det forje objektet ble laget
var lastSpawn = -1;

// liste/array som holder alle objektene 
var objects = [];

// starter tiden på programet
var startTime = Date.now();

// Start animasjon for objektene
animate();

function spawnRandomObject() {
  // Lag et nytt objekt
  var object = {
    // Object typen
    type: apple,
    // Setter x aksjen en tilfeldig plass på skjermen
    x: Math.random() * canvas.width,
    // Setter y aksjen en tilfeldig plass på skjermen
    y: Math.random() * canvas.height,
  };

  // Sjekker om et objekt er for nærme hverandre
  if (!objects.some((obj) => distanceBetween(obj, object) < 30)) {
    // Legger til nye objekter til objects[] array
    objects.push(object);
  }
}

// Kalkulerer distansen fra en objekt til en annen
function distanceBetween(obj1, obj2) {
  var a = obj1.x - obj2.x;
  var b = obj1.y - obj2.y;
  return Math.sqrt(a * a + b * b);
}

function animate() {
  // Tiden for hvor lenge dette har gåttp på.
  var time = Date.now();

  // ser om et nytt objekt har kommet på skjermen
  if (time > lastSpawn + spawnRate) {
    lastSpawn = time;
    spawnRandomObject();
  }

  // Spør om nye animasjons frames(bilde)
  requestAnimationFrame(animate);

  // Rensker canvaset så nye objekter kan få plass på canvaset
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // flytter hver objekt nedover eller tilsiden
  for (var i = 0; i < objects.length; i++) {
    var object = objects[i];
    object.x += spawnRateOfDescent;
    object.y += spawnRateOfDescent;
    ctx.drawImage(object.type, object.x, object.y, 30, 30);
  }
}