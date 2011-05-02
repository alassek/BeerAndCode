define(["jquery", "amplify.min", "amplify/definitions", "util/jquery.mockjax", "util/jquery.rest"], function ($) {

var geo = {};
(function () {

  this.getLocations = function (coords) {
    var dfd = $.Deferred();

    if ( amplify.store("locations") ) {
      dfd.resolve( amplify.store("locations") );
    } else {
      amplify.request("locations", coords, function (response) {
        if (response)
        if (response.data)
        if (response.data.locations) {
          dfd.resolve( amplify.store("locations", response.data.locations) );
        }
        if (!dfd.isResolved()) dfd.resolve();
      });
    }

    return dfd.promise();
  }

  this.getCoords = function () {
    var dfd = $.Deferred();

    if (amplify.store("coords")) {
      dfd.resolve( amplify.store("coords") );
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          dfd.resolve( amplify.store("coords", position) );
        },
        function (error) {
          dfd.resolve();
        }, {
          timeout: 5000
        }
      );
    } else {
      dfd.resolve();
    }

    return dfd.promise();
  }

}).apply(geo);

return geo;
});
