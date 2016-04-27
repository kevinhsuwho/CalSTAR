$(document).ready(function() {

$(".element").typed({
  strings: ["C A L S T A R"],
  typeSpeed: 100,
  startDelay: 600,
  showCursor: false,
  callback: showText,
});

function showText() {
  $(".picture-text2").fadeIn();
  $(".picture-text3").fadeIn();
};

$(".text2").typed({
  strings: ["3... 2... 1... LIFTOFF!"],
  typeSpeed: 200,
  startDelay: 1200,
  showCursor: false,
});

$(".face").hover(function() {
    $(this).find(".circle").addClass("circle-hover");
  }, function() {
    $(this).find(".circle").removeClass("circle-hover");
});
});
