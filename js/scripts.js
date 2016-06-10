$(document).ready(function () {
  $("#blanks form").submit(function (event) {
    var nameInput = $("input#name").val();
    var ageInput = $("input#age").val();
    var flowerInput = $("select#flower").val();
    var winterInput = $("select#winter_sport").val();
    var seasonInput = $(input:radio[name=season]:checked).val();

    $(".name").text(nameInput);
    $(".age").text(foodInput);
    $(".flower").text(flowerInput);
    $(".winter_sport").text(winterInput);

    //$("#colorLink").attr("href", "http://www.color-hex.com/color/" + colorInput.slice(1));

    $("#results").show();

    event.preventDefault();
  });

});
