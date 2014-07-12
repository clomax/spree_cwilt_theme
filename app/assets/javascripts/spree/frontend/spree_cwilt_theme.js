// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'

$(document).ready(function() {
  var index = 1;
  var delay = 5000;
  var timer;
  var count = $("#showcase_inner_container > img").size();
  repeat();
});

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

  console.log(index + " : " + (index * -663) + "px  :  " + delay + "    count: " + count);
  index += 1;
}

function repeat() {
  slider();
  setTimeout(repeat, delay);
}
