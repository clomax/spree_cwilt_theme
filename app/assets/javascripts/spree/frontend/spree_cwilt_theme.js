// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'

//= require lightbox.min.js

var index = 1;

$(document).ready(function() {
  startSlider();
});


function startSlider() {
  images = $("#showcase_inner_container > img");
  count = images.size();

  loop = setInterval( function() {
    $("#showcase_inner_container > img").css("transform", "translateX(" + (index * -663) + "px)");
    //$("#showcase_inner_container > img#" + index).css("transform", "translateX(" + (index * -663) + "px)");
    index += 1;

    if (index == count) {
      console.log(document.getElementById("showcase_inner_container"));
      document.getElementById("showcase_inner_container > img").className("showcase_images");
      index = 0;
    }

  }, 5000);
}
