require(["jquery", "geo", "ui/carbonate"], function ($, geo) {

$(function() {
  $(window).konami(function () {
    var carbonate = new Carbonate();
    carbonate.start(); 
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

function loadLocations (locations) {
  var html = [];
  $.each(locations, function (i, location) {
    html.push(
      $('<li></li>')
        .text([location.city, location.state].join(', '))
        .data('lat', location.lat)
        .data('lng', location.lng)
        .get(0)
    );
  });
  $('#locations').append(html);
}

});