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
let sum = 0;
let buttons = document.getElementsByTagName('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        let buttonClick = event.target.innerHTML;
        if(buttonClick == 'AC') {
            result = " ";
            document.querySelector('input').value = result;
        } 

        else if (buttonClick == '±'){
               
        }

        else if (buttonClick == "+") {
            calSum();
        }
        
        else {
            result = result + event.target.innerHTML;
            document.querySelector('input').value = result;
        }
    }
    )
})

function calSum {
    let valueOne = document.getElementById()
}