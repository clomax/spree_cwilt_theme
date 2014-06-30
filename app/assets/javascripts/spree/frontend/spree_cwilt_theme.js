// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'

var index = 1;
var next  = 2;

$(document).ready(function() {
  startSlider();
});


function startSlider() {
  count = $("#showcase_inner_container > img").size();

  loop = setInterval( function() {
    if(next > count) {
      next = 1;
      index = 1;
    }

    $("#showcase_inner_container > img#" + index).css("transform", "translateX(" + (index * -663) + "px)");
    index = next;
    next = next + 1;

  }, 2000);
}
