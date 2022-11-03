// alert("Coucou !"); // permet d'afficher un message passé en paramètres

/*
Les fonctions : des bouts codes réutilisables, simples, facile à identifier

On a déjà utilisé : prompt(), confirm(), console.log(), alert()

- elles ont nom qui permettent de déterminer à quoi elles servent
- on a pas besoin de savoir comment elles sont codées, juste de savoir comment on les utilise

rôle des fonctions :
1) éviter de répéter de la logique de code, on peut factoriser des comportements dans une fonction
2) on peut décomposer un problème complexe en un ensemble de problèmes plus simples, et résoudre chaque problème simple par
une fonction. Le code de chaque fonction est plus lisible, et plus facile à coder.
*/

// on va déclarer nos propres fonctions :
// function nomDeLaFonction() { ... traitement}

function sayHello() { // signature de la fonction
  // corps de la fonction : le traitement effectué par la fonction
  console.log("Hello !");
}

// sayHello; // fait référence à la fonction en tant qu'objet
sayHello(); // exécute la fonction avec les paramètres spécifiés (ici aucun)
sayHello();
sayHello();

function direBonjour(prenom) {
  console.log(`Bonjour ${prenom}`);
}

direBonjour("Damien");
direBonjour("Kévin");
direBonjour(true);

// une fonction peut renvoyer une valeur
// comme prompt, qui renvoie ce que l'utilisateur a écrit
// ou confirm, qui renvoie un booléen représentant le choix utilisateur

function carre(nombre) {
  let resultat = nombre ** 2;
  // ... traitement ...
  return resultat;
  // return : quitte la fonction et renvoie le résultat
  // console.log("Ce code est ignoré !");
}

// utilisation
// let nombre = +prompt("Donne moi un nombre");
let nombre = 4;
let nombreAuCarre = carre(nombre);
console.log(`${nombre} ** 2 = ${nombreAuCarre}`);

console.log("_____");

// paramètres par défaut :
// vérification manuelle
function multiplier(a,b) {
  let realB = (typeof b == "undefined") ? 1 : b;
  console.log(a);
  console.log(realB); 
}

multiplier(5);
multiplier(5,6);

console.log("_____");

// on peut utiliser les paramètres par défaut :
function newMultiplier(a, b = 1) {
  return a * b;   
}

console.log(newMultiplier(5));
console.log(newMultiplier(5,4));


console.log("_____");

// une fonction peut renvoyer plusieurs valeurs

function calcul(x,y) {
  let somme = x + y;
  let produit = x * y;
  return [somme, produit];
}

let res = calcul(5,6);
console.log(res);

let sum, prod; // on peut déclarer plusieurs variables d'un coup sans leur donner de valeur
console.log(sum);
console.log(prod);
[sum, prod] = calcul(7,3)
console.log(`7+3 = ${sum} \t 7*3 = ${prod}`);

console.log("_____");

/* RestParams
console.log() peut prendre autant d'arguments qu'on le souhaite
*/

function restParams(maVar, monAutreVar, ...leReste) {
  console.log(`maVar : ${maVar}`);
  console.log(`monAutreVar : ${monAutreVar}`);
  console.log(`leReste : ${leReste}`);
}

restParams(1,2);

console.log("_____");

restParams(1,2,3);

console.log("_____");

restParams(1,2,3,4,5,6);

console.log("_____ Les expressions de fonction _____");

/*
Une expression de fonction est une fonction anonyme déclarée dans une variable
*/

let multiplication = function (x,y) {
  return x * y;
}

console.log(multiplication(6,8));

// Déclaration de fonction
fonctionDeclaree();

function fonctionDeclaree() {
  console.log("Ceci est une fonction déclarée");
}

fonctionDeclaree();

// 1ère différence : en utilisant une expression de fonction, on peut choisir l'accessibilité (let ou var)
// 2ème différence : 

// fonctionExpression(); // main.js:144 Uncaught ReferenceError: Cannot access 'fonctionExpression' before initialization
// at main.js:144:1
let fonctionExpression = function() {
  console.log("Ceci est une fonction par expression");
}

