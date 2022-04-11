(function($) {
    $.fn.readingList = function(options) {

        var settings = $.extend({
            imageBorder: "5px solid #ffffff",
            borderRadius: "5px",
            imageWidth: "50%"
        }, options)

        /**
         * Interating through each image Gallery
         */
        return this.each(function() {
            /**
             * Declaring new element(s) variables
             */
            var $image;
            setImageProperties();

            function setImageProperties() {
                $image = $('<img>');
                $image.css({
                    "width": settings.imageWidth,
                    "border": settings.imageBorder,
                    "border-radius": settings.borderRadius
                });
            }
        })
    }
}(jQuery))