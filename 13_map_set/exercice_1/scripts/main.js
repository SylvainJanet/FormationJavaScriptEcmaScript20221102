/*
1) Créer une Map avec en clé des noms et en valeur un score. Afficher
dans du HTML les différentes personnes et leur score en créant les différentes
balises via le JS.
*/

(function() {

  let scores = new Map([
    ["Sylvain",2],
    ["Chloé",23],
    ["Marjo",12],
    ["Océane",420],
  ]);

  let div = document.getElementById("resultats");
  let ul = document.createElement("ul");

  div.appendChild(ul);

  for (let [joueur,score] of scores) {
    let li = document.createElement("li");
    ul.appendChild(li);

    let p = document.createElement("p")
    li.appendChild(p);

    p.innerText = joueur + " - " + score;
  }

})();