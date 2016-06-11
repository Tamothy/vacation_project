$(document).ready(function () {
  $("#blanks form").submit(function (event) {
    var nameInput = $("input#name").val();
    var flowerInput = $("select#flower").val();
    var snowInput = $("select#snow").val();
    var seasonInput = $("input:radio[name=season]:checked").val();

    $(".name").text(nameInput);

    if (flowerInput === "yes" && seasonInput === "fall" || seasonInput === "spring") {
      $("div#netherlands").fadeIn();
    } else if (snowInput === "yes" && seasonInput === "winter" || seasonInput === "winter") {
      $("div#switzerland").fadeIn();
    } else if (seasonInput === "summer") {
      $("div#hawaii").fadeIn();
    } else if (seasonInput === "fall") {
      $("div#france").fadeIn();
    }

    event.preventDefault();
  });
});
