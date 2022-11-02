function digitalClock() {                 //Shows Current Local Time
    var timing = document.getElementById("timer");
    let cont = document.getElementById('container');
    var localTime = new Date();
    var hours = localTime.getHours();
    var min = localTime.getMinutes();
    min = min < 10 ? "0" + min : min;
    var timerNow = hours + ":" + min;
    timing.innerText = timerNow;
    document.body.appendChild(timing);
}

let result = "";
let buttons = document.getElementsByTagName('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) {
        result = result + event.target.innerHTML;
        document.querySelector(screen).value = result;
    }
    )
}
