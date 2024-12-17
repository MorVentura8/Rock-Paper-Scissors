const score =  JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0
};

document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} `;

updateScoreElement();

function playGame(playerMove) {
let computerMove = pickComputerMove();
let result = '';

if (playerMove === 'Rock') {
  if (computerMove === 'Rock') {
    result = 'Tie.'
  } else if (computerMove === 'Paper') {
    result = 'You lost.'
  } else {
    result = 'You win.'
  }
} else if (playerMove === 'Paper') {
  if (computerMove === 'Rock') {
    result = 'You win.'
  } else if (computerMove === 'Paper') {
    result = 'Tie.'
  } else {
    result = 'You lose.'
  } 
} else {
  if (computerMove === 'Rock') {
    result = 'You lose.'
  } else if (computerMove === 'Paper') {
    result = 'You win.'
  } else {
    result = 'Tie.'
  } 
}

calcTheResult(score,result);

localStorage.setItem('score',JSON.stringify(score)); // LocalStorage support on String (string = JSON)

updateScoreElement();

document.querySelector('.js-result')
  .innerHTML = result;

document.querySelector('.js-moves')
  .innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;


}

function calcTheResult(score, result) {
if (result === 'You win.') {
  score.wins++;
} else if (result  === 'You lose.') {
  score.losses++;
} else {
  score.ties++;
}
}

function updateScoreElement() {
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; // fix problem with result update
}


function pickComputerMove() {
let computerMove= '';

const randomNum = Math.random();

if (randomNum >= 0 && randomNum < 1 / 3) {
  computerMove = 'Rock';
} else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
  computerMove = 'Paper';
} else {
  computerMove = 'Scissors';
}  

return computerMove;
}