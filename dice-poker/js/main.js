let hand = [];


// throwing the dice

const throwDices = (arr) => {

    for ( i = 0; i < 3; i++) {
        let dice = Math.floor(Math.random()*6) + 1;

        arr.push(dice);

        // sort the array ascendingly
        arr.sort((a, b) => b - a);
    }
} 

throwDices(hand);
console.log(hand);


// TO DO:  ask the player if wishes to change any of the dices; 


// const newArr = { ... hand }
// console.log(newArr);





// change the dices to string -> chage the string to one number

let changeToString = hand.join('');
let changeStringToNumber = parseInt(changeToString, 10); 


console.log(changeStringToNumber);







