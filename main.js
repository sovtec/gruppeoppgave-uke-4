// Model - dataene våre (let, const)

let hunger = 100;
let cleanliness = 100;
let mood = 100;
let myInterval = setInterval(subtractOne, 200);
let game = 'running';

// View - det vi ser/html

updateView();
function updateView() {
  let html = /*HTML*/ `
  <div id="bildeKontainer" class="bildeKontainer">
  <img id="kaninBilde" class="kaninBilde" src="img/kanin.jpeg" alt="kaninbilde">
  </div>
  <div id="progressBarKontainer" class="progressBarKontainer">
  <div>
  <progress id="feedingBar" class="feedingBar" value='${hunger}' max="100"></progress> <br>
  <button class='knapp' onclick="feed()">feed da wabbit</button> 
  </div>
  <div>
  <progress id="cleaningBar" class="cleaningBar"value='${cleanliness}' max="100"></progress> <br>
  <button class='knapp' onclick="clean()">clean da wabbit</button>
  </div>
  <div>
  <progress id="moodBar" class="moodBar"value='${mood}' max="100"></progress> <br>
  <button class='knapp' onclick="play()">play with da wabbit</button>
  </div>
  </div>
   
    `;

  document.getElementById("app").innerHTML = html;
}

// Controller - det som endrer på dataene våre (funksjoner)

/*
Lage en funksjon pr. ting man gjør med kjæledyret. f.eks. clean, play, feed.

Lage en funksjon for gameover, kjører hvis enten clean, play eller feed = 0

Lage en funskjon for at kjæledyr-verdiene skal gå nedover
*/



function feed() {
  hunger = hunger + 10;
  if (hunger > 100) {
    hunger = 100;
  }
  updateView();
}

function clean() {
  cleanliness = cleanliness + 10;
  if (cleanliness > 100) {
    cleanliness = 100;
  }
  updateView();
}

function play() {
  mood = mood + 10;
  if (mood > 100) {
    mood = 100;
  }
  updateView();
}

function subtractOne() {
  cleanliness--;
  hunger--;
  mood--;
  gameOver();
  updateView();
}

function gameOver() {
  if (cleanliness == 0 || hunger == 0 || mood == 0) {
    clearInterval(myInterval);
    game = 'over'
    console.log("heihei")
  }
  updateView();
}



