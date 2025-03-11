$(document).ready(function() {
    $(".tooltip").hover(
        function() {
            $(this).find(".tooltip-text").fadeIn(200);
        },
        function() {
            $(this).find(".tooltip-text").fadeOut(200);
        }
    );
  });