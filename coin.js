$(document).ready(function ($) {
    $('#coin').on('click', function () {
        // Reset the previous result
        $('#result_coin').text('It is');

        var flipResult = Math.random();
        $('#coin').removeClass();

        // Add a listener for the end of the transition
        $('#coin').one('transitionend', function () {
            // Delay for 2 seconds after spinning stops
            setTimeout(function () {
                if (flipResult <= 0.5) {
                    $('#coin').addClass('heads');
                    $('#result_coin').text('It is heads');
                    console.log('It is head');
                } else {
                    $('#coin').addClass('tails');
                    $('#result_coin').text('It is tails');
                    console.log('It is tails');
                }
            }, 2000);
        });

        // Trigger the transition by changing the transform property
        $('#coin').css('transform', 'rotateY(1800deg)');
    });
});