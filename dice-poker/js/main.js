let arrayOfHands = [];
let activePlayer = 1;

//Dices DOM

let diceOne = document.getElementById('dice-1');
let diceTwo = document.getElementById('dice-2');
let diceThree = document.getElementById('dice-3');
let diceFour = document.getElementById('dice-4');
let diceFive = document.getElementById('dice-5');
let diceSix = document.getElementById('dice-6');

// throwing the dice

document.getElementById('button-draw').addEventListener('click', () =>  {

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

    // sort the array ascendingly & join to one string & change to number(parseInt)
    let SortTheDices = parseInt(hand.sort((a, b) => b - a).join(''), 10);
    console.log(SortTheDices);

    // Push the sorted number to another array
    arrayOfHands.push(SortTheDices);
    console.log(arrayOfHands);

    // add the next number of a array
    let sumOfArray = arrayOfHands.reduce((a,c) => {
        return a + c
    });
     console.log(sumOfArray);

    // store the score in DOM
    let score = document.getElementById(`player-${activePlayer}-score`).textContent = sumOfArray;

    score =+ score;




            diceOne.src = `img/dice-${hand[0]}.png`;
            diceTwo.src = `img/dice-${hand[1]}.png`;
            diceThree.src = `img/dice-${hand[2]}.png`;
/*             diceFour.src = `img/dice-${hand[0]}.png`;
            diceFive.src = `img/dice-${hand[1]}.png`;
            diceSix.src = `img/dice-${hand[2]}.png`; */

});



// to do - > change the player 


// ****** TO DO:  ask the player if wishes to change any of the dices; 


// const newArr = { ... hand }
// console.log(newArr);








