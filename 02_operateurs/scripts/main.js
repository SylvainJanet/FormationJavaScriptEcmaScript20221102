/*

Une expression est une série d'instructions qui renvoie une valeur et qui peut être par exemple affectée à une variable,
ou être passé en argument à une fonction...

Les opérateurs vont nous permettre de créer des expressions et de manipuler des expressions entre elles.

Il existe différents opérateurs :
- opérateurs arithmétiques : +,-,/,*,%,...
- comparaison : ==, ===, !==, >, ...
- logiques : &&, ||, ...

*/

console.log("_____ Opérateurs arithmétiques _____");

console.log("Addition");

let x = 5;
let y = 7;
let resultat = x + y;

console.log(x, "+", y, "=", resultat);

// le symbole + est également utilisé pour la concaténation de chaînes de caractères

let chaine = "Test" + "De la concaténation";
console.log(chaine);

// la fonction prompt() demande à l'utilisateur de saisir quelque chose et permet de stocker le résultat dans une variable
// let userInput = prompt("Ecrire un nombre");
userInput = "9";
console.log(userInput);
console.log(typeof userInput);

// prompt renvoie toujours une string

console.log("Tentative d'ajouter 5");
resultat = userInput + 5; // conversion implicite en chaîne de caractères et le + est la concaténation
// JS est un langage faiblement typé : ce genre de conversion implicite est possible
console.log(resultat);

// si on souhaite effectivement avoir la somme, il faut bien faire la conversion en number
// il existe des fonctions pour ça 
// parseInt() // l'avantage : on peut préciser la base dans laquelle est écrite le nombre (hexadecimal, binaire, ...)
// parseFloat()

// l'opérateur + unaire qui permet de convertir en nombre :
// en pratique : 

// userInput = +prompt("Ecrire un nombre");
userInput = "14";
console.log(userInput);
console.log(typeof userInput);

// si jamais la conversion échoue, cela nous donne NaN : Not a Number

let nombre = 10;

console.log(nombre);

nombre = nombre + 1; // à gauche : affection de variable
// à droite : expression évaluée pour obtenir la valeur à affecter

console.log(nombre);

nombre += 2; // raccourci pour nombre = nombre + 2

console.log(nombre);

nombre++; // incrémentation de 1
// uniquement de 1 : on ne peut pas faire nombre++2 ou nombre+++

console.log(nombre);

console.log("Soustraction");

x = 8;
y = 5;
resultat = x - y;
console.log(x, "-", y, "=", resultat);

nombre = 9;
console.log(nombre);
nombre = nombre - 3;
console.log(nombre);
nombre -= 2;
console.log(nombre);
nombre--;
console.log(nombre);

console.log("Multiplication");

x = 8;
y = 5;
resultat = x * y;
console.log(x, "*", y, "=", resultat);

nombre = 9;
console.log(nombre);
nombre = nombre * 3;
console.log(nombre);
nombre *= 2;
console.log(nombre);
// nombre** n'existe pas

console.log("Division");

x = 8;
y = 5;
resultat = x / y;
console.log(x, "/", y, "=", resultat);

nombre = 9;
console.log(nombre);
nombre = nombre / 3;
console.log(nombre);
nombre /= 2;
console.log(nombre);
// nombre// n'existe pas

console.log("Modulo");

x = 8;
y = 5;
resultat = x % y;
console.log(x, "%", y, "=", resultat);

nombre = 9;
console.log(nombre);
nombre = nombre % 5;
console.log(nombre);
nombre %= 3;
console.log(nombre);

console.log("_____ Opérateurs de comparaison == === _____");

let n = 5;
let nString = "5";

/*

La question que pose ces opérateurs est : est-ce que les expressions sont égales ?
== : fait une tentative de conversion
=== : ne fait de conversion, les types doivent être les mêmes

*/

console.log(n == nString);
console.log(n === nString);

/*

"différent de"
!= 
!== 

null, Nan, undefined, ... comportements particuliers :

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality

*/

console.log("_____ Opérateurs logiques _____");

let age = 15;

console.log("OU logique");

console.log(age < 18 || age > 80);
// || : ou inclusif : l'un ou l'autre ou les deux
// ^ : ou exclusif : l'un ou l'autre mais pas les deux

let autorisationParentale = true;
console.log(age < 18 && autorisationParentale);

console.log("_____ Concaténation _____");

let maChaine = "Ceci est un";
maChaine += " test";
console.log(maChaine);

// si on souhaite échapper un caractère : \
maChaine = "Ceci est un \"Test\" <- guillemets\nnouvelle ligne";  
console.log(maChaine);

// littéraux de chaînes : équivalent du @"" en C#
// accent grave ` : alt gr + 7 puis
maChaine = `Je peux
écrire sur plusieurs lignes et insérer une valeur comme cela ${age} <- variable age`;
console.log(maChaine);


console.log("_____ Pré/post incrémentation _____");
// on a aussi la même distinction qu'en C# au niveau de la post-incrémentation et de la pré-incrémentation