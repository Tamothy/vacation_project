$(document).ready(function () {
  $("#blanks form").submit(function (event) {
    var nameInput = $("input#name").val();
    var flowerInput = $("select#flower").val();
    var snowInput = $("select#snow").val();
    var seasonInput = $("input:radio[name=season]:checked").val();

    $(".name").text(nameInput);

    if (flowerInput === "yes" && seasonInput === "fall" || seasonInput === "spring") {
      $("div#netherlands").fadeIn();
      $("div#switzerland").hide();
      $("div#hawaii").hide();
      $("div#france").hide();
    } else if (snowInput === "yes" && seasonInput === "winter" || seasonInput === "winter") {
      $("div#netherlands").hide();
      $("div#switzerland").fadeIn();
      $("div#hawaii").hide();
      $("div#france").hide();
    } else if (seasonInput === "summer") {
      $("div#netherlands").hide();
      $("div#switzerland").hide();
      $("div#hawaii").fadeIn();
      $("div#france").hide();
    } else if (seasonInput === "fall") {
      $("div#netherlands").hide();
      $("div#switzerland").hide();
      $("div#hawaii").hide();
      $("div#france").fadeIn();
    }

    event.preventDefault();
  });
});
