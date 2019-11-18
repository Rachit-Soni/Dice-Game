var scores, roundScore, activePlayer, gamePlaying;

init();


document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
      //1. Random Number
      // var dice = Math.floor(Math.random() * 6) + 1;
      var dice = Math.ceil(Math.random() * 6);
      //2. Display the dice
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';                      //showing the dice using blick property of CSS
      diceDOM.src = 'dice-' + dice + '.png';               //Selecting the right dice from the list of images

      //3. Update the Round Score if the rolled dice value is NOT 1
      if(dice !== 1)
      {
        //Add Score
        //roundScore = roundScore + dice
        roundScore += dice;
        document.querySelector('#current-' +activePlayer).textContent = roundScore;
      }
      else {
              nextPlayer();
      }
    }


});


  document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying){


          //1. Add Score to GLOBAL Score
            scores[activePlayer] += roundScore;

          //2. UPDATE THE UI
          document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

          //3. Check if player won that game
          if(scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' +activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-' +activePlayer +'-panel').classList.remove('active');
            gamePlaying = false;
          }
          else
          {
            nextPlayer();
          }

    }


  });




  //Next Player's Turn
function nextPlayer()
{

  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');     //to toggle active panels
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';               // to remove the dice when any player hits 1 as the gameplayer is changed

}

//New Game Button
  document.querySelector('.btn-new').addEventListener('click', init);


function init()
{
  gamePlaying = true;
  scores = [0,0]
  roundScore = 0;
  activePlayer = 0;

  document.querySelector('.dice').style.display = 'none';  //for hiding the Dice

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');





}
















//Two Ways of writing/adding/changing HTML content via jS,  SETTER METHODS
//document.querySelector('#current-' +activePlayer).textContent = dice;  // method to add just text, not HTML
//document.querySelector('#current-' +activePlayer).innerHTML = '<em>' + dice + '</em>';  //method to add HTML


//reading from HTML
//
// var x = document.querySelector('#score-0').textContent;  // GETTER METHODS
// console.log(x);



//Callabck function - a function that is called by another function, function passed into another function as an argument
//anonymous function - a non reusable function that does not have a name
// example -
// document.querySelector('.btn-roll').addEventListener('click', function(){
// //Do Something
// });
