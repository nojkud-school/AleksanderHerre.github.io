$(document).ready(function ($) {
    // Initialize counts from local storage or default to 0
    var tailsCount = parseInt(localStorage.getItem('tailsCount')) || 0;
    var headsCount = parseInt(localStorage.getItem('headsCount')) || 0;

    // Display initial counts
    $('#tails_result').text('Tails: ' + tailsCount);
    $('#heads_result').text('Heads: ' + headsCount);

    function coinClickHandler() {
        var flipResult = Math.random();

        // Disable the coin click during the animation
        $('#coin').off('click');

        $('#coin').removeClass();

        // Add spinning class to initiate the coin flip animation
        $('#coin').addClass('spinning');

        // Delay the code inside setTimeout by 3.25 seconds (3250 milliseconds)
        setTimeout(function () {
            // Remove the spinning class after the animation is complete
            $('#coin').removeClass('spinning');

            // After the animation is complete, update the result text and counters
            if (flipResult <= 0.5) {
                $('#coin').addClass('heads');
                setTimeout(function () {
                    $('#result_coin').text('It is heads');
                    headsCount++;
                    console.log('It is head');
                }, 3250); // Adjust the delay duration as needed

                // Update and display counts with a delay for synchronization
                setTimeout(function () {
                    updateAndDisplayCounts();
                }, 3250); // Adjust the delay duration as needed
            } else {
                $('#coin').addClass('tails');
                setTimeout(function () {
                    $('#result_coin').text('It is tails');
                    tailsCount++;
                    console.log('It is tails');
                }, 3250); // Adjust the delay duration as needed

                // Update and display counts with a delay for synchronization
                setTimeout(function () {
                    updateAndDisplayCounts();
                }, 3250); // Adjust the delay duration as needed
            }

            $('#result_coin').text('It is');

            // Enable the coin click after the animation and text update
            $('#coin').on('click', coinClickHandler);
        }, 100);
    }

    // Function to update and display counts
    function updateAndDisplayCounts() {
        // Local storage for Tails and Heads counting.
        localStorage.setItem('tailsCount', tailsCount);
        localStorage.setItem('headsCount', headsCount);
        $('#tails_result').text('Tails: ' + tailsCount);
        $('#heads_result').text('Heads: ' + headsCount);
    }

    // Attach the click event handler
    $('#coin').on('click', coinClickHandler);

    // Reset button click event
    $('#reset').on('click', function () {
        // Clear local storage
        localStorage.removeItem('tailsCount');
        localStorage.removeItem('headsCount');

        // Reset counts and display
        tailsCount = 0;
        headsCount = 0;
        $('#tails_result').text('Tails: ' + tailsCount);
        $('#heads_result').text('Heads: ' + headsCount);
    });
});