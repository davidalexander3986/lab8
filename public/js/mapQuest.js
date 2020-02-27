function initMap() {
	// add your code here
    L.mapquest.key = 'OpadhoGdG3NDcHO5NdNbrHzVVyehKsUh';

    // 'map' refers to a <div> element with the ID map
    var map = L.mapquest.map('map', {
      center: [37.7749, -122.4194],
      layers: L.mapquest.tileLayer('map'),
      zoom: 12
    });

    L.marker([32.878927, 117.235885]).addTo(map);
}
