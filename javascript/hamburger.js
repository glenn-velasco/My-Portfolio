$(document).ready(function() {
    $('#hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('#navLink').toggleClass('active');
      
        // Toggle the overlay
        $('.cover').css('display', function(_, value) {
            return value === 'none' ? 'block' : 'none';
        });

        if ($('#hamburger').hasClass('active')) {
    
            $('body').addClass('lock-scroll'); // Lock scroll
        } else {
            $('body').removeClass('lock-scroll'); // Unlock scroll
        }
    });


    $(window).on('resize', function() {
    // Hide overlay when window is resized
        $('.cover').hide();
        $('#hamburger').removeClass('active');  
        $('body').removeClass('lock-scroll');
    });

    var currentYear = new Date().getFullYear();
    $('.changeYear').text(currentYear);
});