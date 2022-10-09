//Write a getComputerChoice function that randomly return
//either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    let i = Math.floor(Math.random()*3 + 1);
    let output = "";
    switch (i) {
        case 1:
            output = 'Rock';
            break;
        case 2:
            output = 'Paper';
            break;
        case 3:
            output = 'Scissors';
            break;
        default:
            console.log("Error!");
    }
    return output;
}

//Write a function that play a single round of game with
//two parameters - playerSelection and computerSelection
//and then return a string that declares the winner of
//the round.

//the input should be case-insensitive

function oneRound(playerSelection,computerSelection) {
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    let combine = p+c;
    let displayTxt = `Your hand: ${p}`;
    displayTxt += `<br>Computer's hand: ${c}`;
    displayTxt += `<br>Result: `;
    let result = "";
    switch (combine) {
        case 'rockrock':
            result = 'Draw!';
            break;
        case 'rockpaper':
            result = 'Computer wins!';
            break;
        case 'rockscissors':
            result = 'You win!';
            break;
        case 'paperrock':
            result = 'You win!';
            break;
        case 'paperpaper':
            result = 'Draw!';
            break;
        case 'paperscissors':
            result = 'Computer wins!';
            break;
        case 'scissorsrock':
            result = 'Computer wins!';
            break;
        case 'scissorspaper':
            result = 'You win!';
            break;
        case 'scissorsscissors':
            result = 'Draw!';
            break;
        default:
            result = 'ERROR!';
    }
    displayTxt += result;
    
    return {
        "result": result,
        "displayTxt": displayTxt,
    }

}

let btn1 = document.createElement('button');
let btn2 = document.createElement('button');
let btn3 = document.createElement('button');
const btns = [btn1, btn2, btn3];
let divResult = document.createElement('div');
let roundCount = 0;
let pScore = 0;
let cScore = 0;
let output;

btn1.textContent = "Rock";
btn2.textContent = "Paper";
btn3.textContent = "Scissors";

btns.forEach((btn) => {
    document.body.appendChild(btn);
})

document.body.appendChild(divResult);

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (roundCount === 0) {
            divResult.innerHTML = "";
        }

        roundCount++;
        output = oneRound(btn.textContent,getComputerChoice());
        switch (output.result) {
            case 'You win!':
                pScore++;
                break;
            case 'Computer wins!':
                cScore++;
                break;
            case 'Draw!':
                break;
        }
        divResult.innerHTML = divResult.innerHTML + "<br><br>Round: " + roundCount + "<br>" + output.displayTxt;
        
        if (roundCount === 5) {
            divResult.innerHTML += `<br><br>Your final score: ${pScore}`;
            divResult.innerHTML += `<br>Computer's final score: ${cScore}`;
            if (pScore > cScore) {
                divResult.innerHTML += '<h3>You are the final winner!</h3>';
            } else if (pScore < cScore) {
                divResult.innerHTML += '<h3>The computer is the final winner!</h3>';
            } else {
                divResult.innerHTML += '<h3>The overall game is a draw!</h3>';
            }
            roundCount = 0;
            pScore = 0;
            cScore = 0;
            output = null;
        }
    });
})



