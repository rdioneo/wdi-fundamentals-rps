////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return
    if (move > 0) {
        console.log (move);
    } else if (move = 0 ||'') {
        console.log ('getInput()');
    } else {
        return;
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return
     if (move > 0) {
    console.log (move);
    } else if (move = 0 || '') {
        console.log ('randomPlay()');
    } else {
        return;
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === "rock" && computerMove === 'rock') {
       return 'tie';
   } else if (playerMove && computerMove === 'paper') {
       return 'tie';
   } else if (playerMove && computerMove === 'scissors') {
       return 'tie';
   } else if (playerMove === 'rock' && computerMove === 'scissors') {
       return 'player';
   } else if (playerMove === 'paper' && computerMove === 'rock') {
       return 'player';
   } else if (playerMove === 'scissors' && computerMove === 'paper') {
       return 'player';
   } else if (computerMove === 'rock' && playerMove === 'scissors') {
       return 'computer';
   } else if (computerMove === 'paper' && playerMove === 'rock') {
       return 'computer';
   } else if (computerMove === 'scissors' && playerMove === 'paper') {
       return 'computer';
   return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  
    if (playerWins >= 0 && playerWins <= 5) {
        return console.log ('You win!' + 'You chose ' + playerMove + 'Computer chose ' + computerMove);
    }
        console.log ('The score is currently '+ playerWins + ' to ' + computerWins);
    }
    else if (computerWins >=0 && computerWins <=5) {
        return console.log ('Computer wins!' + 'You chose'+ playerMove + 'Computer chose' + computerMove);
    }
        console.log ('The score is currently '+ playerWins + ' to ' + computerWins);
    }
    }
    return [playerWins, computerWins];
}
    
