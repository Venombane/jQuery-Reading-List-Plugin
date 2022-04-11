(function($) {
    $.fn.readingList = function(options) {

        var settings = $.extend({
            color: "#000000",
            fontFamily: "sans-serif"
        }, options)

        /**
         * Interating through each reading list
         */
        return this.each(function() {
            
            
            
            $(this).css("color", settings.color);
            $(this).css("font-family", settings.fontFamily);
            // Add border color/border size/image size/background color x2
            
            
            
        })
    }
}(jQuery))