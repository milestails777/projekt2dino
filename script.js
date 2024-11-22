const dino = document.getElementById('dino'); 
const spike = document.getElementById('spike');
const score = document.getElementById('score');
const record = document.getElementById('record');  
const saw = document.getElementById('saw');
const sound = new Audio('jump.wav');


function getRecordScore() { //record system function
    return localStorage.getItem('record') || 0;
}


function checkAndUpdateRecord(currentScore) { //this code is checking how many score have you earned and update it
    const recordScore = getRecordScore();
    if (currentScore > recordScore) {
        localStorage.setItem('record', currentScore);
        record.innerText = `Record: ${currentScore}`;
    }
}


record.innerText = `Record: ${getRecordScore()}`; //final score result

function jump() { //this code is how it using animation for Dino
    dino.classList.add('jump-animation');
    setTimeout(() => {
        dino.classList.remove('jump-animation');
    }, 500);
}

document.addEventListener('click', () => { //dinocontroll
    if (!dino.classList.contains('jump-animation')) {
        jump();
        sound.play();
    }
});

const items = [ //all objects/enemies
    { element: spike, time: "2.00s" },
    { element: saw, time: "1.30s" },
    { element: spike, time: "2.00s" },
]

let itemIndex = -1; //this code is trying to use items for work and after that making a loop to restart items
setInterval(() => {
    itemIndex++;
    if (itemIndex === items.length) {
        itemIndex = 0;   
    }
    const item = items[itemIndex];

    item.element.style.animation = "none";
    time = (Math.random() * 3 + 1) + "s"
    setTimeout(() => { item.element.style.animation = "item " + time }, 1);

    
}, 1500);

setInterval(() => { //here is the hitbox code and score element to write a record on a message
    score.innerText++;
    if (itemIndex < 0) return
    const item = items[itemIndex];
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const itemLeft = parseInt(window.getComputedStyle(item.element).getPropertyValue('left'));

    console.log(itemLeft, dinoTop)

    if (itemLeft < 430 && itemLeft > 370 && dinoTop > 300) {
        checkAndUpdateRecord(parseInt(score.innerText));
        alert("Game Over! \n Your score: " + score.innerText + "\n Try Again...");
        location.reload();
    }
}, 50);

document.addEventListener("DOMContentLoaded", function () { //audio/music button
    const playButton = document.getElementById("playButton");
    const audio = document.getElementById("audio");

    if (playButton && audio) {
        playButton.addEventListener('click', function () {
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
