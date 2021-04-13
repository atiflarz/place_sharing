// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import 'bootstrap';
import './src/application.scss'
import toastr from 'toastr'
import 'select2'
window.toastr = toastr
var jQuery = require('jquery')
global.$ = global.jQuery = jQuery;
window.$ = window.jQuery = jQuery;
require("cocoon")
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// $(document).ready(function() {
//   $("#place_is_public").change(function(e) {
//     if ($(this).prop('checked')){
//       $(".place_recipients").hide();
//     }
//     else{
//       $(".place_recipients").show();
//     }
//   });

//   $("#place_recipient_id").select2();
// });

// function  initMap2(places, id){

//   if (places.length == 0){
//     places = [{latitude: 22.578193, longitude: 88.428619}]
//   }
//   var map = new google.maps.Map(document.getElementById('map2'), {
//     zoom: 4,
//     center: new google.maps.LatLng(places[0].latitude, places[0].longitude),
//   });
//   var markers;
//   for (i = 0; i < places.length; i++) {
//     markers = new google.maps.Marker({
//       position: new google.maps.LatLng(places[i].latitude, places[i].longitude),
//       map: map,
//       animation: google.maps.Animation.DROP,
//       draggable: true
//     });
//     google.maps.event.addListener(markers, "dragend", function(){
//       var lat = document.getElementById('place_latitude');
//       var lng = document.getElementById('place_longitude');
//       var coords = this.getPosition()
//       lat.value = coords.lat();
//       lng.value = coords.lng();
//     });
//   }
// }

// export { initMap2 }

