// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'

$(window).load(function() {
  var _intervalId;

  function loop() {
    $("#showcase_inner_container").css("transform", "translateX("+$(this).index() * 663+"px)");
  };

  _intervalId = setInterval( loop, 1000);

});
