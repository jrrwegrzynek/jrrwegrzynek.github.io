let hand = [];

// throwing the dice

document.getElementById('button-draw').addEventListener('click', () =>  {

    const throwDices = (arr) => {

        for ( i = 0; i < 3; i++) {
            let dice = Math.floor(Math.random()*6) + 1;
    
            arr.push(dice);
        }
    } 
    throwDices(hand);

    // sort the array ascendingly & join to one string & change to number(parseInt)
    let SortTheDices = parseInt(hand.sort((a, b) => b - a).join(''), 10);
    console.log(SortTheDices); 
});





// TO DO:  ask the player if wishes to change any of the dices; 


// const newArr = { ... hand }
// console.log(newArr);








