let playGame = confirm ("Play Rock, Paper, Scissors?")
if (playGame) {
    let playerChoice = prompt ("Pick Rock, Paper, or Scissors");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            
            let computerChoice = Math.floor(Math.random() * 3 + 1); //without the +1 it would generate a random number from 0 - 2 instead of 1 - 3
            let computer = computerChoice === 1 ? "rock"
                : computerChoice === 2 ? "paper"
                : "scissors";
                
        } else {
            alert ("You didn't choose Rock, Paper, or Scissors");
        }
    } else {
        alert ("Game cancelled");
    }
} else {
    alert ("Game cancelled");
}