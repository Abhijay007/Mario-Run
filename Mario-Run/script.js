var character = document.getElementById("character");
var block = document.getElementById("block");
var highestScore = document.getElementById('highest-score');
var score = document.getElementById('score');
var highestScorePoint = Number(localStorage.getItem('mario-highest-score')) || 0;
var currentPoint = 0;

checkHighestScore();

function jump() {
    const audio = new Audio('sounds/jump.mp3');
    audio.play();
    
    if (character.classList != "animate") {
        character.classList.add("animate");
    }

    setTimeout(function () {
        character.classList.remove("animate");

    }, 1000);
}



var incrementScore = setInterval(function () {
    currentPoint++;
    score.innerHTML = currentPoint;
}, 100);

var checkLost = setInterval(function () {
    var characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 350 && blockLeft > 300 && characterTop >= 150) {
        gameOver.style.display = "block";
        character.style.display = "none";
        block.style.animation = "none";
        block.style.display = "none";
        //alert("Your Lose -GameOver.");
        clearInterval(incrementScore);
        checkNewRecord();
    }
}, 10);

function checkHighestScore () {
    if (highestScore) {
        highestScore.innerHTML = highestScorePoint;
    }
}

function checkNewRecord () {
    if (currentPoint > highestScorePoint) {
        localStorage.setItem('mario-highest-score', currentPoint);
    }
}

