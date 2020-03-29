let arrayOfHands = [[0], [0]];
let activePlayer = 1;
let sumOfArrayOne = 0;
let sumOfArrayTwo = 0;
let gamePlaying = true;


//DOM

let diceOne = document.getElementById('dice-1');
let diceTwo = document.getElementById('dice-2');
let diceThree = document.getElementById('dice-3');
let diceFour = document.getElementById('dice-4');
let diceFive = document.getElementById('dice-5');
let diceSix = document.getElementById('dice-6');

// throwing the dice

document.getElementById('button-draw').addEventListener('click', () =>  {

    if (gamePlaying) {

        let hand = [];

        const throwDices = (arr) => {
            for ( i = 0; i < 3; i++) {
                let dice = Math.floor(Math.random()*6) + 1;
                arr.push(dice);
            }
        } 

        // for future record if wishes to change any of dices
        throwDices(hand);
        console.log(hand);


        // if the dieces are the same add 500 points to the player's score
        if (hand[0] ===  hand[2] && hand[2] === hand[1]) {
            //  console.log('takie same!')
             activePlayer === 1 ? arrayOfHands[0].push(500):arrayOfHands[1].push(500);
            } else {

                // console.log('inne');
            }

        // sort the array ascendingly & join to one string & change to number(parseInt)
        let SortTheDices = parseInt(hand.sort((a, b) => b - a).join(''), 10);

        // If playerOne is active push the sorted dice number to array& add new score
        if (activePlayer === 1 ) {

                diceOne.src = `img/dice-${hand[0]}.png`,
                diceTwo.src = `img/dice-${hand[1]}.png`,
                diceThree.src = `img/dice-${hand[2]}.png`
            
/*             diceOne.addEventListener('click', () => {

                hand[0] = Math.floor(Math.random()*6) + 1;
                diceOne.src = `img/dice-${hand[0]}.png`
                console.log('clicked')
                console.log(hand);

            }); */

            activePlayer = 2
            arrayOfHands[0].push(SortTheDices);
            console.log(arrayOfHands);
            sumOfArrayOne = arrayOfHands[0].reduce((a,c) => {
                return a + c
            });
            console.log(sumOfArrayOne);
            document.getElementById(`player-1-score`).textContent = `score: ${sumOfArrayOne}`;
            // console.log(sumOfArrayOne);

        } else {
        
            diceFour.src = `img/dice-${hand[0]}.png`;    
            diceFive.src = `img/dice-${hand[1]}.png`;    
            diceSix.src = `img/dice-${hand[2]}.png`; 
            activePlayer = 1
            arrayOfHands[1].push(SortTheDices);
            sumOfArrayTwo = arrayOfHands[1].reduce((a,c) => {
                return a + c
            });
            document.getElementById(`player-2-score`).textContent = `score: ${sumOfArrayTwo}`;
            // console.log(sumOfArrayTwo);

        }

        // console.log(arrayOfHands);


        // First player who gets over 10000 wins
        if (sumOfArrayOne > 10000 ) {
            gamePlaying = false;
            document.getElementById('player_won').textContent = "player 1 won!";
        } else if (sumOfArrayTwo > 10000 ) {
            gamePlaying = false;
            document.getElementById('player_won').textContent = "player 2 won!";
        }
    }
});



// ****** TO DO:  ask the player if wishes to change any of the dices; 


// ****** on click "play" dissaper "main_section" -> appear "play_ground"








