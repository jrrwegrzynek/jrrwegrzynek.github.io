let arrayOfHands = [[0], [0]];
let activePlayer = 0;
let sumOfArray = 0;
let gamePlaying = true;
let diceRolled = true;
let hand;

//DOM


let diceOne = document.getElementById('dice-1');
let diceTwo = document.getElementById('dice-2');
let diceThree = document.getElementById('dice-3');
let diceFour = document.getElementById('dice-4');
let diceFive = document.getElementById('dice-5');
let diceSix = document.getElementById('dice-6');
let clickedDice = document.getElementsByClassName('dice_clicked');
let dices = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
    //BUTTONS 
    
    let buttonDraw = document.getElementById('button-draw');
    let buttonSubmit = document.getElementById('button-submit');
    buttonSubmit.disabled = true;

// throwing the dice

buttonDraw.addEventListener('click', () =>  {

    hand = [];

    if (gamePlaying) {
        buttonSubmit.disabled = false;

        const throwDices = (arr) => {
            for ( i = 0; i < 3; i++) {
                let dice = Math.floor(Math.random()*6) + 1;
                arr.push(dice);
            }
        } 
        throwDices(hand);
        console.log(hand);

        // If playerOne is active push the sorted dice number to array& add new score
        if (activePlayer === 0 ) {
            activePlayer = 1
            diceRolled = true;
            diceOne.src = `img/dice-${hand[0]}.png`;
            diceTwo.src = `img/dice-${hand[1]}.png`;
            diceThree.src = `img/dice-${hand[2]}.png`;


                diceOne.addEventListener('click', () => {
                    if (diceRolled) {
                    hand[0] = Math.floor(Math.random()*6) + 1;
                    diceOne.src = `img/dice-${hand[0]}.png`
                    console.log(hand);
                    diceOne.classList.add('dice_clicked');
                    }
                    diceRolled = false;
                });
            
                diceTwo.addEventListener('click', () => {
                    if (diceRolled) {
                    hand[1] = Math.floor(Math.random()*6) + 1;
                    diceTwo.src = `img/dice-${hand[1]}.png`
                    console.log(hand);
                    diceTwo.classList.add('dice_clicked');
                    }
                    diceRolled = false;
                });
            
                diceThree.addEventListener('click', () => {
                    if (diceRolled) {
                    hand[2] = Math.floor(Math.random()*6) + 1;
                    diceThree.src = `img/dice-${hand[2]}.png`
                    console.log(hand);
                    diceThree.classList.add('dice_clicked');
                    }
                    diceRolled = false;
                });

        } else {
            activePlayer = 0;
            diceRolled = true;
            diceFour.src = `img/dice-${hand[0]}.png`;    
            diceFive.src = `img/dice-${hand[1]}.png`;    
            diceSix.src = `img/dice-${hand[2]}.png`; 

            diceFour.addEventListener('click', () => {
                if (diceRolled) {
                hand[0] = Math.floor(Math.random()*6) + 1;
                diceFour.src = `img/dice-${hand[0]}.png`
                console.log(hand);
                diceFour.classList.add('dice_clicked');
                }
                diceRolled = false;
            });
    
            diceFive.addEventListener('click', () => {
                if (diceRolled) {
                hand[1] = Math.floor(Math.random()*6) + 1;
                diceFive.src = `img/dice-${hand[1]}.png`
                console.log(hand);
                diceFive.classList.add('dice_clicked');
                }
                diceRolled = false;
            });
    
            diceSix.addEventListener('click', () => {
                if (diceRolled) {
                hand[2] = Math.floor(Math.random()*6) + 1;
                diceSix.src = `img/dice-${hand[2]}.png`
                console.log(hand);
                diceSix.classList.add('dice_clicked');
                }
                diceRolled = false;
            });
        }        
    }
    buttonDraw.disabled = true;
});

document.getElementById('button-submit').addEventListener('click', () => {

    if (gamePlaying) {

        for (i =0; i < dices.length; i++ ) {
            dices[i].classList.remove('dice_clicked');
        }

        buttonDraw.disabled = false;
        // sort the array ascendingly & join to one string & change to number(parseInt)
        let sortTheDices = parseInt(hand.sort((a, b) => b - a).join(''), 10);

            arrayOfHands[activePlayer].push(sortTheDices);

            // if the dieces are the same add 500 points to the player's score
            if (hand[0] ===  hand[2] && hand[2] === hand[1]) {
                //  console.log('takie same!')
                 activePlayer === 0 ? arrayOfHands[0].push(500):arrayOfHands[1].push(500);
                } else {
    
                    // console.log('inne');
                }               

            sumOfArray = arrayOfHands[activePlayer].reduce((a,c) => {
                return a + c
            });  

            console.log(sumOfArray);
            document.getElementById(`player-${activePlayer}-score`).textContent = sumOfArray;
            console.log(arrayOfHands);
            console.log(sortTheDices);
            console.log(hand);

        // First player who gets over 10000 wins
        if (sumOfArray > 2000 && activePlayer === 0 ) {
            gamePlaying = false;
            document.getElementById('player_won').textContent =`player 2 won!`;
        } else if (sumOfArray > 2000 && activePlayer === 1 ) {
            gamePlaying = false;
            document.getElementById('player_won').textContent =`player 1 won!`;
        }
    }
    buttonSubmit.disabled = true;
}); 


// ****** on click "play" dissaper "main_section" -> appear "play_ground"

