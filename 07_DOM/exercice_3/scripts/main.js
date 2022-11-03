/*
3) Demander à l'utilisateur un ensemble de notes. Déterminer la moyenne et l'afficher
dans le contenu HTML. 
*/

(function () {
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

  function getNotes(number) {
    let result = [];
    for (let i = 0; i < number; i++) {
      result.push(askForNumber("Note ?"));
    }
    return result;
  }

  function getAverage(liste) {
    return liste.reduce((a, b) => a + b, 0) / liste.length;
  }

  function displayAverage(average) {
    let h1Elt = document.getElementById("title");
    h1Elt.innerText =  `Moyenne : ${average}`;
  }

  let nombre = askForPositiveNumber("Combien de notes ?");
  let notes = getNotes(nombre);
  let moyenne = getAverage(notes);
  displayAverage(moyenne);
  
})();