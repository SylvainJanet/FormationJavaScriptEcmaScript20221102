console.log("_____ Boucles _____");

// Même chose qu'en C#
// - les boucles for : lorsqu'on connaît à l'avance le nombre d'itérations
// - les boucles while / do while : lorsqu'on répètes les instructions tant qu'une certaine condition est vraie

// let age = +prompt("Quel âge as-tu ?");
let age = 20;

while (age < 18) {
  console.log("Tu es jeune, attends un peu...");
  console.log("Le temps passe...");
  age++;
}

console.log("Tu es adulte !");

// initialisation ; condition ; modification
for (let i = 0; i < 3; i++) {
  console.log(`Répétition numéro ${i} : "la même chose"`);
}

/*
la boucle while : commence par vérifier la condition, si elle est vraie, elle exécute les commandes, puis reteste la condition...

la boucle do while : commencer par exécuter les commandes, puis vérifie si la condition est vraie, puis répète les commande si elle est vraie...
*/

do {
  console.log("Seul les adultes peuvent suivre cette formation");
  age = +prompt("Tu as quel âge ?");
} while (age < 18);

console.log("_____");

/*
mot clés break / continue
le mot clé break permet de forcer l'arrêt de la boucle
le mot clé continue permet de forcer le passage à l'itération suivante
*/


for (let i = 0 ; i < 10 ; i++) {
  if (i % 3 === 0) {
    continue;
  }
  if (i === 7) {
    break;
  }
  console.log(i);
}

// 1 2 4 5