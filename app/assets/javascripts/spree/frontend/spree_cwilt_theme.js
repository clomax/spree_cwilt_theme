// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'

//= require lightbox.min.js

var index = 1;

$(document).ready(function() {
  startSlider();
});


function startSlider() {
  images = $("#showcase_inner_container > img");
  count = images.size() + 1;

  loop = setInterval( function() {
    $("#showcase_inner_container").css("transform", "translateX(" + (index * -663) + "px)");
    //$("#showcase_inner_container > img#" + index).css("transform", "translateX(" + (index * -663) + "px)");

    if (index == count) {
      index = 0;
      document.getElementById("showcase_inner_container").className = "showcase_img_reset";
      $("#showcase_inner_container").css("transform", "translateX(" + (index * -663) + "px)");
      document.getElementById("showcase_inner_container").className = "showcase_img";
    }

    console.log(index + " : " + (index * -663) + "px");
    index += 1;

  }, 5000);
}
