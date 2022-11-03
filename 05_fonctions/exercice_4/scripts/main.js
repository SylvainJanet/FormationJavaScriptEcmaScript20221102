/*
4) Faire une fonction qui permet de faire des fermetures qui ajoutent une chaîne
de caractères entre deux chaînes de caractères.

Objectif : coder insererDansTexte pour que le code suivant fonctionne :
let messageAcceuil = insererDansTexte("Bonjour "," et bienvenue !")
let messageAuRevoir = insererDansTexte("Au revoir ", " il est bien triste que tu t'en ailles !")

console.log(messageAccueil("Truc"))
-> Bonjour Truc et bienvenue !
console.log(messageAuRevoir("Truc"))
-> Au revoir Truc il est bien triste que tu t'en ailles !
*/

// function insererDansTexte(debut, fin) {
//   function resultat(prenom) {
//     return debut + prenom + fin;
//   }
//   return resultat;
// }

// function insererDansTexte(debut, fin) {
//   return function (prenom) {
//     return debut + prenom + fin;
//   }
// }

function insererDansTexte(debut, fin) {
  return prenom => debut + prenom + fin;
}

let messageAcceuil = insererDansTexte("Bonjour "," et bienvenue !");
let messageAuRevoir = insererDansTexte("Au revoir ", " il est bien triste que tu t'en ailles !");

console.log(messageAcceuil("Truc"));
console.log(messageAuRevoir("Truc"));

console.log(messageAcceuil("Machin"));
console.log(messageAuRevoir("Machin"));