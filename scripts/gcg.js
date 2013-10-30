var gcg = {
  map: L.map('map', {
    center: [36.183333415495056,-112.12543487548828],
    zoom: 11,
    maxZoom: 14,
    maxBounds: L.latLngBounds([[35.4754,-114.0326],[36.5242,-110.9592]])
  })
};

L.tileLayer('http://{s}.tiles.usgin.org/grand-canyon/{z}/{x}/{y}.png').addTo(gcg.map);
L.tileLayer('http://{s}.tiles.mapbox.com/v3/rclark.map-55q8nfsk/{z}/{x}/{y}.png', {
  attribution: '<a href="https://www.mapbox.com/about/maps/">Terms & Feedback</a>'
}).addTo(gcg.map);