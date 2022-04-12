let playGame = confirm ("Play Rock, Paper, Scissors?")
if (playGame) {
    let playerChoice = prompt ("Pick Rock, Paper, or Scissors");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (
            playerOne === "rock" ||
            playerOne === "paper" ||
            playerOne === "scissors"
            ) {
                let computerChoice = Math.floor(Math.random() * 3 + 1); //without the +1 it would generate a random number from 0 - 2 instead of 1 - 3
                let computer = 
                    computerChoice === 1
                    ? "rock"
                    : computerChoice === 2 ?
                    "paper"
                    : "scissors";

            let result =
                playerOne === computer
                    ? "Tie Game"
                    : playerOne === "rock" && computer === "paper"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}
                    \nComputer wins`
                    : playerOne === "paper" && compter === "scissors"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}
                    \nComputer wins`
                    : playerOne === "scissors" && computer === "rock"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}
                    \nComputer wins`
                    : `playerOne: ${playerOne}\nComputer: ${computer}
                    \nplayerOne wins`;
                alert(result);
                let playAgain = confirm("Play again?");
                playAgain ? location.reload() : alert("ok");
                
        } else {
            alert ("You didn't choose Rock, Paper, or Scissors");
        }
    } else {
        alert ("Game cancelled");
    }
} else {
    alert ("Game cancelled");
}