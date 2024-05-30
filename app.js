let humanScore = 0
let computerScore = 0
const codigos = [ 'null','Piedra','Papel','Tijera']

function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1 );
    return computerChoice
}

function changeLabel (selector, text) {
    document.querySelector(selector).textContent = text;
    document.querySelector('div#humanScore').textContent = humanScore;
    document.querySelector('div#computerScore').textContent = computerScore;
}

function playRound(computerChoice, humanChoice) {
    const youWin = ['21','32','13']
    if ( computerChoice == humanChoice) {
        changeLabel('div#showMsg', 'Empate técnico!!\nambos escogieron ' + codigos[computerChoice])
    } else {
        let resultFinal =  humanChoice + computerChoice;
        if (youWin.includes(resultFinal)) {
            ++humanScore;
            changeLabel('div#showMsg', "You WIN!!!\n" + codigos[humanChoice] + " gana a " + codigos[computerChoice])
        } else {
            ++computerScore;
            changeLabel('div#showMsg', "Pc WINS!!\n" + codigos[computerChoice] + " gana a " + codigos[humanChoice] );
        } 
    }
}


// JAVASCRIPT for UI RPS-game

const btns = document.querySelectorAll(".game-btn");
const buttons = document.querySelector(".Buttons");

btns.forEach((button) => {    // El querySelectorAll nos devuelve un NodeList como array por eso usamaos forEach.
    button.addEventListener("click", () => {
        playRound(getComputerChoice(), button.id);
        if (humanScore >= 3) {
            changeLabel('div#showMsg', 'Human Wins!!!');
            humanScore = 0;
            computerScore = 0;
            buttons.style.display = "none";
        } else if (computerScore >=3) {
            changeLabel('div#showMsg', 'Pc Wins!!!');
            humanScore = 0;
            computerScore = 0;
            buttons.style.display = "none";
        }
    });
});


