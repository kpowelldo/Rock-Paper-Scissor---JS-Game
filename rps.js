var game = function() {

  var computerChoice = '';
  var yourChoice = '';
  var arr = [];


  var numChoice = function() {
    var num = Math.floor(Math.random() * 3);
    return arr[num];
  };

  var round = 0;
  var yourScore = 0;
  var computerScore = 0;

  var winner = function() {
    yourChoice = prompt('Please select rock, paper, or scissors');
    arr = ['rock', 'paper', 'scissors'];
    computerChoice = numChoice();

    if (arr.indexOf(yourChoice) == -1) {
      alert('you need to choose rock, paper, scissor');
      return;
    }

    if (gameMode != 1 && gameMode != 3) {
      alert('Please choose 1 or 3');
      return;
    }

    else if (yourChoice == 'rock' && computerChoice == 'scissors') {
      round++;
      yourScore++;
      alert('Round ' + round + ' - you win! (You: ' + yourScore + ', Computer: ' + computerScore + ')');
    }

    else if (yourChoice == 'rock' && computerChoice == 'paper') {
      round++;
      computerScore++;
      alert('Round ' + round + ' - computer wins (You: ' + yourScore + ', Computer: ' + computerScore + ')');
    }

    else if (yourChoice == 'rock' && computerChoice == 'rock') {
      round++;
      alert('Round ' + round + ' - draw - no winner this round (You: ' + yourScore + ', Computer: ' + computerScore + ')');
    }

    else if (yourChoice == 'paper' && computerChoice == 'rock') {
      round++;
      yourScore++;
      alert('Round ' + round + ' - you win! (You: ' + yourScore + ', Computer: ' + computerScore + ')');
    }

    else if (yourChoice == 'paper' && computerChoice == 'scissors') {
      round++;
      computerScore++;
      alert('Round ' + round + ' - computer wins (You: ' + yourScore + ', Computer: ' + computerScore + ')');
    }

    else if (yourChoice == 'paper' && computerChoice == 'paper') {
      round++;
      alert('Round ' + round + ' - draw - no winner this round (You: ' + yourScore + ', Computer: ' + computerScore + ')');
    }

    else if (yourChoice == 'scissors' && computerChoice == 'paper') {
      round++;
      yourScore++;
      alert('Round ' + round + ' - you win! (You: ' + yourScore + ', Computer: ' + computerScore + ')');
    }

    else if (yourChoice == 'scissors' && computerChoice == 'rock') {
      round++;
      computerScore++;
      alert('Round ' + round + ' - computer wins (You: ' + yourScore + ', Computer: ' + computerScore + ')');
    }

    else if (yourChoice == 'scissors' && computerChoice == 'scissors') {
      round++;
      alert('Round ' + round + ' - draw - no winner this round (You: ' + yourScore + ', Computer: ' + computerScore + ')');
    }
  };


  var singleGame = function() {
    winner();
  }

  var threeGame = function() {
    while (yourScore < 2 && computerScore < 2) {
      winner();
    }
  }

  var startGame = alert('Get ready to play Rock, Paper, Scissors');
  var gameMode = prompt('Would you like to play a single game or best out of three? Please type 1 or 3, select cancel to exit');
  while (gameMode == '1' || gameMode == '3') {
    if (gameMode == 3) {
      threeGame();
    } else if (gameMode == 1) {
      singleGame();
    }
    var playAgain = confirm('Do you want to play another game?');
    while (playAgain === true) {
      game();
      playAgain = confirm('Do you want to play another game?');
    }
  }
}


game();

