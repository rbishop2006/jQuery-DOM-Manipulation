$(document).ready(function() {
  $(".titles").on("click", function(e) {
    $(".content").removeClass("show")

    $(this)
      .find("+ .content")
      .addClass("show")
  })
})
