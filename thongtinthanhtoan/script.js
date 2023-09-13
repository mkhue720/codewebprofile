function copyText(stk) {
  // Tạo một textarea ẩn để sao chép STK
  var textArea = document.createElement("textarea");
  textArea.value = stk;
  document.body.appendChild(textArea);

  // Chọn và sao chép nội dung trong textarea
  textArea.select();
  document.execCommand("copy");

  // Loại bỏ textarea sau khi sao chép
  document.body.removeChild(textArea);

  // Thông báo cho người dùng đã sao chép thành công
  alert("Đã sao chép STK: " + stk);
}

var button1 = document.getElementById("myButton1");
var button2 = document.getElementById("myButton2");
var button3 = document.getElementById("myButton3");
var button4 = document.getElementById("myButton4");

button1.addEventListener("click", function() {
  copyText("0984703325"); // Sao chép STK cho MBBANK
});

button2.addEventListener("click", function() {
  copyText("1031955640"); // Sao chép STK cho VIETCOMBANK
});

button3.addEventListener("click", function() {
  copyText("0984703325"); // Sao chép STK cho MOMO
});

button4.addEventListener("click", function() {
  copyText("9704229245518167"); // Sao chép STK cho VIETTELPAY
});
