// Plugin: jQuery.fontFlex
// Source: github.com/nathco/jQuery.fontFlex
// Author: Nathan Rutzky
// Modified by: Fred

$(document).ready(function(){
   
   function fontFlex(elem, min, max, mid) {

        $(window).resize(function() {

            let size = window.innerWidth / mid;

            if (size < min) {
                size = min;
            } else if (size > max) {
                size = max;
            }
            
            console.log(size);

            $(elem).css('font-size', size + 'px');
            
            console.log(elem);

        }).trigger('resize');
    };



});