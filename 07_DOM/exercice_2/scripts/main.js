/*
2) Demander à l'utilisateur 3 noms, et les afficher dans une liste <ul></ul>.
*/

(function() {

  function getNames() {
    let names = [];
    for (let i = 0; i<3 ; i++) {
      names.push(prompt("Donnez un nom"));
    }
    return names;
  }
  
  function getLi() {
    let ulElt = document.getElementById("friends");
    return ulElt.querySelectorAll("li");
  }

  let names = getNames();
  let liElts = getLi();
  for (let [index,li] of liElts.entries()) {
    li.innerText = names[index];
  }
})();