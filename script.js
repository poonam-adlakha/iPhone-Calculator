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

let result = " ";
let buttons = document.getElementsByTagName('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        if(event.target.innerHTML == 'AC') {
            result = " ";
            document.querySelector('input').value = result;
        } 

        else if (event.target.innerHTML == '±'){
               
        }

        else if (event.target.innerHTML == "+") {
            
        }
        
        else {
            result = result + event.target.innerHTML;
            document.querySelector('input').value = result;
        }
    }
    )
})
