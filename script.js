function computerPlay() {
    computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0)
        var computerChoice = "Rock"
    else if (computerChoice == 1)
        var computerChoice = "Paper"
    else var computerChoice = "Scissors"
}
console.log(computerPlay())

let playerSelection = "rock"

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock")
        return "Tie"

}

//const playerSelection = "rock"
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));