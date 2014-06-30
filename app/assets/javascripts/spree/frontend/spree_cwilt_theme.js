// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'

$(window).load(function() {
  function loop() {
    $("showcase_inner_container").css("transform", "translateX("+$(this).index() * -663+"px)");
  };
  window.setTimeout( loop, 1000 );
});
