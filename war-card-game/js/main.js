

// create a deck of cards
let deck = [];


/* let card = (suit, value) => {
    this.suit = suit
    this.value = value

    return {suit:this.suit, value:this.value}
} */

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

let values = [ 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 ];
let suits = ['clubs' , 'diamonds' , 'spades' , 'hearts'];

    for ( let s = 0; s < suits.length; s++ ) {
        for ( let v = 0; v < values.length; v++ ) {
            deck.push(new Card(suits[s], values[v]))
        }
    };


// shuffle cards (Fisher–Yates shuffle algorithm)

let shuffle = (c) => {
    for (let i = c.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [c[i], c[j]] = [c[j], c[i]];
    }
    return c;
}

let shuffledDeck = shuffle(deck);


// split it in two decks, one for each player

let cardsPOne = shuffledDeck.slice(0, 26 );
let cardsPTwo = shuffledDeck.slice(26, 52);

// variables for DOM 

let cardColDOMOne = document.querySelector("#card-color-1");
let cardNumDOMOne = document.querySelector("#card-num-1");
let cardColDOMTwo = document.querySelector("#card-color-2");
let cardNumDOMTwo = document.querySelector("#card-num-2");
let scorePOne =  0;
let scorePTwo =  0;


// event listener for "removing" cards from each player's deck

document.querySelector("#btn").addEventListener('click', () =>  {

    let readyCards = [cardsPOne, cardsPTwo];

    for (let i = 0; i < readyCards.length; i++) {
    //for every deck - remove one card

        readyCards[i].splice(0,1);

        // as long as players has cards

        if (readyCards[i].length === 0) {

            // alert a winner after a game

            if (scorePOne > scorePTwo) {
                alert("Player 1 won " + scorePOne + " to " + scorePTwo + "!" )
                return false;
            } else if (scorePOne < scorePTwo) {
                alert("Player 2 won " + scorePTwo + " to " + scorePOne + "!" )
                return false;
            } else {
                alert("it's a draw!")
                return false;
            }
        }
    }


    //check who has bigger card & print score 

    if (cardsPOne[0].value > cardsPTwo[0].value ) {
        scorePOne += 1;
        document.querySelector("#score").querySelector("#spanOne").textContent = scorePOne;
    } else if (cardsPOne[0].value < cardsPTwo[0].value ) {
        scorePTwo += 1;
        document.querySelector("#score").querySelector("#spanTwo").textContent = scorePTwo;
    };

           
    // change values from: 11 to J, 12 to Q, ect. and set it to new variale

    let printScoreOne = cardsPOne[0].value;
    let printScoreTwo= cardsPTwo[0].value;
    let printScore = [printScoreOne, printScoreTwo];
    

    for ( let i = 0; i < printScore.length; i++ ) {
        if (printScore[i] === 11) {
            printScore[i] = "J";
        } else if ( printScore[i] === 12 ) {
            printScore[i] = "Q";
        } else if ( printScore[i] === 13 ) {
            printScore[i] = "K";
        } else if ( printScore[i] === 14 ) {
            printScore[i] = "A";
        }
    }

    
    // display the result

    cardColDOMOne.src = 'img/' + cardsPOne[0].suit + '.png';
    cardNumDOMOne.innerText = printScore[0];
    cardColDOMTwo.src = 'img/' + cardsPTwo[0].suit + '.png';
    cardNumDOMTwo.innerText = printScore[1];


});