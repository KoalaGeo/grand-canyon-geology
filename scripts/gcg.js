var gcg = {
  map: L.map('map', {
    center: [36.14951909060777,-111.98741912841797],
    zoom: 11,
    maxZoom: L.Browser.retina ? 13 : 14,
    minZoom: 10,
    maxBounds: L.latLngBounds([[35.4754,-114.0326],[36.5242,-110.9592]])
  }),

  gridInteraction: function (evt) {
    if (!evt.data) return;

    // Get the Unit information
    var unit = {
          unit: evt.data.unit || '??',
          unitname: evt.data.unitname || 'Unknown',
          color: evt.data.color || '#fff',
          description: evt.data.description || 'No Description'
        },
        template, html;

    // If this is a hover, update the content on the page
    if (evt.type === 'mouseover') {
      if ($('#hover-description').hasClass('hidden')) $('#hover-description').removeClass('hidden')

      template = $('#partial-unit').html();
      html = Mustache.to_html(template, unit);
      $('#hover-description').html(html);
    }

    // If this is a click, update the content below the fold
    if (evt.type === 'click') {
      template = $('#full-unit').html();
      html = Mustache.to_html(template, unit);
      $('#full-description').html(html);
      $('.scroll-btn').trigger('click');  
    }
  }
};

L.mapbox.tileLayer('rclark.h39e40a5', {
  detectRetina: true
}).addTo(gcg.map);

L.mapbox.gridLayer('rclark.h39e40a5')
  .on('mouseover', gcg.gridInteraction)
  .on('click', gcg.gridInteraction)
  .addTo(gcg.map);

L.mapbox.tileLayer('rclark.map-55q8nfsk', {
  attribution: '<a href="https://www.mapbox.com/about/maps/">Terms & Feedback</a>',
  detectRetina: true
}).addTo(gcg.map);