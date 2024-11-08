const dino = document.getElementById('dino');
const spike = document.getElementById('spike');
const score = document.getElementById('score');
const saw = document.getElementById('saw');
const sound = new Audio('jump.wav')

function jump() {
  dino.classList.add('jump-animation');
  setTimeout(() => {
    dino.classList.remove('jump-animation');
  }, 500);
}

document.addEventListener('click', () => {
    if (!dino.classList.contains('jump-animation')) {
        jump();
        sound.play();
    }
});

const items = [
    {element: spike, time: "1.33s"},
    {element: spike, time: "1.33s"},
    {element: saw, time: "7s"},
]

setTimeout(() => {
    spike.style.animation = "spike 1.33s infinite";
}, 1000);

setInterval(() => {
    score.innerText++;
    const dinoTop = parseInt(window.getComputedStyle(dino)
        .getPropertyValue('top'));
    const spikeLeft = parseInt(window.getComputedStyle(spike)
        .getPropertyValue('left'));

    if (spikeLeft < 0) {
        spike.style.display = 'none';
    } else {
        spike.style.display = '';
    }

    if (spikeLeft < 430 && spikeLeft > 280 && dinoTop > 300) {
        alert("Game Over! \n Your score: " + score.innerText + 
            "\n Try Again...)");
        location.reload();
    }

    //console.log(dinoTop)
    //console.log(spikeLeft)
}, 50);

setTimeout(() => {
    saw.style.animation = "saw 7s infinite";
    saw.reload();
}, 3000);

setInterval(() => {
    score.innerText++;
    const dinoTop = parseInt(window.getComputedStyle(dino)
        .getPropertyValue('top'));
    const sawLeft = parseInt(window.getComputedStyle(saw)
        .getPropertyValue('left'));

    if (sawLeft < 0) {
        saw.style.display = 'none';
    } else {
        saw.style.display = '';
    }

    if (sawLeft < 350 && sawLeft > 280 && dinoTop > 300) {
        alert("Game Over! \n You got a score of: " + score.innerText + 
            "\n Try Again...)");
        location.reload();
    }

    //console.log(dinoTop)
    //console.log(sawLeft)
}, 50);


document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("playButton");
    const audio = document.getElementById("audio");

if (playButton && audio) {
    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = '<img src="mutebutton.png" width=100px height=100px style="background-color: lightgray;" alt="Pause Music" />';
        } else {
            audio.pause();
            playButton.innerHTML = '<img src="unmutebutton.png" width=100px height=100px style="background-color: lightgray;" alt="Play Music" />';
        }
    });
} else {
    console.error("Elements not found!");
}

});
