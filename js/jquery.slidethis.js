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
        }, options);

        // Current index of the slideshow
        var index  = 0;

        // When auto mode is not set, force pager
        if (!settings.auto && !settings.pager) { settings.pager = true; };

        return this.each(function() {
            // The element containing the slide show
            var $this = $(this);
            // The slides
            var $slides = $this.children();
            // The pager
            var $pager = $('<ul id="pager"/>');

            // Add unique ID to each slide
            $slides.each(function(i) {
                $(this).attr('id', 'slide-' + i);
            });

            // Hide slides except first
            $slides.not(':first').addClass('hidden').hide();

            // Create and add the pager
            if (settings.pager) {
                $this.after($pager);
                $slides.each(function(i) {
                    $pager.append('<li><span id="goto-slide-' + i + '">' + i + '</span></li>');
                });
                $pager.find('span:first').addClass('active');

                var $page = $('#pager span');
                $page.click(function() {
                    // Find the slide corresponding to the page clicked
                    index = $page.index($(this));
                    var $next = $('#slide-' + index);

                    if ($next.is(':hidden')) {
                        // Show next slide
                        show_slide($slides, $next);
                        // Update the pager
                        update_pager(index);
                    };
                });
            };

            // Run automatically
            if (settings.auto) {
                setInterval(function() {
                    // Get index of next slide (cycling back to 0 when required)
                    var next_index = (index + 1 < $slides.length) ? index + 1 : 0;

                    // Show the next slide
                    show_slide($slides.eq(index), $slides.eq(next_index));

                    // Update the pager if used
                    if (settings.pager) {
                        update_pager(next_index);
                    }

                    // Update the index
                    index = next_index;
                }, settings.timeout);
            };

            var show_slide = function(current, next) {
                // Animate the transition from current to next element
                current.fadeOut(settings.speed, function() { $(this).addClass('hidden') });
                next.fadeIn(settings.speed, function() { $(this).removeClass('hidden') });
            };

            var update_pager = function(i) {
                // Remove active class and add to indexed element
                $('#pager span').removeClass('active');
                $('#pager span').eq(i).addClass('active');
            };
        });
    };
}(jQuery));
