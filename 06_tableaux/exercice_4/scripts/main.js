/*
4) Modifier la fonction créée en exercice 4 sur les fonctions pour qu'elle permette
de faire des fermetures qui ajoutent une chaîne de caractères dans un message autant
de fois qu'on le souhaite

Objectif : coder insererDansTexte pour que le code suivant fonctionne :
let messageAcceuil = insererDansTexte("Bonjour "," et bienvenue !")
let messageAuRevoir = insererDansTexte("Au revoir ", " il est bien triste que tu t'en ailles ! A bientôt ", " !")

messageAccueil("Truc")
-> Bonjour Truc et bienvenue !
messageAuRevoir("Truc")
-> Au revoir Truc il est bien triste que tu t'en ailles ! A bientôt Truc !
*/

function insererDansTexte(...texts) {
  return function (prenom) {
    if (texts.length === 0)
      return prenom;
    let result = "";
    for (let text of texts.slice(0,-1)) {
      result += text + prenom
    }
    result += texts[texts.length - 1];
    return result;
  }
}

let messageAcceuil = insererDansTexte("Bonjour "," et bienvenue !");
let messageAuRevoir = insererDansTexte("Au revoir ", " il est bien triste que tu t'en ailles ! A bientôt ", " !")
let messagePrenom = insererDansTexte();
let message = insererDansTexte("Coucou");

console.log(messageAcceuil("Truc"));
console.log(messageAuRevoir("Truc"));
console.log(messagePrenom("Truc"));
console.log(message("Truc"));

console.log(messageAcceuil("Machin"));
console.log(messageAuRevoir("Machin"));
console.log(messagePrenom("Machin"));
console.log(message("Machin"));