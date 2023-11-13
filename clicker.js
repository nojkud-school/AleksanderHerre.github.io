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
twoXButton.textContent = isTwoXUpgraded ? "handlet" : `2X $${twoXcost}`;
autoclickButton.textContent = isAutoclickUpgraded ? "handlet" : `1Clk Second  $${autoclickcost}`;

twoXButton.addEventListener('click', () => {
    if (!isTwoXUpgraded && count >= twoXcost) {
        funds -= twoXcost;
        count -= twoXcost;
        isTwoXUpgraded = true;
        counter.textContent = "$" + count;
        localStorage.setItem('clickCount', count);
        localStorage.setItem('funds', funds);
        localStorage.setItem('isTwoXUpgraded', isTwoXUpgraded);
        twoXButton.textContent = "handlet";
    } else if (isTwoXUpgraded) {
        alert("Du eier allerede 2x.");
    } else {
        alert("Skaf deg mer penger.");
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
        autoclickButton.textContent = "handlet";
        setInterval(autoclickclickHandler, 500);
    } else if (isAutoclickUpgraded) {
        alert("Du eier allerede autoclicker.");
    } else {
        alert("Skaf deg mer penger.");
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


const canvas = document.getElementById('gameCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const appleclickHandler = () => {
    count += 20;
    counter.textContent = "$" + count;
    localStorage.setItem('clickCount', count);
};

apple.addEventListener('click', appleclickHandler);

let intervalId;



function spawnRandomObject() {
    const appleWidth = apple.offsetWidth;
    const appleHeight = apple.offsetHeight;
    const randomX = Math.random() * (canvas.width - appleWidth);
    const randomY = Math.random() * (canvas.height - appleHeight);
    apple.style.position = "absolute";
    apple.style.left = randomX + "px";
    apple.style.top = randomY + "px";
    apple.style.visibility = "visible";
    appleSpawned = true;
    setTimeout(() => {
        apple.style.visibility = "hidden";
        appleSpawned = false;

        // fart på eple
        setTimeout(() => {
            spawnRandomObject();
        }, 80000);
    }, 4000);
}

spawnRandomObject();


function checkOverlap() {
    const elements = document.elementsFromPoint(
        parseInt(apple.style.left) + apple.offsetWidth / 2,
        parseInt(apple.style.top) + apple.offsetHeight / 2
    );

    for (let element of elements) {
        if (element.tagName.toLowerCase() !== "img") {
            return true;
        }
    }
    return false;
}