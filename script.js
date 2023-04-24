'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const messageEl = document.querySelector('.message');
const displaySecretNumberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const body = document.body;
const highScoreEl = document.querySelector('.highscore');
const playerGuessEl = document.querySelector('.guess');

function changeTextContent(element, newValue) {
  element.textContent = newValue;
}

function mainGameLogicHandler() {
  const playerGuessNumber = Number(playerGuessEl.value);
  // check player number with secretNumber
  if (!playerGuessNumber) {
    changeTextContent(messageEl, 'No number ⛔');
  } else if (playerGuessNumber === secretNumber) {
    changeTextContent(messageEl, '🎉 Correct Number!');
    changeTextContent(displaySecretNumberEl, secretNumber);
    // change styling
    body.style.backgroundColor = '#60b347';
    displaySecretNumberEl.style.width = '30rem';
    // record highScore
    score > highScore ? (highScore = score) : null;
    changeTextContent(highScoreEl, highScore);
  } else if (playerGuessNumber > secretNumber) {
    changeTextContent(messageEl, '📈 Too high!');
    score--;
  } else if (playerGuessNumber < secretNumber) {
    changeTextContent(messageEl, '📉 Too low!');
    score--;
  }
  // check if player lost
  const lostGame = score <= 0;
  !lostGame
    ? changeTextContent(scoreEl, score)
    : (changeTextContent(scoreEl, score),
      changeTextContent(messageEl, '😭 You lost!'));
}

function resetGameHandler() {
  // reset score and secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // reset displayed content
  playerGuessEl.value = '';
  changeTextContent(scoreEl, score);
  changeTextContent(displaySecretNumberEl, '?');
  changeTextContent(messageEl, 'Start guessing...');
  // change styling
  body.style.backgroundColor = '#222';
  displaySecretNumberEl.style.width = '15rem';
}

// Check button functionality
const checkBtnEl = document.querySelector('.check');
checkBtnEl.addEventListener('click', mainGameLogicHandler);

// Again button functionality
const againBtnEl = document.querySelector('.again');
againBtnEl.addEventListener('click', resetGameHandler);
