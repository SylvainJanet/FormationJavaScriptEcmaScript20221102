// ceci est commentaire
// on doit // au début de chaque ligne

/* début de zone de commentaire

mon commentaire

fin de zone de commentaire */

console.log("Hello world");

console.log("_____ Déclaration de variables _____");

// une variable est une zone mémoire dans laquelle on peut stocker une valeur
// Javascript est un langage typé : les variables ont des types

// 3 mots clés pour définir des variables : 
// let, var, const
// let, var : on verra la différence plus tard, mais permet de déclarer une variable
// dont le contenu va pouvoir être modifié
// const : permet de déclarer une constante

let nom = "Dammane";
var prenom = "Soukaina";
const INTITULE_FORMATION = "Javascript/ECMAScript"; // on ne peut pas changer la valeur

console.log("Prénom",prenom)
// console.log peut prendre plusieurs paramètres, séparés par des virgules : rajoute des espaces entre les différents arguments

// INTITULE_FORMATION = "Autre chose"; // main.js:30 Uncaught TypeError: Assignment to constant variable.
// at main.js:30:11

/*
Règles concernant le nommage des variables :
Il y a des restrictions : les caractères (0-9,a-z,A-Z) et le underscore ( _ )

- n'utilisez pas d'autres caractères : problèmes potentiels d'encodage
- n'utilisez pas le _ comme premier caractère : cela a un sens particulier pour signifier quelque chose, il peut y avoir confusion
- pas de chiffre au début de variable
- une variable ne peut pas avoir pour nom un mot clé JS

- une variable doit avoir un nom intuitif, compréhensible : éviter les noms trop courts (une seule lettre, une abréviation) ou
trop longs
- nom sensible à la casse : Nom, nom, NOM sont 3 variables différentes
- une convention en terme de case
camelCase
Les constantes sont écrites en SNAKE_CASE_MAJUSCULE
*/

/*

En JS, le type d'une variable est implicite : on a pas eu besoin de spécifier un type lors de la déclaration d'une variable

On a plusieurs type
Les types primitifs :
- chaînes de caractères
- number
- booléens
- null (ne représente rien)
- undefined (non défini)
- d'autres types primitifs qu'on ne croisera pas :
BigInt : 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures#le_type_bigint
Symbol :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures#le_type_symbole
Les types objets : on verra plus tard

*/

let x = 3;
console.log(typeof x); // number

// let x = 3.5; // Impossible de redéclarer la variable de portée de bloc 'x'.
x = "texte";
console.log(typeof x);
// Le typage est dynamique : une variable peut changer de type au cours du script

let y = true; // true ou false
console.log(y);
console.log(typeof y);

console.log("_____ Portée des variables _____");

// la portée d'une variable, c'est son accessibilité : à quel endroit dans le code on peut y faire référence

// on va voir qu'il existe des sections de code entourés par des accolades { } qui vont avoir du sens.
// Leur contenu correspond à une zone de code

console.log("Var : ");

var maVar = 5;
console.log(maVar);

{
  console.log(maVar);
  maVar = 7;
  console.log(maVar);
}

console.log(maVar);

console.log("______")

{ 
  var autreVar = 4; // var déclare une variable au niveau global : elle est accessible partout
  console.log(autreVar);
}
console.log(autreVar);
autreVar = 9;
console.log(autreVar);

console.log("_____");

console.log("Let : ")

let maLetVar = 10;
console.log(maLetVar);

{
  console.log(maLetVar);
  maLetVar = 11;
  console.log(maLetVar);
}
console.log(maLetVar);

console.log("_____")

{
  let monAutreLetVar = 96; // une variable déclarée avec let est disponible dans le bloc dans lequel elle a été créé
  // mais pas à l'extérieur
  console.log(monAutreLetVar);
}
// console.log(monAutreLetVar); // main.js:132 Uncaught ReferenceError: monAutreLetVar is not defined
// at main.js:132:13
monAutreLetVar = 19; // on définit une nouvelle variable globale
// si on écrit rien, c'est comme si on écrit var
console.log(monAutreLetVar);

// Les variables globales sont en réalité des propriétés de l'objet global
// Depuis le code JS, l'objet global est window (qu'on pourra manipuler) et donc on peut accéder ou modifier la valeur de variables
// globales en utilisant window.variable

// on peut afficher des messages de différents types dans la console :
console.log("Ceci est du log");
console.debug("Ceci est du debug");
console.warn("Ceci est du warn");
console.error("Ceci est du error");

// raccourci :
// clg + tab : console.log()
