let gameSequence = [];
let userSequence = [];
let maxScore = 0;
let colors = ["yellow", "green", "red", "purple"];

let h2 = document.querySelector('h2');
let level = 0;

let gameStart = false;

document.addEventListener("keypress", function () {

    if (gameStart == false) {

        gameStart = true;
        levelUp();
    }

});


function gameFlash(btn) {

    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}


function userFlash(btn) {

    btn.classList.add("userFlash");

    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);

}



function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = colors[randIdx];

    let randBtn = document.querySelector(`.${randColor}`);
    gameSequence.push(randColor)
    console.log(gameSequence);
    gameFlash(randBtn);

}

function matchSequence(index) {

    if (userSequence[index] == gameSequence[index]) {

        if (userSequence.length == gameSequence.length) {
            userSequence = [];
            setTimeout(levelUp, 1000);

        }

    } else {
        
        error();
        let highestScore = max(level);
        console.log(highestScore);
        h2.innerHTML = `Game Over! your score is: <span>${level}</span>  and Highest Score is: <span>${highestScore}</span> <br> Press any Key to start the game again`;
        reset();

    }
}

function btnPress() {
    
    let btn = this;
    userFlash(btn);

    let userColor = this.getAttribute('id');
    userSequence.push(userColor);
    matchSequence(userSequence.length - 1);
    

}


let btns = document.querySelectorAll('.btn');



for (btn of btns) {

    btn.addEventListener("click", btnPress);

}


function reset() {
    gameStart = false;
    level = 0;
    userSequence = [];
    gameSequence = [];
}

function error() {
    
    let body = document.querySelector('body');

        body.classList.add("gameOver");

        setTimeout(function () {
            body.classList.remove("gameOver");
        }, 250);
}

function max(score) {

    
    if (maxScore < score ) {

        maxScore = score;
    }

    return maxScore;
}
