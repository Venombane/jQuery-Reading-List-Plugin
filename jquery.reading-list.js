(function($) {
    $.fn.readingList = function(options) {

        var settings = $.extend({
            color: "#000000",
            fontFamily: "sans-serif",
            imgBorder: "5px solid #67007c",
            imgWidth: "50%",
            outerBorder: "5px solid #67007c",
            textBorder: "5px solid #67007c"
        }, options)

        /**
         * Interating through each reading list
         */
        return this.each(function() {
            
            console.log($(this).find("div"));
            
            $(this).css("color", settings.color);
            $(this).css("font-family", settings.fontFamily);
            $(this).find("img").css("border", settings.imgBorder);
            $(this).find("img").css("width", settings.imgWidth); 
            $(this).find("li").css("border", settings.outerBorder); 
            $(this).find("div").next().css("border", settings.textBorder);

            
            // Add border color/border size/background color x2
            
            
            
        })
    }
}(jQuery))