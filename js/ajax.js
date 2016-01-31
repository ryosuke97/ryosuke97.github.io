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
  console.log(data);
  //$('#container').append(data);

  for (var i = 0; i < data.length; i++) {
    $('#container li').eq(i).text(data[i].name + 'さんの住んでいるところは' + data[i].address + 'です');
  }
}

});