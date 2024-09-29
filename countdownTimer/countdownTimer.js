let countdown; //countdown as a global variable

function countdownTimer (duration,displayElement) {
    if (countdown) {
        clearInterval(countdown);
    }
    let timeremain = duration, minutes, seconds;
    countdown = setInterval(
    function(){
        minutes = parseInt(timeremain / 60, 10);
        seconds = parseInt(timeremain % 60, 10);

        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        displayElement.textContent = minutes + ":" + seconds;

        if (--timeremain < 0){
            clearInterval(countdown);
            displayElement.textContent = "times up";
        }
    }, 1000);
}

const displayElement = document.querySelector('#timer');
const startButton = document.querySelector('#startButton');
const input = document.querySelector('#minutes')

startButton.addEventListener('click', function() {
    let minutes = parseInt(input.value, 10);
    if (minutes > 99) { minutes = 99; input.value = 99;}
    const seconds = minutes * 60;
    countdownTimer(seconds, displayElement)}
);