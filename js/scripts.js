$(document).ready(function () {
  $("#blanks form").submit(function (event) {
    var nameInput = $("input#name").val();
    var foodInput = $("input#food").val();
    var musicInput = $("input#music").val();
    var colorInput = $("input#color").val();

    $(".name").text(nameInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".color").text(colorInput);

    $("#colorLink").attr("href", "http://www.color-hex.com/color/" + colorInput.slice(1));

    $("#results").show();

    event.preventDefault();
  });

});
