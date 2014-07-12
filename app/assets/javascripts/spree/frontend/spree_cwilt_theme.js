// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'

$(document).ready(function() {
  slider();
});

var index = 1;
var images = $("#showcase_inner_container > img");
var count = images.size();
var delay = 5000;
var timer;

function slider() {
  document.getElementById("showcase_inner_container").className = "showcase_img";
  $("#showcase_inner_container").css("transform", "translateX(" + (index * -663) + "px)");

  if (index == count) {
    index = 0;
    delay = 0;
    document.getElementById("showcase_inner_container").className = "showcase_img_reset";
    $("#showcase_inner_container").css("transform", "translateX(" + (index * -663) + "px)");
    delay = 5000;
  }

  console.log(index + " : " + (index * -663) + "px  :  " + delay);
  index += 1;
}

(function repeat() {
  slider();
  timer = setTimeout(repeat, delay);
})();
