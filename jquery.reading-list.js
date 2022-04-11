(function($) {
    $.fn.readingList = function(options) {

        var settings = $.extend({
            color: "#000000",
            fontFamily: "sans-serif"
        }, options)

        /**
         * Interating through each image Gallery
         */
        return this.each(function() {
            /**
             * Declaring new element(s) variables
             */
            
            
            $(this).css("color", settings.color);
            $(this).css("font-family", settings.fontFamily);
            
            
            
        })
    }
}(jQuery))