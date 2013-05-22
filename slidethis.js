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

        return this.each(function() {
            // Find some frequently used elements
            var $this = $(this);
            var $slides = $this.find('ul li');
            var $images = $this.find('img');

            // Hide slides except first
            $slides.not(':first').hide();

            // Set the dimensions of the images
            $images.width(settings.width).height(settings.height);

        });

    };

}(jQuery));
