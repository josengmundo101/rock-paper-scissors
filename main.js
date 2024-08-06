// declaring variables
let humanScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;

// Win or Lose Function
function status(humanScore, computerScore) {
    if(humanScore === 5) {
        alert("You Win!!!");
        window.location.reload();
    }else if(computerScore === 5){
        alert("You Lose!!!");
        window.location.reload();
    }
}

//ComputerChoice
function getComputerChoice (){
    const randomNum = Math.floor(Math.random() * 3);
    let choice;

    switch(randomNum){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
    }
    return choice;
}

//Conditions

function playRound (humanChoice) {
    computerChoice = getComputerChoice();

    if(humanChoice === computerChoice){
        return "draw";
    }else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors"  && computerChoice === "paper")
    ){
        humanScore++;
        return "win";
    }else {
        computerScore++;
        return "lose";
    }
}


//User Play
while (humanScore < 5 && computerScore < 5) {
    humanChoice = prompt("Enter rock, paper, scissors: ");
    const result = playRound(humanChoice);
    console.log(`You ${result}!`);
    status(humanScore,computerChoice);
}

