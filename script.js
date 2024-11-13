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
    { element: spike, time: "2.00s" },
    { element: spike, time: "2.00s" },
    { element: saw, time: "2.00s" },
]

let itemIndex = 0
setInterval(() => {
    item = items[itemIndex]
    console.log("item", item);

    item.element.style.animation = "none";
    setTimeout(() => { item.element.style.animation = "item " + item.time }, 1)
    itemIndex++
    if (items.length == itemIndex) {
        itemIndex = 0
    }
}, 3000)


setInterval(() => {
    score.innerText++;
    const item = items[itemIndex]
    const dinoTop = parseInt(window.getComputedStyle(dino)
        .getPropertyValue('top'));
    const itemLeft = parseInt(window.getComputedStyle(item.element)
        .getPropertyValue('left'));

    //  if (itemLeft < 0) {
    //     item.element.style.display = 'none';
    //  } else {
    //     item.element.style.display = '';
    //  }

    if (itemLeft < 430 && itemLeft > 280 && dinoTop > 300) {
        alert("Game Over! \n Your score: " + score.innerText +
            "\n Try Again...)");
        location.reload();
    }

    //console.log(dinoTop)
    //console.log(spikeLeft)
}, 50);




document.addEventListener("DOMContentLoaded", function () {
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
