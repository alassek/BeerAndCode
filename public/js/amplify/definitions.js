amplify.request.define("/locations.json", function (options) {
  // mocking this for now
  options.success({
    status: 'success',
    data: {
      locations: [
        { city: 'Omaha', state: 'NE', lat: 41.259743, lng: -95.997849 }
      ]
    }
  });
});
