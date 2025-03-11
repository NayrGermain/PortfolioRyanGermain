function loadPage(url) {
  $("html, body").animate({ scrollTop: 0 }, 500); // Remonte en douceur (500ms)

  $("#content").fadeOut(300, function() {
      $.ajax({
          url: url,
          success: function(data) {
              $("#content").html(data).fadeIn(300);
          },
          error: function() {
              alert("Erreur lors du chargement.");
          }
      });
  });
}


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
