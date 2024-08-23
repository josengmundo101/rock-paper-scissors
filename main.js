// Declaring variables
let humanScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;
let roundWinner = '';

// GAME LOGIC

// Win or Lose Function
function status() {
    if (humanScore === 5) {
        alert("You Win!!!");
        window.location.reload(); 
    } else if (computerScore === 5) {
        alert("You Lose!!!");
        window.location.reload(); 
    }
}

// ComputerChoice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    let choice;

    switch (randomNum) {
        case 0:
            choice = "ROCK";
            break;
        case 1:
            choice = "PAPER";
            break;
        case 2:
            choice = "SCISSOR";
            break;
    }
    return choice;
}

// Conditions
function playRound(humanChoice) {
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        roundWinner = 'draw';
    } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSOR") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSOR" && computerChoice === "PAPER")
    ) {
        humanScore++;
        roundWinner = 'player';
    } else {
        computerScore++;
        roundWinner = 'computer';
    }
}

// Game Over Check
function isGameOver() {
    return humanScore === 5 || computerScore === 5;
}

// UI Elements
const scoreInfo = document.getElementById("scoreInfo");
const scoreMessage = document.getElementById("scoreMessage");
const playerSign = document.getElementById("playerSign");
const playerScorePart = document.getElementById("playerScore");
const computerSign = document.getElementById("computerSign");
const computerScorePart = document.getElementById("computerScore");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
const endgameModal = document.getElementById("endgameModal");
const overlay = document.getElementById("overlay");
const endgameMsg = document.getElementById("endgameMsg");

// Event Listeners
rockBtn.addEventListener('click', () => handleClick('ROCK'));
paperBtn.addEventListener('click', () => handleClick('PAPER'));
scissorBtn.addEventListener('click', () => handleClick('SCISSOR'));

// Handle Player's Click
function handleClick(humanChoice) {
    if (isGameOver()) {
        setFinalMessage();
        openEndgameModal();
        return;
    }

    playRound(humanChoice);
    updateChoices(humanChoice, computerChoice);
    updateScore();

    if (isGameOver()) {
        setFinalMessage();
        openEndgameModal();
    }
}

// Update UI with Choices
function updateChoices(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "ROCK":
            playerSign.textContent = '✊';
            break;
        case "PAPER":
            playerSign.textContent = '✋';
            break;
        case "SCISSOR":
            playerSign.textContent = '✌';
            break;
    }

    switch (computerChoice) {
        case "ROCK":
            computerSign.textContent = '✊';
            break;
        case "PAPER":
            computerSign.textContent = '✋';
            break;
        case "SCISSOR":
            computerSign.textContent = '✌';
            break;
    }
}

// Update Score
function updateScore() {
    if (roundWinner === 'draw') {
        scoreInfo.textContent = "It's a draw!";
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You Won!';
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = 'You Lost!';
    }

    playerScorePart.textContent = `Player: ${humanScore}`;
    computerScorePart.textContent = `Computer: ${computerScore}`;
}

// Set Final Message
function setFinalMessage() {
    if (humanScore > computerScore) {
        endgameMsg.textContent = 'You won!';
    } else {
        endgameMsg.textContent = 'You lost...';
    }
}

// Open Endgame Modal
function openEndgameModal() {
    endgameModal.classList.add('active');
    overlay.classList.add('active');
}

// Close Endgame Modal
function closeEndgameModal() {
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
}


document.getElementById('restartBtn').addEventListener('click', restartGame);

// Restart the Game
function restartGame() {
    humanScore = 0;
    computerScore = 0;
    scoreInfo.textContent = 'Choose your weapon';
    scoreMessage.textContent = 'First to score 5 points wins the game';
    playerScorePart.textContent = 'Player: 0';
    computerScorePart.textContent = 'Computer: 0';
    playerSign.textContent = '❔';
    computerSign.textContent = '❔';
    closeEndgameModal();
}
