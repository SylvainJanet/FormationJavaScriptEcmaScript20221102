/*

Les maps : 
elles fonctionnent par association clé/valeur

Un dictionnaire (dans la réalité) on peut voir ça comme 
une association de paires clé/valeur : mot associé à sa définition
- un mot n'apparaît qu'une seule fois dans un dictionnaire

Les maps fonctionnent sur le même principe :
une association entre une clé et une valeur, où les clés
sont uniques.

*/

console.log("_____ Les maps _____");
let maMap = new Map();

let monAutreMap = new Map([
  ["maCle","maValeur"],
  ["autreCle",1235],
]);

console.log(maMap);
console.log(monAutreMap);


maMap.set("newKey",true); // ajouter une paire clé/valeur, ou modifie la 
// valeur associée à la clé si la clé existe déjà
console.log(maMap);

maMap.set("newKey",963);
console.log(maMap);

let value = maMap.get("newKey");
console.log(value);

console.log("_____ Parcourir une map _____");

maMap = new Map([
  ["maCle","maValeur"],
  ["autreCle",1235],
]);

console.log(maMap);

console.log("for sur la map");
for (let [key,value] of maMap) {
  console.log(`key = ${key}`);
  console.log(`value = ${value}`);
}

console.log("for sur les clés");
// utiliser maMap.keys()
for (let key of maMap.keys()){
  console.log(`key = ${key}`);
}

console.log("for sur les values");
// utiliser maMap.values()
for (let key of maMap.values()){
  console.log(`key = ${key}`);
}

// on peut aussi supprimer une paire clé/valeur
maMap.delete("autreCle");
console.log(maMap);

// on peut récupérer la taille d'une map
console.log(maMap.size);

/*
Quelle est la différence entre un objet littéral et une map ?
*/
let myObject = {
  maPropriete:"maValeur",
}

let myOther = {
  maPrioriete:"monAutreValeur",
}

// on peut tout à fait faire un équivalent des méthodes avec des maps
let maFonction = function(message) {console.log(message);}
maMap = new Map([["cle",maFonction]]);
maMap.get("cle")("coucou");

/*
- dans une map, on peut mettre n'importe quel objet ou élément d'un type primitif
en clé
- une map ne contient pas de clé par défaut
un objet a un prototype : Object
Remarque : il serait possible de le faire avec les objets en faisant
Object.create(null) : un objet sans prototype, mais rarement utilisé
- itérer sur les maps : on l'a vu
itérer sur les objets : on a vu for ... in ... object mais c'est tout
- performance : 
map sont optimisées pour l'ajout, la suppression et la modification fréquente
de paires clé/valeurs
*/

console.log("_____ Les ensembles _____");

let monEnsemble = new Set(); // ensemble vide
let ensemble = new Set([5,2,3,4,3,2,1,2,4]); // on créé un ensemble avec des valeurs
console.log(monEnsemble);
console.log(ensemble);

// un ensemble, conceptuellement, c'est un tableau sans possibilité de répéter 
// des éléments

// rappel sur entries()
let monTableau = ["a","b","c","d"];

for (let x of monTableau.entries()){
  console.log(x);
}

ensemble.add(6);
ensemble.add(5);
ensemble.add(5);
ensemble.add(5);

console.log(ensemble);

console.log("Parcourir un ensemble");
for (let el of ensemble) {
  console.log(el);
}

// on peut tester si un ensemble contient une valeur avec
// ensemble.has()


/*
WeakSet(), WeakMap()
*/

let x = "John";
let y = "Marie";

x = "Alphonse";

// "John" n'est plus accessible depuis notre programme
// un ramasse miettes vient régulièrement libérer l'espace mémoire associé
// à des variables qui ne sont plus référencés.

// lorsqu'on met des variables dans une map ou dans un set, les map et les set
// contiennent des références vers les éléments.

// Les WeakSet et WeakMap permettent de faire en sorte de ne pas compter les
// références dans ces Map/Set lors du passage du rammasse miettes : 
// si un élément n'est référencé que par des WeakSet ou des WeakMap, il est
// supprimé