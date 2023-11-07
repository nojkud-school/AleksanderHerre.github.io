let count = parseInt(localStorage.getItem('clickCount')) || 0;
let funds = parseInt(localStorage.getItem('funds')) || 0;
let twoXcost = 50;
let autoclickcost = 100;
let isTwoXUpgraded = localStorage.getItem('isTwoXUpgraded') === 'true';
let isAutoclickUpgraded = localStorage.getItem('isAutoclickUpgraded') === 'true';

const counter = document.getElementById('counter');
const resetButton = document.getElementById('reset');
const twoXButton = document.getElementById('twoX');
const autoclickButton = document.getElementById('autoclick');
const apple = document.getElementById('apple')

counter.textContent = "$" + count;
twoXButton.textContent = isTwoXUpgraded ? "Kjøpt" : `2X $${twoXcost}`;
autoclickButton.textContent = isAutoclickUpgraded ? "Kjøpt" : `1Clk Second  $${autoclickcost}`;

twoXButton.addEventListener('click', () => {
    if (!isTwoXUpgraded && count >= twoXcost) {
        funds -= twoXcost;
        count -= twoXcost;
        isTwoXUpgraded = true;
        counter.textContent = "$" + count;
        localStorage.setItem('clickCount', count);
        localStorage.setItem('funds', funds);
        localStorage.setItem('isTwoXUpgraded', isTwoXUpgraded);
        twoXButton.textContent = "Kjøpt";
    } else if (isTwoXUpgraded) {
        alert("2x er allerede kjøpt.");
    } else {
        alert("få mer penger.");
    }
});

autoclickButton.addEventListener('click', () => {
    if (!isAutoclickUpgraded && count >= autoclickcost) {
        funds -= autoclickcost;
        count -= autoclickcost;
        isAutoclickUpgraded = true;
        counter.textContent = "$" + count;
        localStorage.setItem('clickCount', count);
        localStorage.setItem('funds', funds);
        localStorage.setItem('isAutoclickUpgraded', isAutoclickUpgraded);
        autoclickButton.textContent = "Kjøpt";
        setInterval(autoclickclickHandler, 500);
    } else if (isAutoclickUpgraded) {
        alert("autoclick er allerede kjøpt.");
    } else {
        alert("få mer penger.");
    }
});

const twoXclickHandler = () => {
    if (isTwoXUpgraded) {
        count += 2;
    } else {
        count++;
    }
    counter.textContent = "$" + count;
    localStorage.setItem('clickCount', count);
};

const autoclickclickHandler = () => {
    if (isAutoclickUpgraded) {
        count += 1;
        counter.textContent = "$" + count;
        localStorage.setItem('clickCount', count);
    }
};

cart.addEventListener('click', twoXclickHandler);

if (isAutoclickUpgraded) {
    // fart på autoclicker
    setInterval(autoclickclickHandler, 500);
}

resetButton.addEventListener('click', () => {
    count = 0;
    isTwoXUpgraded = false;
    isAutoclickUpgraded = false;
    counter.textContent = "$" + count;
    localStorage.setItem('clickCount', count);
    localStorage.setItem('isTwoXUpgraded', isTwoXUpgraded);
    localStorage.setItem('isAutoclickUpgraded', isAutoclickUpgraded);
    twoXButton.textContent = `2X $${twoXcost}`;
    autoclickButton.textContent = `1Clk Second  $${autoclickcost}`;
});



let appleSpawned = false;

const canvas = document.getElementById('gameCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const appleclickHandler = () => {
    count += 500;
    counter.textContent = "$" + count;
    localStorage.setItem('clickCount', count);
};

apple.addEventListener('click', appleclickHandler);

function spawnRandomObject() {
    if (!appleSpawned) {
        const randomX = Math.random() * (canvas.width - apple.width);
        const randomY = Math.random() * (canvas.height - apple.height);
        apple.style.position = "absolute";
        apple.style.left = randomX + "px";
        apple.style.top = randomY + "px";
        appleSpawned = true;
    }
}
spawnRandomObject();

setInterval(() => {
    spawnRandomObject();
}, 4000);