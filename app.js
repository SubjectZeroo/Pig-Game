/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// how to create our fundamental game variables
// how to generate a ramdom Number
// how to manipulate the DOMError
// how to read from the DOMError
// how change css styles
// how to set up an event handler;
// what a callback function is;
// what an anonymous function is;
// another wat to select elements by IDBCursor;
// how to cahnge the image an <img> element.
// What the ternary operator is
//how to add remove and toggle html classes

//how to use functions to correctly apply the dry principle

//ho to think about the game logic like a programmer

//what a state is how use

var scores ;
var roundScore ;
var activePlayer ;
var gamePlaying;

initFunction();

var x = document.querySelector('#score-0').textContent;

console.log(x);




// function btn(){
//   //hacer algo
// }
// btn();

document.querySelector('.btn-roll').addEventListener('click', function() {

  if(gamePlaying) {
        // 1 numero ramdom

    var dado = Math.floor(Math.random() * 6) + 1;

    // 2 Mostrar el resultado

    var dadoDom = document.querySelector('.dice');
    dadoDom.style.display = 'block';
    dadoDom.src = 'dice-' + dado + '.png';

    // 3 actualizar el puntaje del round solo si el numero no fue 1
    if(dado !== 1) {
      // agregar score
      roundScore += dado;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      // Siguiente jugador
      nextPlayer();
    }
  }
});




document.querySelector('.btn-hold').addEventListener('click', function() {

  if(gamePlaying) {

    // agregar el puntajo actual al puntaje global

    scores[activePlayer] += roundScore;

    // actualizar la ui

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // ver si el jugador gano el juego
    if (scores[activePlayer] >= 10) {
      document.querySelector('#name-' + activePlayer).textContent = 'Ganador';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      //Siguiente jugador
      nextPlayer();
    }

  }
});


function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent= '0';
  document.getElementById('current-1').textContent= '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none';
}

function initFunction() {
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');

}


document.querySelector('.btn-new').addEventListener('click', initFunction);



// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dados + '</em>';
