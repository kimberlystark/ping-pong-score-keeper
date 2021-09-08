const input = document.querySelector('input');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const score = document.getElementById('score');
let inPlay = true;

const playTo = input.addEventListener('input', function (e) {
    console.log(input.value);
});

const reset = btn3.addEventListener('click', function () {
    input.value = '';
    player1score = 0;
    player2score = 0;
    score.innerText = `${player1score} to ${player2score}`;
    console.log('reset');
})

let player1score = 0;
const score1 = btn1.addEventListener('click', function () {
    if (input.value && inPlay) {
        player1score += 1;
        console.log(player1score);
        score.innerText = `${player1score} to ${player2score}`;
        if (player1score === input.valueAsNumber) {
            inPlay = false;
            return score.innerText = `player 1 wins, ${player1score} to ${player2score}`;
        }
    }
})

let player2score = 0;
const score2 = btn2.addEventListener('click', function () {
    if (input.value && inPlay) {
        player2score += 1;
        console.log(player2score);
        score.innerText = `${player1score} to ${player2score}`;
        if (player2score === input.valueAsNumber) {
            inPlay = false;
            return score.innerText = `player 2 wins, ${player1score} to ${player2score}`;
        }
    }
})

