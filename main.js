startStopButton = document.getElementById("start-stop");
resetButton = document.getElementById("reset");
time = document.getElementById("time");
pauseButton = document.getElementById("pause");

//start and stop icon
let startIcon = document.getElementById('start-icon');
let stopIcon = document.getElementById('stop-icon');
let start = document.getElementById('start');
let stop = document.getElementById('stop');

let interval;
let startStopToggle = true;
let pause = false;
let flag = 0;



//time
let min = 0;
let second = 0;
let hour = 0;

let hourZero = 0;
let minZero = 0;
let secondZero = 0;

let clicked = false;


//Start-Stop Toggle
startStopButton.addEventListener("click", ()=>{

    console.log(clicked)

    if (clicked == true) {
        timer();
        clearInterval(interval);
        clicked = false;
    }
    else if (clicked == false) {
        timer();
        clicked = true;
    }
 
});



//Pause
pauseButton.addEventListener("click", () => {

    if(flag)
    {
        pause = true;
        flag = 0;
    }

    console.log(pause)


    if (pause == true) {
        clearInterval(interval);
        pause = false;
    }
    else if (pause == false) {
        timer();
        pause = true;
    }


});

//Reset Button 
resetButton.addEventListener("click", () => {

    clearInterval(interval);
    startIcon.style.display = "unset";
    start.style.display = "unset";

    stopIcon.style.display = "none";
    stop.style.display = "none";

    startStopToggle = false;
    

    time.innerText = "00:00:00";
    min = 0;
    second = 0;
    hour = 0;

    hourZero = 0;
    minZero = 0;
    secondZero = 0;

});

//Timer-Function
function timer() {
    console.log("Called: ",startStopToggle, " Pause:",pause)

   
    if (!startStopToggle) { //if false
        startIcon.style.display = "unset";
        start.style.display = "unset";

        stopIcon.style.display = "none";
        stop.style.display = "none";
        startStopToggle = true;
        clear();
    }
    else {
        startIcon.style.display = "none";
        start.style.display = "none";

        stopIcon.style.display = "unset";
        stop.style.display = "unset";
        startStopToggle = false;
        //clear();
    }


    if (pause == false) {

        interval = setInterval(() => {

            if (second == 9) {
                secondZero = "";
            }

            if (min == 9) {
                minZero = "";
            }

            if (hour == 9) {
                hourZero = "";
            }

            if (second == 60) {
                min += 1;
                second = 0;
            }

            if (min == 60) {
                hour += 1;
                min = 0;
            }

            else {
                second += 1;
            }
            time.innerText = ` ${hourZero}${hour}:${minZero}${min}:${secondZero}${second}`;

        }, 1000)
    }


}

function clear() {
    clearInterval(interval);
}