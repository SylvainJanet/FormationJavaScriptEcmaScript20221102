/*
2) Demander à l'utilisateur un nombre différent de 0, en lui redemandant 
éventuellement si il écrit 0.
*/

let userNumber;
do {
  userNumber = +prompt("Merci d'entrer un nombre non nul")
} while (isNaN(userNumber) || userNumber === 0)

console.log(`Le nombre choisi est ${userNumber}`)