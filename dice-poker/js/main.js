let hand = [];


// throwing the dice

document.getElementById('button-draw').addEventListener('click', () =>  {
    console.log('button was clicked');

    const throwDices = (arr) => {

        for ( i = 0; i < 3; i++) {
            let dice = Math.floor(Math.random()*6) + 1;
    
            arr.push(dice);
    
        }
    } 
    throwDices(hand);
    
    
    console.log(hand);
});

// after the click push the array to object with arrays



// TO DO:  ask the player if wishes to change any of the dices; 


const newArr = { ... hand }
console.log(newArr);



// sort the array ascendingly

let SortTheDices = hand.sort((a, b) => b - a);

// change the dices to string -> chage the string to one number

let changeToString = hand.join('');
let changeStringToNumber = parseInt(changeToString, 10); 


console.log(changeStringToNumber);







