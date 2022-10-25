function digitalClock() {                 //Shows Current Local Time
    var timing = document.getElementById("timer");
    let cont = document.getElementById('container');
    var localTime = new Date();
    var hours = localTime.getHours();
    var min = localTime.getMinutes();
    min = min < 10 ? "0" + min : min;
    var timerNow = hours + ":" + min;
    timing.innerText = timerNow;
    document.cont.appendChild(timing);
}

window.onload = function() {
    setInterval(digitalClock, 1000);
  };

var one = document.getElementById('button1');
var two = document.getElementById('button2');
var three = document.getElementById('button3');
var plus = document.getElementById('buttonPlus');
var scr = document.getElementById('screen');

function one() {
    var one = document.getElementById('button1');
    one.innerHTML = 2;
    console.log(one);
}