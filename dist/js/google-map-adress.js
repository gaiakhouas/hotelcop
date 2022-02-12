// Initialisation et ajout de la map
function initMap() {
  // la localisation "1 avenue montaine, 75008 Paris"
  var hotelcop = {lat: 48.866, lng: 2.305};
  // La map, centrée à l'adresse indiquée
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: hotelcop});
  // Le marqueur ajoutée à l'adresse indiquée
  var marker = new google.maps.Marker({position: hotelcop, map: map});
}
