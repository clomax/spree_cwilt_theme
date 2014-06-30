// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'

var index = 0;
var next  = 1;

$(document).ready(function() {
  startSlider();
});


function startSlider() {
  count = $("#showcase_inner_container > img").size();

  loop = setInterval( function() {
    if(next == count+1) {
      next = 0;
      index = 0;
    }

    $("#showcase_inner_container > img").transition({ x: index * 663 + "px"}, ease);
    $("#showcase_inner_container > img#" + index).transition({ x: index * -663 + "px"},ease);
    index = next;
    next = next + 1;

  }, 3000);
}
