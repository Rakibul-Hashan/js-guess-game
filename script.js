'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

//
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', () => {
  console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //   when there's no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');
  } else if (guess !== secretNumber) {
    if (score < 1) {
      //   document.querySelector('.message').textContent = '💥 You lost the game';
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
    } else {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📉 Too High' : '📈 Too Low';
      displayMessage(guess > secretNumber ? '📉 Too High' : '📈 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  // when the player wins
  else if (secretNumber === guess) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //   else if (guess < secretNumber) {
  //     //  when the number is lower than the guess
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess > secretNumber) {
  //     //  when the number is greater than the guess
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// reset the game
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = `#222`;
  document.querySelector('.number').style.width = '15rem';
  console.log('object');
});
