window.onload = function() {
    var welcomeElement = document.getElementById("welcome");
    welcomeElement.classList.add("visible");
};


document.addEventListener('DOMContentLoaded', function() {
    const cell = document.querySelector('.split-cell');
    const cellHeight = cell.clientHeight;
    const topHalf = document.getElementById('norsk');
    const bottomHalf = document.getElementById('yff');
    
    topHalf.style.lineHeight = cellHeight / 2 + 'px';
    bottomHalf.style.lineHeight = cellHeight / 2 + 'px';
});
