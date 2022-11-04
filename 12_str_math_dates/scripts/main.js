/*
Les objets Strings ont une variété de méthodes

On va en voir certaines : il est impossible de tout
connaître : les propriétés et les méthodes de tous les objets
disponibles.
- on va voir les plus utilisées
- il est important de savoir se repérer dans la documentation,
chercher avec l'IDE ce qui est disponible sur un objet, 
ou se renseigner sur le net.
*/

// des méthodes relatives à la recherche de caractères
// charAt
let chaine = "Ma chaîne de caractères";
let char = chaine.charAt(5);
console.log(chaine);
console.log(char);

// méthodes de recherche de sous-chaîne
let indexFound = chaine.indexOf("de cara");
console.log(indexFound);

// startsWith, endsWith : permet savoir si une chaîne débute ou termine par une
// sous-chaîne
let isValid = chaine.startsWith("Ma");
console.log(isValid);
isValid = chaine.startsWith("autre chose");
console.log(isValid);

// split : découpe une chaine selon un certain delimiteur, et qui renvoie
// un tableau de strings
chaine = "mon.exemple.de.fichier.truc";
let mySplitString = chaine.split(".");
console.log(mySplitString);

// trim : effacer les espaces en début et en fin de chaîne
// toLowerCase, toUpperCase : met en minuscules / en majuscules
let answer = "elephant";
let guess = "Elephant ";
if (guess === answer) {
  console.log("Trouvé avec ===");
} else {
  console.log("Pas trouvé avec ===");
}

// guess.trim().toLowerCase() -> "elephant"
// answer.trim().toLowerCase() -> "elephant"
if (guess.trim().toLowerCase() === answer.trim().toLowerCase()) {
  console.log("Trouvé avec trim et lowercase");
} else {
  console.log("Pas trouvé avec trim et lowercase");
}

// console.log(guess);
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_Expressions
// chaine.match("....")
// Autre manière de conceptualiser les expressions régulières : 
// Les automates (automates finis déterministes)


/*
L'objet Math possède des propriétés et des méthodes pour représenter des constantes
et des fonctions mathématiques
*/

// constantes : e, pi, racine2
// abs : la valeur absolue
// floor, ceil : tronquer / le plafond
// min, max 
// random : nombre aléatoire entre 0 et 1

/*

L'objet Date
JS n'a pas de type primitif pour représenter des Dates
On utilise un objet Date, qui contient des méthodes pour les manipuler.

En définitive, ces dates sont stockées en nombres de millisecondes écoulées
depuis 1er janvier 1970 UTC
L'objet Date permet de représenter des dates à +- 100 000 000 jours (~270 000 ans)

*/

let myDateObject = new Date();

// Je peux mettre différents paramètres :
// Aucun paramètre : la date et l'heure actuelle

console.log(myDateObject);

// On peut aussi utiliser une chaine de caractère :
// avec le format :
// jour, année heures:minutes:secondes
let debutFormation = new Date("September 19, 2022, 9:30:00");
console.log(debutFormation);

// on peut directement mettre les différentes valeurs :
let finFormation = new Date(2022,8,23,17,0,0,0);
console.log(finFormation);
console.log(`aujourd'hui nous sommes ${myDateObject.getDay()}`);

// pour les secondes et les minutes :0 à 59
// pour les heures : 0 à 23
// pour les jours : 0 (dimanche) à 6 (samedi)
// pour les dates : 1 à 31 (jour du mois)
// pour les mois : 0 (janvier) à 11 (décembre)

// la méthode getTime nous renvoie le nombre de millisecondes écoulées
// depuis 1er janvier 1970 à 00:00:00
// utilité : manipuler des durées.

let dureeFormationEnMs = finFormation.getTime() - debutFormation.getTime();
console.log(`Durée de la formation en ms : ${dureeFormationEnMs}`);
let msParJour = 1000 * 60 * 60 * 24;
let joursFormations = dureeFormationEnMs / msParJour;
console.log(`Durée de la formation en jours : ${joursFormations}`);