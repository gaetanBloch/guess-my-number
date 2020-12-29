'use strict';

const message = document.querySelector('.message');
const myNumberText = document.querySelector('.number');
const guessNumber = document.querySelector('.guess');
const score = document.querySelector('.score');
const highScoreText = document.querySelector('.highScore');

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

const MAX_NUMBER = 20;

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
    if (guess > myNumber) {
      message.textContent = 'Too High...';
      score.textContent -= 1;
    } else if (guess < myNumber) {
      message.textContent = 'Too Low...';
      score.textContent -= 1;
    } else {
      message.textContent = 'Correct Number!';
      myNumberText.textContent = myNumber;
      checkHighScore(guess);
    }
  });
};

const randomNumber = () => Math.trunc(Math.random() * MAX_NUMBER + 1);

play(randomNumber());

againButton.addEventListener('click', () => {
  message.textContent = 'Start Guessing...';
  score.textContent = 20;
  myNumberText.textContent = '?';
  guessNumber.value = '';
  play(randomNumber());
});
