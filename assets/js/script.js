$(document).ready(function() {

$(".element").typed({
  strings: ["CALSTAR"],
  typeSpeed: 350,
  startDelay: 1000,
  showCursor: false,
  callback: showText,
});

function showText() {
  $(".picture-text2").fadeIn();
  $(".picture-text3").fadeIn();
};

$(".text2").typed({
  strings: ["3... 2... 1... LIFTOFF!"],
  typeSpeed: 250,
  startDelay: 3000,
  showCursor: false,
});

$(".face").hover(function() {
    $(this).find(".circle").addClass("circle-hover");
  }, function() {
    $(this).find(".circle").removeClass("circle-hover");
});
});