console.log("_____ Les fonctions immédiatement invoquées _____");

/*
Les IIFE (Immediately Invoked Function Expression) sont des fonctions appelées immédiatement après leur création
*/

(function () {
  let message = "Execution immédiate de la fonction";
  console.log(message);
})();

(function (texte) {
  console.log(texte);
})("Coucou");

let resultatIife = (function () {
  return "Valeur renvoyée par l'IIFE";
})()
console.log(resultatIife);

/* 
Le Javascript est souvent construit comme ça pour plusieurs raison mais principalement pour l'organisation et la sécurité

Cela nous permet d'avoir des variables qui ne sont pas accessibles depuis les autres parties du code, ou depuis des scripts externes
qui pourraient interférer notre code.

Une IIFE ne va être exécute qu'une seule fois, on ne peut pas accéder à la fonction depuis autre part, ni aux éléments définis
à l'intérieur du corps de la fonction.
*/

console.log("_____ Les closures _____");

/*

L'idée d'une closure / d'une fermeture : une fonction peut être imbriquée dans une autre fonction.
Une fonction peut être le résultat d'une fonction, peut être une variable temporaire utilisée lors du traitement...

*/

function afficherMessage(login, password) {
  
  let messageSecret = "Confidentiel";
  let messageErreur = "Login ou mot de passe incorrect";

  // function check(log, mdp) {
  //   // traitement simplifié : on vérifie à la main
  //   // en réalité on devrait demander à une API
  //   return log === "Admin" && mdp === "root"; // /!\ pas un bon password
  // }

  // if (check(login, password)) {
  //   console.log(messageSecret);
  // } else {
  //   console.log(messageErreur);
  // }

  // on aurait pu directement faire les choses comme ça :
  function check() {
    // la fonction check a accès aux paramètres login et password

    // traitement simplifié : on vérifie à la main
    // en réalité on devrait demander à une API
    return login === "Admin" && password === "root"; // /!\ pas un bon password
  }

  if (check()) {
    console.log(messageSecret);
  } else {
    console.log(messageErreur);
  }

}

afficherMessage("Test","1234");
afficherMessage("Admin","1234");
afficherMessage("Admin","root");

console.log("_____");

// On peut non seulement déclarer des fonctions dans le corps d'une autre fonction, mais on peut également renvoyer une fonction

function creerFonction() {
  let message = "Coucou";
  function salut() {
    console.log(message);
  }

  return salut; // renvoie la fonction
  // return salut(); // renvoie le résultat de la fonction : ce n'est pas ce qu'on souhaite ici
}

let fonctionCree = creerFonction();

console.log(fonctionCree);
fonctionCree();


function ajouterA(x) {
  function resultat(y) {
    return x + y;
  }
  return resultat;
}

let ajouter5 = ajouterA(5);
// ajouter5 est une fonction qui permet d'ajouter 5 à des nombres
let ajouter10 = ajouterA(10);

nombre = 123;

console.log(`ajout de 5 à ${nombre} : ${ajouter5(nombre)}`);
console.log(`ajout de 10 à ${nombre} : ${ajouter10(nombre)}`);

console.log("_____ Les fonctions fléchées _____");
// Une foncion fléchée est une syntaxe plus concise pour définir une fonction anonyme

let cube = function (x) {
  return x ** 3;
}

// on peut écrire
cube = (x) => {x ** 3};

// on peut négliger les { } si il n'y a qu'une seule instruction
// on peut négliger les parenthèses () si il n'y qu'un seul paramètre
cube = x => x ** 3;

// cadre d'utilisation : on va avoir des fonctions qui utilisent des fonctions en paramètres
// ici, appliquerUnTraitement illustre ces cas d'utilisations

function appliquerUnTraitement(nombre, fonctionAUtiliser) {
  let result = fonctionAUtiliser(nombre);
  return result;
}

// deux manières de faire : 

let puissance4 = function (x) {
  return x ** 4;
}

nombre = 2;

result = appliquerUnTraitement(nombre, puissance4);
console.log(result);

// avec une fonction fléchée :

result = appliquerUnTraitement(2, x => x ** 4);
console.log(result);