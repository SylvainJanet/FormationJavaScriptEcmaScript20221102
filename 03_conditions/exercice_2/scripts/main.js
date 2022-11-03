/*
2) Demander à l'utilisateur un nombre. Afficher si ce nombre est pair ou impair
dans une boîte de dialogue.
*/

let number = +prompt("Merci d'entrer un nombre");
let testPair = number % 2 === 0;
if (testPair) {
  console.log(`${number} est un nombre pair`);
} else {
  console.log(`${number} est un nombre impair`);
}
