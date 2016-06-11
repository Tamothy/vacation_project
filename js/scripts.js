$(document).ready(function () {
  $("#blanks form").submit(function (event) {
    var nameInput = $("input#name").val();
    var flowerInput = $("select#flower").val();
    var winterInput = $("select#winter_sport").val();
    var seasonInput = $("input:radio[name=season]:checked").val();

    $(".name").text(nameInput);

    if (seasonInput === "summer") {
      $("div#hawaii").fadeIn();
    } else if (seasonInput === "fall") {
      $("div#france").fadeIn();
    } else if (flowerInput === "yes" && seasonInput === "fall") {
      $("div#netherlands").fadeIn();
    } else if (winterInput === "yes" || seasonInput === "winter") {
      $("div#switzerland").fadeIn();
    }

    event.preventDefault();
  });
});
