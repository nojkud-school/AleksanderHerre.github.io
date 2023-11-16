$(document).ready(function ($) {
    // Initialize counts from local storage or default to 0
    var tailsCount = parseInt(localStorage.getItem('tailsCount')) || 0;
    var headsCount = parseInt(localStorage.getItem('headsCount')) || 0;

    // Display initial counts
    $('#tails_result').text('Tails: ' + tailsCount);
    $('#heads_result').text('Heads: ' + headsCount);

   
    $('#coin').on('click', function () {
        var flipResult = Math.random();
        $('#coin').removeClass();
        (flipResult <=0.5)
    });
        
        $('#result_coin').text('It is');

        setTimeout(function () {
            
                $('#coin').addClass('heads');
                $('#result_coin').text('It is heads');
                headsCount++;
                console.log('It is head');
            }
                $('#coin').addClass('tails');
                $('#result_coin').text('It is tails');
                tailsCount++;
                console.log('It is tails');
            }
                    

            // Update and display counts
            localStorage.setItem('tailsCount', tailsCount);
            localStorage.setItem('headsCount', headsCount);
            $('#tails_result').text('Tails: ' + tailsCount);
            $('#heads_result').text('Heads: ' + headsCount);
        }, 3000);
    });

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