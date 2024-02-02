setTimeout(function () {
    document.getElementById("lst").style.display = "block";

  // 100%//
  }, 500);
  setTimeout(function () {
   startScan();
}, 1000);
  function startScan() {
    $(".alert_popup").delay(500).fadeIn(500);
      $("#poptxts").delay(1000).fadeIn(500);
      $("#chrome-alert4").delay(1500).fadeIn(500);
      $("#chat").delay(1200).fadeIn(500);
      $("#exitModal1").delay(2000).fadeIn(500);
      $("#exitModal2").delay(2300).fadeIn(500);
      $("#exitModal3").delay(2600).fadeIn(500);
      $(".black").delay(2000).fadeIn(500);
  }

 function playSound() {
    document.getElementById("beep").play();
 }
var date = new Date();
var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
var current_time = date.getHours()+":"+date.getMinutes();
var date_time = current_date+" "+current_time;
document.getElementById("p1").innerHTML = date_time;
