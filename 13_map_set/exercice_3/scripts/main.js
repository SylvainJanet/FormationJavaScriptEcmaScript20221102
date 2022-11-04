/*
3) Black jack simplifié. Créer une map où les 
clés sont les cartes et les valeurs sont leur valeur en nombre de points.
Faire piocher une carte au joueur, lui proposer de 
continuer ou s'arrêter. Lorsqu'il s'arrête, lui donner 
son score. Si il dépasse les 21, il a perdu et a un 
score de 0.
*/

(function() {

  let values = new Map([
    ["2",2],
    ["3",3],
    ["4",4],
    ["5",5],
    ["6",6],
    ["7",7],
    ["8",8],
    ["9",9],
    ["10",10],
    ["Jack",10],
    ["Queen",10],
    ["King",10],
    ["Ace",10],
  ]);

  let cartValues = new Map();
  for (let suit of ["hearts","spades","clubs","diamonds"]) {
    for (let rank of values.keys()) {
      cartValues.set(rank + " of " + suit,values.get(rank));
    }
  }

  let listeCartes =  [...cartValues.keys()];

  function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * (maxIndex + 1));
  }

  function pickAtRandom(array) {
    let randomIndex = getRandomIndex(array.length - 1);
    return [randomIndex, array[randomIndex]];
  }

  score = 0;
  while (true) {
    let [index,carte] = pickAtRandom(listeCartes);
    listeCartes.splice(index,1);
    score += cartValues.get(carte);
    alert(`Your card : ${carte}`);
    if (score > 21) {
      score = 0;
      break;
    }
    if (!confirm(`Your score : ${score} - take another ?`)) {
      break;
    }
  }
  alert(`Game over ! Your final score : ${score}`);

})();