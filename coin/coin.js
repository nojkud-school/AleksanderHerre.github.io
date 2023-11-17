$(document).ready(function ($) {
    // Initialiser tellinger fra lokal lagring eller standardverdi 0
    var tailsCount = parseInt(localStorage.getItem('tailsCount')) || 0;
    var headsCount = parseInt(localStorage.getItem('headsCount')) || 0;

    // Viser initielle tellinger
    $('#tails_result').text('Tails: ' + tailsCount);
    $('#heads_result').text('Heads: ' + headsCount);

    // Variabel for å spore status for ventetids perioden
    var isCooldown = false;

    function coinClickHandler() {
        // Sjekk om ventetid er aktiv, returner hvis det er sant
        if (isCooldown) {
            return;
        }

        var flipResult = Math.random();

        // Deaktiver coinclick under animasjon og ventetid
        $('#coin').off('click');

        $('#coin').removeClass();

        // Legg til spinning-class for å starte coin-animation
        $('#coin').addClass('spinning');

        // Sett vente tid status til ja
        isCooldown = true;

        // Forsink koden inne i setTimeout med 3,25 sekunder
        setTimeout(function () {
            // Fjern spinning-class etter at animasjonen er ferdig
            $('#coin').removeClass('spinning');

            // Etter at animasjonen er fullført, oppdater tekstresultatet og tellere
            if (flipResult <= 0.5) {
                $('#coin').addClass('heads');
                setTimeout(function () {
                    $('#result_coin').text('Det er heads');
                    headsCount++;
                    console.log('Det er heads');
                }, 3250); 

                // Oppdater og vis tellinger med forsinkelse for synkronisering
                setTimeout(function () {
                    updateAndDisplayCounts();
                }, 3250); 
            } else {
                $('#coin').addClass('tails');
                setTimeout(function () {
                    $('#result_coin').text('Det er tails');
                    tailsCount++;
                    console.log('Det er tails');
                }, 3250); 

                // Oppdater og vis tellinger med forsinkelse for synkronisering
                setTimeout(function () {
                    updateAndDisplayCounts();
                }, 3250); // Justering av forsinkelsesvarighet etter behov
            }

            $('#result_coin').text('');

            // Aktiver myntklikk etter animasjon, tekstoppdatering og ventetid
            setTimeout(function () {
                $('#coin').on('click', coinClickHandler);
                // Tilbakestill ventetids til falskt
                isCooldown = false;
            }, 3250); // Ventetids varighet
        }, 100);
    }

    // Funksjon for å oppdatere og vise tellinger
    function updateAndDisplayCounts() {
        // Lokal lagring for telling av Tails eller Heads
        localStorage.setItem('tailsCount', tailsCount);
        localStorage.setItem('headsCount', headsCount);
        $('#tails_result').text('Tails: ' + tailsCount);
        $('#heads_result').text('Heads: ' + headsCount);
    }

    // Fest klikke hendelsen
    $('#coin').on('click', coinClickHandler);

    // Reset knapp klikke hendelse
    $('#reset').on('click', function () {

        // Fjern lokal lagring
        localStorage.removeItem('tailsCount');
        localStorage.removeItem('headsCount');

        // Tilbakestill tellinger og visning
        tailsCount = 0;
        headsCount = 0;
        $('#tails_result').text('Tails: ' + tailsCount);
        $('#heads_result').text('Heads: ' + headsCount);
    });
});