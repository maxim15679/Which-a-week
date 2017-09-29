var a = new Date();
if (a.getMonth() < 8) {
  var b = new Date(a.getFullYear() - 1, 8)
} else {
  var b = new Date(a.getFullYear(), 8)
}
var c = a-b;
c = Math.ceil(c / 1000 / 60 / 60 / 24 / 7);
if (c % 2 == 0) {
  $('.oddity').html('Четная');
} else {
  $('.oddity').html('<span style="color:red">НЕ</span>четная');
}
$('.test').html(c);
