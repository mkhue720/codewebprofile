function copyText(stk) {
  var textArea = document.createElement("textarea");
  textArea.value = stk;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("copy");

  document.body.removeChild(textArea);

  alert("Đã sao chép STK: " + stk);
}

var button1 = document.getElementById("myButton1");
var button2 = document.getElementById("myButton2");
var button3 = document.getElementById("myButton3");
var button4 = document.getElementById("myButton4");

button1.addEventListener("click", function() {
  copyText("0984703325"); 
});

button2.addEventListener("click", function() {
  copyText("1031955640"); 
});

button3.addEventListener("click", function() {
  copyText("0984703325"); 
});

button4.addEventListener("click", function() {
  copyText("9704229245518167"); 
});
