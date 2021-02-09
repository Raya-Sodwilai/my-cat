$(document).ready(function() {
  $("button#pink").click(function() {
    $("body").removeClass();
    $("body").addClass("pink-background");
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
});