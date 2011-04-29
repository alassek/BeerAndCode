define(["jquery", "amplify.min", "amplify/definitions", "util/jquery.mockjax", "util/jquery.rest"], function ($) {

var geo = {};
(function () {

  this.getLocations = function (coords) {
    var dfd = $.Deferred();
    amplify.request("/locations.json", coords, function (response) {
      if (response)
      if (response.data)
      if (response.data.locations) {
        dfd.resolve(response.data.locations);
      }
    });
    return dfd.promise();
  }

  this.getCoords = function () {
    var dfd = $.Deferred();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        dfd.resolve(position);
      });
    } else {
      dfd.resolve();
    }

    return dfd.promise();
  }

}).apply(geo);

return geo;
});
