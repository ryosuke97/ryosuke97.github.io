$(function(){
console.log('DOMok!');

//緯度経度
var lon;
var lat;

//GPS
navigator.geolocation.getCurrentPosition(function(evt){

  //緯度
  lon = evt.coords.longitude;
  //経度
  lat = evt.coords.latitude;

},
function(error){
  console.log('GPS取れません');

});





// タッチイベント
  $('#ball').on('touchstart', function(){
    console.log('タッチ');
    $('#touchResult li').eq(0).text('touchstartしたよ');
  });

  $('#ball').on('touchmove', function(){
    $('#touchResult li').eq(1).text('touchmoveしたよ');
  });

  $('#ball').on('touchend', function(){
    $('#touchResult li').eq(2).text('touchendしたよ');

    $('#geo li').eq(0).text('緯度: ' + lon);
    $('#geo li').eq(1).text('経度: ' + lat);
  });









});