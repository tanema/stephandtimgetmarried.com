$(function() {
  var maps = {
    archeo: {
      center: new google.maps.LatLng(43.6506698,-79.35953719999998),
      content: "<b>Archeo</b><br/>31 Trinity St<br/>M5A 3C4 Toronto<br/><a href='https://www.google.com/maps/dir//Archeo,+31+Trinity+St,+Toronto,+ON+M5A+3C4/@43.650683,-79.3594515,15z/data=!4m12!1m3!3m2!1s0x0:0x822db641d29de9dc!2sArcheo!4m7!1m0!1m5!1m1!1s0x89d4cb3dc79258bf:0x822db641d29de9dc!2m2!1d-79.3594515!2d43.650683'>Get Directions</a>" 
    },
    radisson: {
      center: new google.maps.LatLng(43.6388201, -79.38560740000003),
      content: "<b>The Radisson</b><br/>249 Queen's Quay West<br/>M5J 2N5 Toronto<br/><a href='https://www.google.com/maps/dir//Radisson+Hotel+Admiral+Toronto-Harbourfront,+249+Queen's+Quay+West,+Toronto,+ON+M5J+2N5/@43.6358765,-79.38932,14.76z/data=!4m13!1m4!3m3!1s0x882b352a2007e65f:0x42ec8b943f3724d5!2sRadisson+Hotel+Admiral+Toronto-Harbourfront!3b1!4m7!1m0!1m5!1m1!1s0x882b352a2007e65f:0x42ec8b943f3724d5!2m2!1d-79.3859499!2d43.638727'>Get Directions</a>"
    },
    novotel: {
      center: new google.maps.LatLng(43.64654789999999, -79.37463439999999),
      content: "<b>Hotel Novotel</b><br/>45 The Esplanade<br/>M5E 1W2 Toronto<br/><a href='https://www.google.com/maps/dir//Hotel+Novotel+Toronto+Centre,+45+The+Esplanade,+Toronto,+ON+M5E+1W2/@43.6421711,-79.3753269,14.23z/data=!4m13!1m4!3m3!1s0x882b2d71d1265ae1:0xa04ee9d2ab5a4fb9!2sHotel+Novotel+Toronto+Centre!3b1!4m7!1m0!1m5!1m1!1s0x882b2d71d1265ae1:0xa04ee9d2ab5a4fb9!2m2!1d-79.374265!2d43.646597'>Get Directions</a>"
    }
  }
  for(var place in maps) {
    var place_data = maps[place];
    var map = new google.maps.Map(document.getElementById(place+"_map"), {
      zoom:14,
      center: place_data['center'],
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      mapTypeControl: false,
    });
    var marker = new google.maps.Marker({map: map, position: place_data['center']});
    var infowindow = new google.maps.InfoWindow({content: place_data['content']});
    google.maps.event.addListener(marker, "click", function(){
      infowindow.open(map,marker);
    });
    infowindow.open(map,marker);
  }
});

