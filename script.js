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
    
    return result;

}

//Write a function called game that plays 5 rounds of
//the game, keep scores and report a winner or loser
//at the end

function game() {
    let pScore = 0, cScore = 0;
    for (let i = 1; i <= 5; i++) {
        let hasSelected = false;
        let playerSelection = "";
        let output = "";
        while (hasSelected!=true) {
            let answer = prompt("Please choose Rock, Paper or Scissors:");
            if (answer == null) {
                return null;
            } else {
                playerSelection = answer.toLowerCase();
                if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
                hasSelected = true;
                }
            }
        }
        output = oneRound(playerSelection,getComputerChoice());
        switch (output) {
            case 'You win!':
                pScore++;
                console.log(`Game ${i}: You win!`);
                break;
            case 'Computer wins!':
                cScore++;
                console.log(`Game ${i}: Computer wins!`);
                break;
            case 'Draw!':
                console.log(`Game ${i}: Draw!`);
                break;
            default:
                console.log('ERROR!');
        }
    }
    let winner;
    if (pScore > cScore) {
        winner = 'You';
    } else if (pScore < cScore) {
        winner = 'Computer';
    } else {
        winner = 'No one'
    }

    return {
        'winner':winner,
        'pScore':pScore,
        'cScore':cScore,
        'draw': 5 - pScore - cScore
    };
}

//Announce the overall result of the game
let finalWinner = game();
if (finalWinner !== null) {
    console.log('The total score is:');
    console.log(`Your score: ${finalWinner.pScore}`);
    console.log(`Computer's score: ${finalWinner.cScore}`);
    console.log(`Draw games: ${finalWinner.draw}`);

    switch (finalWinner.winner) {
        case 'You':
            console.log('You have won the Grand Prize!');
            break;
        case 'Computer':
            console.log('You will need some improvement!');
            break;
        case 'No one':
            console.log('You almost made it. You should try again!');
            break;
        default:
            console.log('ERROR!');
    }
}




