/*
GAME RULES:

- The game has 2 players, playing in rounds.
- In each turn, a player rolls two dices as many times as he whishes. Each result get added to his current score.
- but, if the player rolls a 1 and 1 on both dice, all his current score gets lost. After that, it's the next player's turn.
- The player can choose to 'Hold', which means that his current score gets added to his GL0BAL score. After that, it's the next player's turn.
- By default The first player to reach 100 points on GLOBAL score wins the game, in other hand players can set the winning points inside the input field instead using predefined winning score.

// */ 
window.onload = function(){
    alert('The game has 2 players, playing in rounds'.toUpperCase());
alert('In each turn, a player rolls two dices as many times as he whishes. Each result get added to his current score.'.toUpperCase())
alert ('but, if the player rolls a 1 and 1 on both dice, all his current score gets lost. After that, it\'s the next player\'s turn.'.toUpperCase())
alert('The player can choose to Hold, which means that his current score gets added to his GL0BAL score by clicking on the hold button. After that it\'s the next player\'s turn. '.toUpperCase())
alert(' By default The first player to reach 100 points on GLOBAL score wins the game, in other hand players can set the winning points of their choice inside the input field instead using predefined winning score.'.toUpperCase())

   }




var   activePlayer, scores, roundScore, gamePlaying,x,y;

init();
var lastCard;

//  document.querySelector('#current-' + activePlayer).textContent = dice;
//  document.querySelector('#current-' + activePlayer).innerHTML ="<em>"+dice+  "</em> ";
 
// document.querySelector('.btn-enter').addEventListener('click',function() {
    
//     x = prompt('ENTER FIRST NAME AS PLAYER 1');
//    document.getElementById('name-' +activePlayer).textContent = x ;
//    y = prompt('ENTER SECOND NAME AS PLAYER 2');
//    document.getElementById('name-1').textContent = y ;


// })

 document.querySelector('.btn-roll').addEventListener('click',function(){
     if (gamePlaying) {
        
         var dice1 = Math.floor(Math.random() * 6) + 1;
         var dice2 = Math.floor(Math.random() * 6) + 1;
        // var diceDOM =  document.querySelectorAll('.dice');
        document.getElementById('dice-1').style.display='block';   
        document.getElementById('dice-2').style.display='block';
        // diceDOM.style.display = 'block';
        document.getElementById('dice-1').src = 'dice-'+ dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-'+ dice2 + '.png';


        if (dice1 !== 1 && dice2 !==1) {
            roundScore += dice1 +dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore; 
        } else {  //this else handles alot
           nextPlayer();
          
        }
    }
       
})
document.querySelector('.btn-hold').addEventListener('click',function(){ 
    
  if(gamePlaying) {
   
    scores[activePlayer] += roundScore;
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
var input = document.querySelector('.final-score').value;
var winningScore;
if (input) {
    winningScore = input;
} else {winningScore = 100}

if(scores[activePlayer] >= winningScore) {
    document.querySelector('#name-' + activePlayer).textContent = ' WINNER!!!';  
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
    document.querySelector('.player-' +activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');
    
    gamePlaying = false;
    // alert('PLAYER ONE IS THE WINNER') 
} else {
    nextPlayer();
}
}


 


})



function nextPlayer() {
    // activePlayer ===0 ? activePlayer=1 : activePlayer =0 ;
    if (activePlayer===0) {
        activePlayer=1;
    } else 
    {    activePlayer=0
    } 
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
     document.getElementById('dice-1').style.display='none';
     document.getElementById('dice-2').style.display='none';
    // return activePlayer
}

document.querySelector('.btn-new').addEventListener('click',init)


function init() {
    // var audio = new Audio('khalid.mp3');
    //         audio.play();
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
 document.getElementById('score-0').textContent = '0';
 document.getElementById('score-1').textContent = '0';
 document.getElementById('current-0').textContent = '0';
 document.getElementById('current-1').textContent = '0';
//  

 document.querySelector('#name-0').textContent ='Player 1';  
 document.querySelector('#name-1').textContent ='PLayer 2';  
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.add('active');
}

