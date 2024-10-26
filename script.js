const dino = document.getElementById('dino');
const spike = document.getElementById('spike');
const score = document.getElementById('score');
const sound = new Audio('jump.wav')

function jump() {
  dino.classList.add('jump-animation');
  setTimeout(() => {
    dino.classList.remove('jump-animation');
  }, 500);
}

document.addEventListener('keypress', () => {
    if (!dino.classList.contains('jump-animation')) {
        jump();
        sound.play();
    }
});

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
        alert("Game Over! \n You got a score of: " + score.innerText + 
            "\n Try Again...)");
        location.reload();
    }

    //console.log(dinoTop)
    //console.log(spikeLeft)
}, 50);


