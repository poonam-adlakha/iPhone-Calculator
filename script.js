/* Working digital clock addition */
const digitalClock = () => {
        var timing = document.getElementById("timer");
        var localTime = new Date();
        var hours = localTime.getHours().toString();
        var min = localTime.getMinutes().toString();
        min = min < 10 ? "0" + min : min;
        var timerNow = hours + ":" + min;
        timing.innerText = timerNow;
    }
    setInterval(digitalClock, 1000);
    digitalClock();

/* Calculations in Calculator*/
let result = " ";
let sum = 0;
let buttons = document.getElementsByTagName('button');
let screenResult = document.getElementById('screen');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonClick = e.target.innerHTML;
        const allKeys = e.target;
        const action = allKeys.dataset.action;
        const keyText = allKeys.keyText;
        if (
            action === 'plus' ||
            action === 'minus' ||
            action === 'multiple' ||
            action === 'divide' ||
            action === 'percentage'
          ) {
            allKeys.classlist.add('calculations')
          }
        // Clear with AC button
        if(buttonClick == 'AC') {
            result = "0";
            document.querySelector('input').value = result;
        } 
        // Sign change operation

        else if (buttonClick == '±'){
               if (result = -result) {
                document.querySelector('input').value = result;
               }

        }

        // Zero should not be added at first

        else if (buttonClick == "0" && screenResult.value == "0") {
                screenResult.value = "0";   
        }
        
        else {
            if (screenResult.value == "0") {
                result = "";
            }
            result = result + event.target.innerHTML;
            document.querySelector('input').value = result;
        }
    }
    )
})
