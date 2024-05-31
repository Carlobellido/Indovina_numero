'use strict';

//Define the secret number!
let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;
const guessRestore = document.querySelector('.message').textContent

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //Quando non abbiamo un input 
    if (!guess) {
        document.querySelector('.message').textContent = '🤬 No Number!!!';

        //Quando il giocatore vince
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'YOU WIN 😎🤩';
        document.querySelector('.number').textContent = secretNumber ;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

        //Quando il l'input è più grande del Numero da indovinare
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Try again loser 😛 ,  too HIGH';
            score -= 1
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'YOU LOSE THE GAME '
            document.querySelector('.score').textContent = 0
        }

        //Quando il l'input è più piccolo del Numero da indovinare
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Try again loser 😛 ,  too LOW';
            score -= 1;
            document.querySelector('.score').textContent = score;

        } else {
            document.querySelector('.message').textContent = 'YOU LOSE THE GAME ';
            document.querySelector('.score').textContent = 0;
        }

    }
})

document.querySelector('.again').addEventListener('click', function(){
document.querySelector('.score').textContent = '20'
document.querySelector('.number').textContent = '?'
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.guess').value = null
document.querySelector('.message').textContent = guessRestore
document.querySelector('.number').style.width = '15rem'
secretNumber = Math.trunc((Math.random() * 20) + 1);

})

