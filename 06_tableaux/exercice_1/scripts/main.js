/*
1) But : afficher une liste d'amis.
Demander à l'utilisateur combien de prénoms il souhaite ajouter, et lui
demander ensuite le prénom de chacun de des amis. Une fois terminé, lui afficher 
les noms.
*/

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

function askForFriends(nbrOfFriends) {
  let friends = [];
  for (let i = 0 ; i < nbrOfFriends; i++) {
    question = "Please enter a name";
    friends.push(prompt(question));
  }
  return friends;
}

function displayFriends(friends) {
  console.log("Here are your friends : ");
  friends.forEach(f => console.log(f));
}

(function() {
  let nbrOfFriends = askForPositiveNumber("How many friends have you got ?");
  let friends = askForFriends(nbrOfFriends);
  displayFriends(friends);
})();