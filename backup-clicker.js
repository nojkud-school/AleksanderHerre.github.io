let count = parseInt(localStorage.getItem('clickCount')) || 0;
let funds = parseInt(localStorage.getItem('funds')) || 0;
let twoXcost = 50;
let isUpgraded = localStorage.getItem('isUpgraded') === 'true';


const counter = document.getElementById('counter');
const resetButton = document.getElementById('reset');
const twoXButton = document.getElementById('twoX');
const autoclick = document.getElementById('autoclick')


counter.textContent = "$" + count;
twoXButton.textContent = isUpgraded ? "Kjøpt" : `2X $${twoXcost}`;

twoXButton.addEventListener('click', () => {
    if (!isUpgraded && count >= twoXcost) {
        funds -= twoXcost;
        count -= twoXcost;
        isUpgraded = true;
        counter.textContent = "$" + count;
        localStorage.setItem('clickCount', count);
        localStorage.setItem('funds', funds);
        localStorage.setItem('isUpgraded', isUpgraded);
        twoXButton.textContent = "Kjøpt";
    } else if (isUpgraded) {
        alert("2x er allerede kjøpt.");
    } else {
        alert("få mer penger.");
    }
});

resetButton.addEventListener('click', () => {
    count = 0;
    isUpgraded = false;
    counter.textContent = "$" + count;
    localStorage.setItem('clickCount', count);
    localStorage.setItem('isUpgraded', isUpgraded);
    twoXButton.textContent = `2X $${twoXcost}`;
});

const clickHandler = () => {
    if (isUpgraded) {
        count += 2;
    } else {
        count++;
    }
    counter.textContent = "$" + count;
    localStorage.setItem('clickCount', count);
};

cart.addEventListener('click', clickHandler);

