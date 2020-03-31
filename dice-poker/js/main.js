//game logic variables.
let arrayOfHands = [[0], [0]];
let activePlayer = 0;
let sumOfArray = 0;
let gamePlaying = true;
let diceRolled = true;
let hand; 

//DOM

let dices = [
    diceOne = document.getElementById('dice-1'),
    diceTwo = document.getElementById('dice-2'),
    diceThree = document.getElementById('dice-3'),
    diceFour = document.getElementById('dice-4'),
    diceFive = document.getElementById('dice-5'),
    diceSix = document.getElementById('dice-6')
    ];
    let clickedDice = document.getElementsByClassName('dice_clicked');

    //BUTTONS  
    let buttonPlay = document.getElementById('button-bouncing');
    let buttonDraw = document.getElementById('button-draw');
    let buttonSubmit = document.getElementById('button-submit');
    buttonSubmit.disabled = true;

    //SECTIONS 

    let sectionMain = document.getElementById('main_section');
    let sectionPlay = document.getElementById('play_ground');
    sectionPlay.style.visibility = 'hidden';


buttonPlay.addEventListener('click', () => {
    document.querySelector('.from-top').classList.add('from-top-disappear');
    document.querySelector('.from-center').classList.add('from-center-disappear');
    setTimeout(function(){ buttonPlay.style.visibility = 'hidden'; }, 10);
    setTimeout(function(){ sectionPlay.style.visibility = 'visible'; }, 2100); 
    
});

// throwing the dice
buttonDraw.addEventListener('click', () =>  {

    hand = [];

    if (gamePlaying) {
        buttonSubmit.disabled = false;

        //trow the dices and store them in variable hand
        const throwDices = (arr) => {
            for ( i = 0; i < 3; i++) {
                let dice = Math.floor(Math.random()*6) + 1;
                arr.push(dice);
            }
        } 
        throwDices(hand);

        // If playerOne is active push the sorted dice number to array& add new score
        if (activePlayer === 0 ) {
            activePlayer = 1
            diceRolled = true;
            diceOne.src = `img/dice-${hand[0]}.png`;
            diceTwo.src = `img/dice-${hand[1]}.png`;
            diceThree.src = `img/dice-${hand[2]}.png`;

                //redraw the dice
                diceOne.addEventListener('click', () => {
                    //you can redraw only ine dice
                    if (diceRolled) {
                    hand[0] = Math.floor(Math.random()*6) + 1;
                    diceOne.src = `img/dice-${hand[0]}.png`
                    //dice was redrawn
                    diceOne.classList.add('dice_clicked');
                    }
                    diceRolled = false;
                });
            
                diceTwo.addEventListener('click', () => {
                    if (diceRolled) {
                    hand[1] = Math.floor(Math.random()*6) + 1;
                    diceTwo.src = `img/dice-${hand[1]}.png`
                    diceTwo.classList.add('dice_clicked');
                    }
                    diceRolled = false;
                });
            
                diceThree.addEventListener('click', () => {
                    if (diceRolled) {
                    hand[2] = Math.floor(Math.random()*6) + 1;
                    diceThree.src = `img/dice-${hand[2]}.png`
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
                diceFour.classList.add('dice_clicked');
                }
                diceRolled = false;
            });
    
            diceFive.addEventListener('click', () => {
                if (diceRolled) {
                hand[1] = Math.floor(Math.random()*6) + 1;
                diceFive.src = `img/dice-${hand[1]}.png`
                diceFive.classList.add('dice_clicked');
                }
                diceRolled = false;
            });
    
            diceSix.addEventListener('click', () => {
                if (diceRolled) {
                hand[2] = Math.floor(Math.random()*6) + 1;
                diceSix.src = `img/dice-${hand[2]}.png`
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

        //remove DOM's "clicked dice" class
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
            // add the numbers of a each array
            sumOfArray = arrayOfHands[activePlayer].reduce((a,c) => {
                return a + c
            });  

            //store the score
            document.getElementById(`player-${activePlayer}-score`).textContent = `total score: ${sumOfArray}` 

        // First player who gets over 10000 wins
        if (sumOfArray > 10000 && activePlayer === 0 ) {
            gamePlaying = false;
            alert ('player 2 won!');
            newGame();
        } else if (sumOfArray > 10000 && activePlayer === 1 ) {
            gamePlaying = false;
            alert ('player 1 won!');
            newGame();
        }
    }
    buttonSubmit.disabled = true;
}); 

// init new game
function newGame(){
    window.location.reload();
}