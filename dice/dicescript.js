'use script';
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.getElementById('score--0');
const score1El=document.querySelector('#score--1');
const diceEl=document.querySelector('.dice');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');

const btnNew=document.querySelector(' .btn--new');
const btnRoll=document.querySelector(' .btn--roll');
const btnHold=document.querySelector(' .btn--hold');
const scores=[0,0];
let currentScore=0;
let activePlayer=0;
let playing=true;
const switchPlayer= function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0
    
    activePlayer=activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
//make the score elements to zero
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');
//Functionallity of the roll, new game and the hold button
btnRoll.addEventListener('click',function(){
    if(playing){
    //generating a random number for the dice sides
    const dice=Math.trunc(Math.random()*6)+1;
    console.log(dice);
//Displaying the dice number png
diceEl.classList.remove('hidden');
diceEl.src=`dice-${dice}.png`;

if(dice !==1){
//Add dice to current score
currentScore=currentScore+dice;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;

//Will be changed later when switching from one player to another
//currentScore +=dice;

}else{
    //Switching to the next player
    //use ternary operator or an if statement
   switchPlayer();

    


}
    }
});
btnHold.addEventListener('click', function(){
    if(playing){

    //add currentscore to score
  scores[activePlayer] +=currentScore;
    //same as
    //scores[1]=scores[1]+currentScore
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer] ;
    //2.Check whether the player has one
    if(scores[activePlayer]>=100){
        playing=false;
        diceEl.classList.add('hidden');

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('toggle');
    }
    else{
 //switch player
 switchPlayer();
    }
}
})
const int=function(){
    score0El.textContent=0;
    score1El.textContent=0;
        activePlayer=0;
        currentScore=0;
     activePlayer=0;
     playing=true;
     scores[0]=0;
     scores[1]=0;
     document.getElementById(`current--0`).textContent=0;
     document.getElementById(`current--1`).textContent=0;
     player0El.classList.remove('player--winner');
     player1El.classList.remove('player--winner');
     player0El.classList.add('activePlayer');
     player1El.classList.remove('activePlayer');
     
}
btnNew.addEventListener('click',int);