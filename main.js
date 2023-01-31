// Model - dataene våre (let, const)

// View - det vi ser/html

updateView();
function updateView() {
  let html = /*HTML*/ `
  <div id="bildeKontainer" class="bildeKontainer">
  <img  id="kaninBilde" class="kaninBilde" src="img/kanin.jpeg" alt="">
  </div>
   
    `;

  document.getElementById("app").innerHTML = html;
}

// Controller - det som endrer på dataene våre (funskjoner)

/*
Lage en funksjon pr. ting man gjør med kjæledyret. f.eks. clean, play, feed.

Lage en funksjon for gameover, kjører hvis enten clean, play eller feed = 0
*/
