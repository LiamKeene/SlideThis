/* SlideThis

Copyright (c) 2013 Liam Keene
Available under the MIT License
*/
(function($) {
    $.fn.slidethis = function(options) {

        // Default settings
        var settings = $.extend({
            'auto': true,       // Boolean: automatically animate slides (true)
            'pager': true,      // Boolean: show pager for slides (true)
            'speed': 500,       // Integer: time (in ms) of transition (500)
            'timeout': 5000,    // Integer: time (in ms) between transitions (5000)
            'width': 600,       // Integer: width (in px) of the slideshow (600)
            'height': 300,      // Integer: height (in px) of the slideshow (300)
        }, options);

        // With no auto mode, we must have the pager
        if (!settings.auto && !settings.pager) { settings.pager = true; };

        return this.each(function() {
            // Find some frequently used elements
            // The element containing the slide show (#slideshow)
            var $this = $(this);
            // The slides in an unordered list
            var $slides = $this.find('ul li');
            // The images in the slide elements
            var $images = $this.find('img');

            // Hide slides except first
            $slides.not(':first').hide();

            // Set the dimensions of the images
            $images.width(settings.width).height(settings.height);

            // Create and add the pager
            if (settings.pager) {
                $this.append('<ul id="pager"/>');
                $slides.each(function(i) {
                    i+=1;
                    // Unique ID to the slide
                    $(this).attr('id', 'slide-' + i);
                    // Append an element for each slide to the pager
                    $('#pager').append('<li><span>' + i + '</span></li>');
                })
                $('#pager span:first').addClass('active');

                // Define the click event on the pager
                var $page = $('#pager span');
                $page.click(function() {
                    // Find the slide corresponding to the page clicked
                    var $next = $('#slide-' + $(this).html());

                    if ($next.is(':hidden')) {
                        // Replace current slide with next slide
                        $slides.fadeOut(settings.speed);
                        $next.fadeIn(settings.speed);

                        // Update the pager
                        $page.removeClass('active');
                        $(this).addClass('active');
                    }
                })
            }

            // Run automatically
            if (settings.auto) {
                var auto = setInterval(function() {
                    // Send current slide to end of slideshow
                    $slides.filter(':first-child').fadeOut(settings.speed)
                        .next('li').fadeIn(settings.speed)
                        .end().appendTo($slides.parent());
                }, settings.timeout)
            }
        });

    };

}(jQuery));
