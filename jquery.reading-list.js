(function($) {
    $.fn.readingList = function(options) {

        var settings = $.extend({
            imageBorder: "5px solid #ffffff",
            borderRadius: "5px",
            imageWidth: "500px",
            imageHeight: "400px"
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
                    "height": settings.imageHeight,
                    "border": settings.imageBorder,
                    "border-radius": settings.borderRadius
                });
            }
        })
    }
}(jQuery))