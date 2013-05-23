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

        // Current index of the slideshow
        var index  = 0;

        // With no auto mode, we must have the pager
        if (!settings.auto && !settings.pager) { settings.pager = true; };

        return this.each(function() {
            // Find some frequently used elements
            // The element containing the slide show (#slideshow)
            var $this = $(this);
            // The slides in an unordered list
            var $slides = $this.find('ul li');
            // The pager
            var $pager = $('<ul id="pager"/>');

            // Add unique ID to each slide
            $slides.each(function(i) {
                $(this).attr('id', 'slide-' + i);
            });

            // Hide slides except first
            $slides.not(':first').hide();

            // Set the dimensions of the slideshow elements
            $this.width(settings.width).height(settings.height);
            $this.find('ul, li img').width(settings.width).height(settings.height);

            // Create and add the pager
            if (settings.pager) {
                $this.append($pager);
                $slides.each(function(i) {
                    // Append an element for each slide to the pager
                    $('#pager').append('<li><span id="goto-slide-' + i + '">' + i + '</span></li>');
                })
                $('#pager span:first').addClass('active');

                // Define the click event on the pager
                var $page = $('#pager span');
                $page.click(function() {
                    // Find the slide corresponding to the page clicked
                    index = $('#pager span').index($(this));
                    var $next = $('#slide-' + index);

                    if ($next.is(':hidden')) {
                        // Replace current slide with next slide
                        show_slide($slides, $next);

                        // Update the pager
                        update_pager(index);
                    }
                })
            }

            // Run automatically
            if (settings.auto) {
                var auto = setInterval(function() {
                    // Send current slide to end of slideshow
                    next_index = (index + 1 < $slides.length) ? index + 1 : 0
                    show_slide($slides.eq(index), $slides.eq(next_index));

                    // Update pager
                    if (settings.pager) {
                        update_pager(next_index);
                    }

                    // Update the index
                    index = next_index;
                }, settings.timeout)
            }

            show_slide = function(current, next) {
                current.fadeOut(settings.speed);
                next.fadeIn(settings.speed);
            }

            update_pager = function(i) {
                $('#pager span').removeClass('active');
                $('#pager span').eq(i).addClass('active');
            }
        });

    };

}(jQuery));
