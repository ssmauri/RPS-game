let humanScore = 0
let computerScore = 0
const codigos = [ 'null','Piedra','Papel','Tijera']

function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1 );
    return computerChoice
}
function callErrorInput(humanChoice) {
    alert("Ingresaste " + humanChoice + ". Debes ingresar del 1 al 3");
    let getNewValue = getHumanChoice();
    return getNewValue
}

function getHumanChoice() {
    let humanChoice = prompt("Inserte 1 = Piedra, 2 = Papel, 3 = Tijera");
    if ( humanChoice === null ) {
        throw new Error("NO ERROR. Press F5 to play again");        
    } else { 
        if ( humanChoice >= 1 && humanChoice <= 3 ) {
            return humanChoice
        } else {
            return callErrorInput(humanChoice);
        }
    }
}

function playRound(computerChoice, humanChoice) {
    const youWin = ['21','32','13']
    if ( computerChoice == humanChoice) {
        alert("Empate técnico!!\nambos escogieron " + codigos[computerChoice]);
    } else {
        let resultFinal =  humanChoice + computerChoice;

        if (youWin.includes(resultFinal)) {
            alert("You WIN!!!\n" + codigos[humanChoice] + " gana a " + codigos[computerChoice]);
            ++humanScore;
        } else {
            alert("Pc WINS!!\n" + codigos[computerChoice] + " gana a " + codigos[humanChoice]);
            ++computerScore;
        } 
    }
}

function playGame(round = 5) {
    for ( i = 1; i <= round; ++i) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    if ( humanScore > computerScore ) {
        alert("Human WINS\n" + humanScore + " a " + computerScore);
    } else {
        alert("Pc WINS!!\n" + computerScore + " a " + humanScore);
    }

}

playGame();