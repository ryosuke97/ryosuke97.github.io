$(function(){
console.log('DOMok!')


//btnをクリックしたら
$('#btn').on('click', function(){

  //ajaxでロード
  $.ajax({
    url:'mydata.json',
    type:'GET',
    dataType:'json'
  }).done(function(data){
    console.log(data);
    showContent(data);
  }).fail(function(){
    console.log('ajaxエラー!')
  });


});


//表示させる関数
function showContent(data){

  $('#container').append(data);
}













});