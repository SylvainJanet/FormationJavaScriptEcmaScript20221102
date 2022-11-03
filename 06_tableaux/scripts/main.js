/*
Les tableaux sont des collections d'éléments.
Ce sont des objets.
*/

console.log("_____ Déclaration d'un tableau _____");

let nombres = new Array(11,222,33,47,50);
console.log(nombres);

let numbers = new Array(7); // un seul nombre détermine la taille du tableau
console.log(numbers);

// on peut également déclarer des tableaux avec les []
nombres = [117,22,331,470,52];
console.log(nombres);

console.log("_____ Accès aux valeurs d'un tableau _____");

nombres = [117,22,331,470,52];
console.log(nombres);

let firstElement = nombres[0];
let secondElement = nombres[1];

console.log(`premier élément : ${firstElement}`);
console.log(`deuxième élément : ${secondElement}`);

let element = nombres[100];
console.log(`element : ${element}`); // undefined

numbers = new Array(5);
console.log(numbers);
firstElement = numbers[0];
console.log(`premier élément (tableau vide) : ${firstElement}`); // undefined

// Dans un tableau, on peut a priori mettre n'importe quelle valeur, de n'importe quel type

let myArray = ["Salut",5,6,true,[1,2]];
console.log(myArray);

/* Déconseillé : les collections sont à privilégier pour conserver de même nature (pas seulement de même type)
Si on souhaite conserver des éléments de nature différentes, privilégier d'autres structures.

Nuance type/"nature" :
type : chaînes de caractères, booléens, ...
"nature" : ce qu'ils représentent. Si on souhaite conserver des noms et des prénoms, il s'agit de chaînes de caractères mais on
ne va pas forcément faire le même traitement pour les deux.
*/

// Il est possible de faire des tableaux de tableaux, pour représenter une grille, une matrice, ...

console.log("_____ Parcourir un tableau _____");

nombres = [20,97,45,32];
console.log(nombres);

console.log("for");
for (let i=0 ; i < nombres.length ; i++) {
  console.log(nombres[i]);
}

console.log("for ... of");
for (let nbr of nombres) {
  console.log(nbr);
}

console.log("forEach");
// on fait une opération sur tous les éléments
nombres.forEach(e => console.log(e));
nombres.forEach((e,i) => console.log(`element d'indice ${i} : ${e}`));

console.log("for avec indice");
for (let x of nombres.entries()){
  console.log(x);
}

console.log("_____");

for (let [index, el] of nombres.entries()){
  console.log(`element d'indice ${index} : ${el}`);
}

console.log("_____ Manipulation d'un tableau _____");

let prenoms = ["Samir","Soukaina", "Vanessa","Anas","Benjamin"];

console.log(prenoms);

// ajouter un élément à la fin du tableau
prenoms.push("Amine");
console.log(prenoms);

console.log("_____");

/*
On a les types primitifs : string, boolean, number, ....
On a les types objets : par exemple les tableaux

Ils se comportent de manière différentes :
- les types primitifs sont non mutables / immuables : l'espace mémoire reservé pour les contenir ne peut pas être modifié.
On ne fonctionne qu'en faisant des copies (éventuellement modifiées) des valeurs
maChaine.kekchose() : ne modifie pas maChaine, mais ça renvoie une copie modifiée
maChaine = maChaine.kekchose() : réaffecte la variable maChaine, qui prend donc la valeur modifiée
-les types objets sont mutables : on peut les modifier
myArray.kekchose() : modifie le tableau myArray
myArray = myArray.kekchose() : dépend des cas, mais myArray ne devient pas le tableau transformé par kekchose
*/

let maChaine = "test";
console.log(maChaine);

maChaine.toUpperCase();
console.log(maChaine);

maChaine = maChaine.toUpperCase();
console.log(maChaine);

myArray = [1,2,3];
console.log(myArray);

myArray.push(9);
console.log(myArray);

myArray = myArray.push(9);
console.log(myArray);

console.log("_____");

// supprimer le dernier élément du tableau

console.log(prenoms);
prenoms.pop();
console.log(prenoms);

// il existe d'autres méthodes : splice, slice, shift, reverse, sort, ...

console.log("_____");
// split
let phrase = "Ceci est une phrase";

let splitPhrase = phrase.split(" "); // renvoie un tableau de strings :
// ["Ceci","est","une","phrase"]

console.log(splitPhrase);

// il est tout à fait possible d'enchainer les méthodes, en utilisant des fonctions fléchées si besoin

// objectif : avoir un tableau qui contient les mots en majuscules :

"Hello world" .split(" ")
              .forEach(mot => console.log(mot.toUpperCase()));

let splitString = "Hello world".split(" ");
for (let i = 0; i < splitString.length ; i++) {
  console.log(splitString[i].toUpperCase());
}

console.log("_____ Affectation par décomposition _____");
myArray = [10,22,31,40];

// au lieu de faire 
// let myInt1 = myArray[0];
// let myInt2 = myArray[1];
// let myInt3 = myArray[2];
// let myInt4 = myArray[3];
// on peut faire :
[myInt1, myInt2, myInt3, myInt4] = myArray
console.log(myInt1);
console.log(myInt2);
console.log(myInt3);
console.log(myInt4);


/* RestParams
console.log() peut prendre autant d'arguments qu'on le souhaite
*/

function restParams(maVar, monAutreVar, ...leReste) {
  // ... est l'opération rest
  // prend un ensemble de valeurs et les convertis en tableau
  console.log(`maVar : ${maVar}`);
  console.log(`monAutreVar : ${monAutreVar}`);
  console.log(`leReste : ${leReste}`); // toujours un tableau
  console.log(leReste);
}

restParams(1,2);

console.log("_____");

restParams(1,2,3);

console.log("_____");

restParams(1,2,3,4,5,6);


console.log("_____");

// ... peut être utilisé comme symbole pour l'opération rest
// ou pour l'opération spread qui fait l'inverse :
// prend un tableau et le converti en ensemble de valeurs

myArray = [1,2,3];
let myOtherArray = [4,5].concat(myArray); // plus performant : exemple juste pour illustrer l'opérateur spread
console.log(myOtherArray);

myOtherArray = [4,5,myArray];
console.log(myOtherArray);

myOtherArray = [4,5,...myArray];
console.log(myOtherArray);

console.log("Autre exemple rest VS spread");

function afficherTout(...params) {
  // ... opérateur rest
  // params est un tableau
  for ([index, el] of params.entries()) {
    console.log(`indice : ${index} - element ${el}`);
  }
}

afficherTout(15,26,33,44);

console.log("sans spread");

myArray = [15,26,33,44];
afficherTout(myArray);

console.log("avec spread");

afficherTout(...myArray);