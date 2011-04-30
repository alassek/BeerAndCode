require (["jquery", "amplify.min"], function () {

amplify.request.define("locations", function (options) {

  return $.read(
    '/locations.json',
    options.data,
    options.success,
    options.error
  );

});

});
