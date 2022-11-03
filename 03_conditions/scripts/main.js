console.log("_____ Les conditions _____");

// un bloc de code pourra être exécute uniquement si un booléen est true

// let userAgree = confirm("On est d'accord ?");
let userAgree = true;

console.log(userAgree);
console.log(typeof userAgree);

if (userAgree) {
  console.log("Super !");
}

// on peut utiliser les mots clé else, else if

// let age = +prompt("Quel âge as-tu ?");
let age = 18;

if (age < 18) {
  console.log("mineur");
} else if (age <= 25) {
  console.log("jeune adulte");
} else {
  console.log("adulte");
}

switch (age) {
  case 5:
    console.log("Que fais tu seul sur un ordinateur ?");
    break;
  case 18:
    console.log("Bienvenue dans le monde des adultes");
    break;
  case 110:
    console.log("Préviens le Guinness book");
    break;
  default:
    console.log("Je n'ai rien de spécial à dire");
    break;
}


// dans le cas où on fait des opérations sur une seule ligne, on peut s'abstenir de mettre les accolades

if (userAgree) 
{
  console.log("Ok !");
}

if (userAgree) 
  console.log("Ok !");

if (userAgree) console.log("Ok !");

console.log("Opérateur ternaire");

if (age < 18) {
  console.log("mineur");
} else {
  console.log("majeur");
}

// opérateur ternaire, comme en C# :
age < 18 ? console.log("mineur") : console.log("majeur");

// à utiliser avec parcimonie