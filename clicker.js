let count = localStorage.getItem('clickCount') || 0;
const cookie = document.getElementById('cart');
const counter = document.getElementById('counter');
const resetButton = document.getElementById('reset');

counter.textContent = "$" + count;

cookie.addEventListener('click', () => {
    count++;
    counter.textContent = "$" + count;
    localStorage.setItem('clickCount', count);
});

resetButton.addEventListener('click', () => {
    count = 0;
    counter.textContent = "$" + count;
    localStorage.setItem('clickCount', count);
});