/* eslint-disable*/
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicGFibGl0dG85MSIsImEiOiJjbGR0aGViZzQwMDBxM290ZWx2Z2g2Z2s0In0.WYLJ_pvduOdG5UxPR1A3EA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/pablitto91/cldu92r49002z01ta1wfravzk',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 4,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
