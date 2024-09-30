let countdown; //countdown as a global variable
const displayElement = document.querySelector('#timer');
const startButton = document.querySelector('#startButton');
const input = document.querySelector('#minutes')
const controlContainer = document.querySelector('#controlContainer');


function soundPlant() {
    var sound = document.getElementById("c4Plant");
    sound.play().catch(e => console.log("Error playing sound:", e));
}

function soundExplode() {
    var sound = document.getElementById("c4Explode");
    sound.play();
}

function countdownTimer (duration,displayElement) {
    if (countdown) {
        clearInterval(countdown);
    }
    controlContainer.style.display = 'none';
    let timeremain = duration, minutes, seconds;
    countdown = setInterval(
    function(){
        minutes = parseInt(timeremain / 60, 10);
        seconds = parseInt(timeremain % 60, 10);

        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        displayElement.textContent = minutes + ":" + seconds;

        if (timeremain === 35){
            soundExplode();
        }

        if (--timeremain < 0){
            clearInterval(countdown);
            displayElement.textContent = "EEEE";
            controlContainer.style.display = 'block';
        }
    }, 1000);
}



startButton.addEventListener('click', function() {
    soundPlant();
    let minutes = parseInt(input.value, 10);
    if (minutes > 99) { minutes = 99; input.value = 99;}
    const seconds = minutes * 60;
    countdownTimer(seconds, displayElement)
});

controlContainer.style.display = 'block';