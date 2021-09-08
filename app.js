
const input = document.querySelector('input');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const score = document.getElementById('score');
let inPlay = true;

let player1score = 0;
const score1 = btn1.addEventListener('click', function () {
    if (input.value && inPlay) {
        player1score += 1;
        console.log(player1score);
        score.innerText = `${player1score} to ${player2score}`;
        if (player1score === input.valueAsNumber && input.valueAsNumber >= (player2score + 2)) {
            inPlay = false;
            score.innerText = `player 1 wins, ${player1score} to ${player2score}`;
        } else if (player1score === input.valueAsNumber && input.valueAsNumber !== (player2score + 2)) {
            alert('must win by 2, keep playing!');
        } else if (player1score > input.valueAsNumber && player1score === (player2score + 2)) {
            inPlay = false;
            score.innerText = `player 1 wins, ${player1score} to ${player2score}`;
        }
    }
})

let player2score = 0;
const score2 = btn2.addEventListener('click', function () {
    if (input.value && inPlay) {
        player2score += 1;
        console.log(player2score);
        score.innerText = `${player1score} to ${player2score}`;
        if (player2score === input.valueAsNumber && input.valueAsNumber >= (player1score + 2)) {
            inPlay = false;
            score.innerText = `player 2 wins, ${player1score} to ${player2score}`;
        } else if (player2score === input.valueAsNumber && input.valueAsNumber !== (player1score + 2)) {
            alert('must win by 2, keep playing!');
        } else if (player2score > input.valueAsNumber && player2score === (player1score + 2)) {
            inPlay = false;
            score.innerText = `player 2 wins, ${player1score} to ${player2score}`;
        }
    }
})

btn3.addEventListener('click', reset);

function reset() {
    inPlay = true;
    input.value = '';
    player1score = 0;
    player2score = 0;
    score.innerText = `${player1score} to ${player2score}`;
    console.log('reset');
}


// const playTo = input.addEventListener('input', function (e) {
//     console.log(input.value);
// });