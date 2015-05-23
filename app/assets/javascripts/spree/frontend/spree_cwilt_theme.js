// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'

var index = 1;

$(document).ready(function() {
  if (window.location.pathname == "/") {
    startSlider();
  }
});


function startSlider() {
  images = $("#showcase_inner_container > img");
  count = images.size();

  loop = setInterval( function() {
    document.getElementById("showcase_inner_container").className = "showcase_img";
    $("#showcase_inner_container").css("transform", "translateX(" + (index * -663) + "px)");

    if (index == count) {
      index = 0;
      document.getElementById("showcase_inner_container").className = "showcase_img_reset";
      $("#showcase_inner_container").css("transform", "translateX(" + (index * -663) + "px)");
    }

    index += 1;

  }, 5000);
}

(function() {
  $('.hmb_menu').click(function() {
    $('.mobile-subtaxon-menu').toggleClass('expand')
  });
}).call(this);

