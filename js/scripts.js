$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const food = $("#food").val();
    const music = $("input:radio[name=music]:checked").val();
    const color = $("#color").val();

    $(".person1").text(person1Input);
    $(".food").text(food);
    $(".music").text(music);
    $(".color").text(color);

    $("#story").show();

    event.preventDefault();

  });
});




