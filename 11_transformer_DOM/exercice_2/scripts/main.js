/*
2) Reprendre l'exercice 2 du DOM, mais le modifier légèrement : lorsque l'utilisateur
clique sur un bouton, on lui demande combien de noms il veut écrire et ensuite on lui demande
des noms qu'on met dans une <ul></ul>. Ajouter un bouton "trier" qui trie les noms
par ordre alphabétique.
*/

(function() {

  function askForNumber(message) {
    let choice;
    do {
      choice = +prompt(message);
    } while (isNaN(choice));
    return choice;
  }
  
  function askForPositiveNumber(message) {
    let choice;
    do {
      choice = askForNumber(message);
    } while (choice <= 0);
    return choice;
  }

  function getNames(nbr) {
    let names = [];
    for (let i = 0; i<nbr ; i++) {
      names.push(prompt("Donnez un nom"));
    }
    return names;
  }
  
  function createliWithName(name) {
    let liElt = document.createElement("li");
    liElt.innerText = name;
    return liElt
  }

  let nbrNames = askForPositiveNumber("Combien de noms voulez vous ajouter ?")
  let names = getNames(nbrNames);
  let ulElt = document.getElementById("friends");
  for (let name of names) {
    ulElt.appendChild(createliWithName(name));
  }

  let button = document.getElementById("sortUl");
  button.addEventListener("click", () => {
    names.sort();
    // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    ulElt.innerHTML = "";
    for (let name of names) {
      ulElt.appendChild(createliWithName(name));
    }
  })
})();