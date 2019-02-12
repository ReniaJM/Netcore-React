$(document).ready(function() {

    $('.js--accessibility__font__size li').click(function (ev) {

        var selectedClass = 'current';

        // Remove current class from the list
        if ($(this).parent().find('li a').hasClass(selectedClass)) {
            $(this).parent().find('li a').removeClass(selectedClass);
        }

        // Add current class to clicked element
        $(this).find('a').addClass(selectedClass);

        // Add the font class to the wrapper
        $('html').attr('id', $(this).attr('id'));

        // Set the cookie for the clicked item
        if (Cookies.enabled) {
            Cookies.set('font_size', $(this).attr('id'));
        }

        ev.preventDefault();

    });

// Get and Set the font size from the cookie
    if (Cookies.enabled) {

        var fontSize = Cookies.get('font_size');
        if (fontSize) {
            // set the font size on the body
            jQuery('html').attr('id', fontSize);
            jQuery('.js--accessibility__font__size').find('li a').removeClass('current');
            jQuery('.js--accessibility__font__size li#' + fontSize + ' a').addClass('current');

        }
    }

});