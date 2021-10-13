"use strict";

let secretNumber = Math.floor(Math.random() * (20)) + 1;

let checkButtonListener = () => {
    const guess = Number(document.querySelector('.guess').value);
    const message = document.querySelector('.message');
    const score = document.querySelector('.score');
    const highScore = document.querySelector('.highscore');
    const newScore = score.textContent;
    const scoreDecrease = (x) => score.textContent = --x;

    let correctNumber = () => {
        `${message.textContent = '🎉 Correct Number!'} 
         ${document.querySelector('.number').textContent = secretNumber}  
         ${newScore > highScore.textContent ? highScore.textContent = newScore : highScore} 
         ${document.querySelector('body').style.backgroundColor = '#60b347'}
         ${document.querySelector('.number').style.width = '30rem'}`
    }

    !guess ? message.textContent = '⛔ No number!'
        : Number(score.textContent) === 0 ? `${message.textContent = 'You lost the game!'} ${score.textContent = 0}`
        : guess !== secretNumber ? `${message.textContent = `${guess < secretNumber ? '📉 Too low!' : '📈 Too high!'}`} 
                                    ${scoreDecrease(newScore)}`
            : guess === secretNumber ? `${correctNumber()}`
                : message.textContent = 'ERROR!';
}

let againButtonListener = () => {
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    secretNumber = Math.floor(Math.random() * (20)) + 1;
}

document.querySelector('.check').addEventListener('click', checkButtonListener);
document.querySelector('.again').addEventListener('click', againButtonListener);