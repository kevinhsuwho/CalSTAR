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
  callback: showPhoto,
});

function showPhoto() {
  $(".team").fadeIn();
};

$(".leader").typed({
  strings: ["LEADERS"],
  typeSpeed: 200,
  startDelay: 1200,
  showCursor: false,
});

$(".year").typed({
  strings: ["2016"],
  typeSpeed: 200,
  startDelay: 1200,
  showCursor: false,
});

$(".interest").typed({
  strings: ["Interested in CalSTAR?"],
  typeSpeed: 125,
  startDelay: 800,
  showCursor: false,
  callback: showContact,
});

function showContact() {
  $(".speel").fadeIn();
  $(".icontext").fadeIn();
  $(".icon").fadeIn();
};

$(".face").hover(function() {
    $(this).find(".circle").addClass("circle-hover");
  }, function() {
    $(this).find(".circle").removeClass("circle-hover");
});
});
