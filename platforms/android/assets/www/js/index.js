var a = new Date();
if (a.getMonth() < 8) {
  var b = new Date(a.getFullYear() - 1, 8);  
} else {
  var b = new Date(a.getFullYear(), 8)
}
if (b.getUTCDay() != 0) {
  b = new Date(b.getFullYear(), 8, -b.getUTCDay() + 1);
}
var i = 0;
var y = b.getTime()
while (y <= a.getTime()) {
y += 1000 * 60 * 60 * 24 * 7;
i++;
}



//var c = a-b;
//c = Math.ceil(c / 1000 / 60 / 60 / 24 / 7);
if (i % 2 == 0) {
  $('.oddity').html('Четная');
} else {
  $('.oddity').html('<span style="color:red">НЕ</span>четная');
}
$('.test').html(i);
