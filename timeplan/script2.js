// Vent til hele vinduet er lastet for å sikre at alle elementer er tilgjengelige
window.onload = function() {
    // Hent elementet med id "welcome"
    var welcomeElement = document.getElementById("welcome");
    
    // Legg til classen "visible" for og gjøre det synligt
    welcomeElement.classList.add("visible");
};

document.addEventListener('DOMContentLoaded', function() {
    // Hent referansen til elementet med klassen "split-cell"
    const cell = document.querySelector('.split-cell');
    
    // Henter høyden på cellen
    const cellHeight = cell.clientHeight;
    
    // Hent referansene til de to halvdelene av cellene
    const topHalf = document.getElementById('norsk');
    const bottomHalf = document.getElementById('yff');
    
    // Sett linjehøyden til topphalvdelen basert på halvparten av cellens høyde
    topHalf.style.lineHeight = cellHeight / 2 + 'px';
    
    // det samme bare motsatt
    bottomHalf.style.lineHeight = cellHeight / 2 + 'px';
});