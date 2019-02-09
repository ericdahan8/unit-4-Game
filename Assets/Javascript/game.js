//Logic for the Javascript

//Array for characters

//one containers for characters

//one container for enemies selector

//one for defender area and attack

//show them in all each area to make them hide

//Logic

//javascript for clicking characters to hide

//when you click obi won show other guys then hide on click

$(document).ready(function() {
  $(".G1").on("click", function() {
    var obi1div = $(".G1").detach();
    $(".D1").append(obi1div);
  });

  $(".G2").on("click", function() {
    var obi1div = $(".G2").detach();
    $(".D1").append(obi1div);
  });

  $(".G3").on("click", function() {
    var obi1div = $(".G3").detach();
    $(".D1").append(obi1div);
  });

  $(".G4").on("click", function() {
    var obi1div = $(".G4").detach();
    $(".D1").append(obi1div);
  });

  $(obi1div).on("click", function() {
    var newDiv = $(obi1div).detach();
    $(".E1").appendTo(newDiv);
  });
});
