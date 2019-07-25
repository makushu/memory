
// card is selected
const memoryCard = document.querySelectorAll('.cards');

// checks if card has flipped
let cardFlipped = false,

// locks the board once it has been shuffled 
setBoard = false,

// back card
backCard,

//front card
frontCard,

//calculates points
points = 0;

/* 
    - reveals back side of the card
    - on first click, card will not flip back if clicked
    - on second click, card will not flip back if clicked
*/
function revealCard() {
    if (setBoard) return;
    if (backCard === this) return;

    this.classList.toggle('show');

    if (!cardFlipped) {
        cardFlipped = true;
        backCard = this;

        return;
    }
    frontCard = this;

    cardsMatch();
	
	if(points == 500){
        setTimeout(function(){ confirm("CONGRADULATIONS! Here is another round");
     }, 1000);

     setTimeout(function(){ location.reload(); }, 3000);
	}
}


/* 
    - checks if cards match
    - disable the flip is disabled if cards match
    - cards flip back if cards do not match 
*/
function cardsMatch() {

    if (backCard.dataset.shape === frontCard.dataset.shape) {
		points += 100;
		document.getElementById("points").innerHTML = "POINTS : " + points;
        disablerevealCard();
    } else {

        flipCardBack();
    }
}

// cards flip back if they do not match 
function removeClick() {
    backCard.classList.remove('show');
    frontCard.classList.remove('show');
}

// once card matches, nothing happens when clicked
function disablerevealCard() {
    backCard.removeEventListener('click', revealCard);
    frontCard.removeEventListener('click', revealCard);
    resetGameBoard();
}

// timer for cards to flip back when they do not match
function flipCardBack() {
    setBoard = true;
    setTimeout(() => {
        removeClick();
        resetGameBoard();
    }, 800);

}

// stop the game when all cards have been flipped and matched 
function resetGameBoard() {
    cardFlipped = false;
    setBoard = false;
    backCard = null;
    frontCard = null;
}

// immediately invoke the shuffle function at the start of each game
(function shuffleCards() {

    memoryCard.forEach(card => {
        let shuffle = Math.floor(Math.random() * 9);
        card.style.order = shuffle;
    });
})();

memoryCard.forEach(cards => cards.addEventListener('click', revealCard));


function refresh(){
    setTimeout(function(){ location.reload(); }, 100);
}
