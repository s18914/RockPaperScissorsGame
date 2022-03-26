// https://websamuraj.pl/examples/js/projekt7/

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
 console.log(game.playerHand);
 hands.forEach(hand => hand.style.boxShadow = '');
 this.style.boxShadow = '0 0 0 5px gold';
}

function checkResult() {
    if (game.layerHand === game.aiHand) {
        //gameSummary.draws++;
        return 'Draw!'
    } else if (game.playerHand === 'stone' && game.aiHand === 'scissors' 
    || game.playerHand === 'scissors' && game.aiHand === 'paper' 
    || game.playerHand === 'paper' && game.aiHand === 'stone') {
        //game.Summary.wins++;
        return "You win!";
    } else {
        //game.Summary.losses++;
        return "You loose..."
    }
}

function computerChoice() {
    return hands[Math.floor(Math.random()*hands.length)].dataset.option;
}

function play() {

    if (game.playerHand === "") {
        alert('Select rock paper or scissors');
        return;
    }

    game.aiHand = computerChoice();
    
    checkResult();
    gameSummary.numbers++;
    
}

hands.forEach(hand => hand.addEventListener('click', handSelection));
btnStart.addEventListener('click', play);