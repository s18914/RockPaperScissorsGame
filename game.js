const gameSummary = {
 numbers: 0,
 wins: 0,
 losses: 0,
 draws: 0
}

const game = {
 playerHand: "",
 aiHand: ""
}

const hands = [...document.querySelectorAll('.select img')];

const btnStart = document.querySelector('.start');

function handSelection() {
 game.playerHand = this.dataset.option
 hands.forEach(hand => hand.style.boxShadow = '');
 this.style.boxShadow = '0 0 0 5px gold';
}

function checkResult() {

    if (game.playerHand === game.aiHand) {
        gameSummary.draws += 1;
        document.querySelector('p.draws span').textContent = gameSummary.draws;
        return "Draw!"
    } else if (game.playerHand === "stone" && game.aiHand === "scissors" 
        || game.playerHand === "scissors" && game.aiHand === "paper" 
        || game.playerHand === "paper" && game.aiHand === "stone") {
        gameSummary.wins += 1;
        document.querySelector('p.wins span').textContent = gameSummary.wins;
        return "You win!";
    } else {
        gameSummary.losses++;
        document.querySelector('p.losses span').textContent = gameSummary.losses;
        return "You loose..."
    }
}

function computerChoice() {
    return hands[Math.floor(Math.random()*hands.length)].dataset.option;
}

function resetGame() {
    game.playerHand = "";
    hands.forEach(hand => hand.style.boxShadow = '');
}

function play() {

    if (game.playerHand === "") {
        alert('Select rock paper or scissors');
        return;
    }

    document.querySelector('[data-summary="your-choice"]').textContent = game.playerHand;

    game.aiHand = computerChoice();
    document.querySelector('[data-summary="ai-choice"]').textContent = game.aiHand;
    
    
    document.querySelector('[data-summary="who-win"]').textContent = checkResult();

    gameSummary.numbers++;
    document.querySelector('p.numbers span').textContent = gameSummary.numbers;
    
    resetGame();
}

hands.forEach(hand => hand.addEventListener('click', handSelection));
btnStart.addEventListener('click', play);