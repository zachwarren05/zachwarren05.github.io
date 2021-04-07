// Initialize and add the map
function initMap() {
    // The location of Chico
    const chico = { lat: 39.7285, lng: -121.8375 };
    // The map, centered at Chico
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: chico
    });

    const marker = new google.maps.Marker({
        position: chico,
        map: map,
      });
    
  }

