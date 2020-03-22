let hand = [];


// throwing the dice

const throwDices = (arr) => {

    for ( i = 0; i < 3; i++) {
        let dice = Math.floor(Math.random()*6) + 1;

        arr.push(dice);
        arr.sort((a, b) => b - a);
    }
} 

throwDices(hand);
console.log(hand);


let toStringJoined = hand.join('');
console.log(toStringJoined);










// const newArr = { ... hand }
// console.log(newArr);

