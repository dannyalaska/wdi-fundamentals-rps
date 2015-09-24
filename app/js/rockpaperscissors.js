////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
} 
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(playerMove) {
    return playerMove || getInput();
}
function getComputerMove(computerMove){
    return computerMove || randomPlay();
}
function getWinner(player, computer) {
    var playerMove= getPlayerMove();
    var computerMove= getComputerMove();
    console.log("Player chose " + playerMove + " and Computer chose " + computerMove);
    if (playerMove=== 'rock') {
        if (computerMove=== 'scissors') {
            console.log ("Player Wins!");
            return 'player'; 
        }
        if (computerMove=== 'paper') {
            console.log ("Computer Wins!");
            return 'computer';
        }
    }
   if (playerMove=== 'scissors') {
        if (computerMove=== 'rock') {
            console.log ("Computer Wins!");
            return 'computer';
        }
        if (computerMove=== 'paper') {
            console.log ("Player Wins!");
            return 'player';
        }
    }
   if (playerMove==='paper') {
        if (computerMove==='scissors') {
            console.log ("Computer Wins!");
            return 'computer';
        }
        if (computerMove=== 'rock') {
            console.log ("Player Wins!");
            return 'player';
        }
    }
   if (playerMove === computerMove) {
            console.log ("It's a tie!");
            return null;
    }
}

function playToFive() { 
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins=0;
    var computerWins=0;
    for (var i=0; i<=5; i++) {
            if (playerWins===5 || computerWins===5) {
                console.log ("Game over! Player has " + playerWins + " Computer has "+ computerWins);
            }
            else {
                if (getWinner('player')) {
                playerWins++;
                console.log("Player: " + playerWins + " to Computer :" + computerWins);
                }
                if (getWinner('computer')) {
                computerWins++;
                console.log("Player: " + playerWins + " to Computer :" + computerWins);
                } 
            }
        }
    }
playToFive();
