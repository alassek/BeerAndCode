require(["jquery", "geo", "ui/carbonate"], function ($, geo) {

$(function() {
  $(window).konami(function () {
    (new Carbonate).start();
  });
});

$.when(geo.getCoords())
 .then(function (position) {
   var coords = { };
   if (position) {
     $.extend(coords, {
       lat: position.coords.latitude,
       lng: position.coords.longitude
     });
   }
   geo.getLocations(coords).then(loadLocations);
 });

function loadLocations (locations) {
  var html = [];
  locations = locations || [];
  $.each(locations, function (i, location) {
    html.push(
      $('<li></li>')
        .text([location.city, location.state].join(', '))
        .data('location', location)
        .get(0)
    );
  });
  $('#locations').append(html);
}

});

(function () {

  $.fn.konami = function (callback, code) {
    code = code || "38,38,40,40,37,39,37,39,66,65,13";
    return this.each(function () {
      var kkeys = [];
      $(this).keydown(function (e) {
        kkeys.push(e.keyCode);
        if (kkeys.toString().indexOf(code) >= 0) {
          $(this).unbind('keydown', arguments.callee);
          callback(e);
        }
      }, true);
    });
  }

})(jQuery);