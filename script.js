'use strict';

const messageText = document.querySelector('.message');
const myNumberText = document.querySelector('.number');
const guessNumber = document.querySelector('.guess');
const score = document.querySelector('.score');
const highScoreText = document.querySelector('.highScore');

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

const MAX_NUMBER = 20;

const checkLoss = () => {
  if (Number(score.textContent) <= 1) {
    messageText.textContent = 'You lost the game!';
    score.textContent = 0;
    return true;
  }
  return false;
};

const checkGuess = message => {
  console.log(checkLoss);
  if (checkLoss()) return;
  messageText.textContent = message;
  score.textContent -= 1;
};

const checkHighScore = newScore => {
  newScore = Number(newScore);
  const highScore = Number(highScoreText.textContent);
  console.log(newScore, highScore);
  if (newScore > highScore) {
    highScoreText.textContent = newScore;
  }
};

const play = myNumber => {
  checkButton.addEventListener('click', () => {
    const guess = guessNumber.value;

    if (!guess) {
      messageText.textContent = 'No Number!';
      return;
    }

    if (guess > myNumber) {
      checkGuess('Too High...');
    } else if (guess < myNumber) {
      checkGuess('Too Low...');
    } else {
      if (checkLoss()) return;
      messageText.textContent = 'Correct Number!';
      myNumberText.textContent = myNumber;
      checkHighScore(guess);
    }
  });
};

const randomNumber = () => Math.trunc(Math.random() * MAX_NUMBER) + 1;

play(randomNumber());

againButton.addEventListener('click', () => {
  messageText.textContent = 'Start Guessing...';
  score.textContent = 20;
  myNumberText.textContent = '?';
  guessNumber.value = '';
  checkButton.removeEventListener('click', () => play(randomNumber()));
});
