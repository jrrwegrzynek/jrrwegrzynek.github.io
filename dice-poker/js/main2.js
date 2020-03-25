


class newArray {
    contructor (newDice){
        this.newDice = newDice;
    }
}

document.getElementById('button-draw').addEventListener('click', () =>  {

    let hand = [];
for ( i = 0; i < 3; i++) {
    let dice = Math.floor(Math.random()*6) + 1;
    hand.push(dice);
    console.log(dice);
}
console.log(hand);

})








/* for ( i = 0; i < 3; i++) {
    let dice = Math.floor(Math.random()*6) + 1;
    hand.push(new newArray(dice[i]));
} */