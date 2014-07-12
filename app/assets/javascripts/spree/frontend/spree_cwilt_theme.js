// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'

//= require lightbox.min.js

var index = 1;

$(document).ready(function() {
  startSlider();
});


function startSlider() {
  count = $("#showcase_inner_container > img").size();

  console.log($("#showcase_inner_container")[0]);

  loop = setInterval( function() {
    $("#showcase_inner_container > img#" + index).css("transform", "translateX(" + (index * -663) + "px)");
    index += 1;
    $("#showcase_inner_container > img#" + index - 1).css("transform", "translateX(" + (count * 663) + "px)");

  }, 5000);
}
