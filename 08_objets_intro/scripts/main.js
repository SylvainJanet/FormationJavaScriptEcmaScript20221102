console.log("_____ Création d'objets littéraux _____");

let monPc = new Object();
monPc.marque = "DELL";
monPc.clavier = "azerty";
monPc.prix = 1000;
monPc.allumer = () => console.log("... Pc allumé");

console.log("mon pc :", monPc);
monPc.allumer();
console.log("la marque de mon pc :",monPc.marque);


let maVoiture = {
  modele:"megane",
  couleur:"bleue",
  kilometrage:3595,
}

console.log("ma voiture :",maVoiture);
console.log("son modèle :",maVoiture.modele);

// property shorthand

let nom = "Doe";
let prenom = "John";
let email = "johnDoe@gmail.com";

let user = {
  firstName:prenom,
  lastName:nom,
  // email:email, // à gauche : le nom de la propriété
  // à droite : une variable qui contient la valeur qu'on souhaite donner à la propriété
  // un peu la même distinction qu'en C# avec this.truc = truc
  // quand les deux sont les mêmes, on peut écrire les choses comme ça :
  email,
}

console.log(`mon user : ${user.firstName} - ${user.lastName} - ${user.email}`);

console.log("_____");

/* une méthode n'est rien d'autre qu'un attribut qui est une fonction */

function direBonjour() {
  console.log("Salut !");
}

utilisateur = {
  nom,
  prenom,
  saluer:direBonjour
}

utilisateur.saluer();

console.log("_____");

utilisateur = {
  nom,
  prenom,
  saluer:() => console.log("Salut !"),
}

utilisateur.saluer();

console.log("_____");

// Utilisation de la méthode Object.create()
// elle permet de définir un objet en utilisant le prototype d'un autre objet.

// le prototype décrit la structure d'un objet : quelles sont ses propriétés (et ses méthodes)

let animal = {
  type:"Invertébré",
  afficherType: function () {
    console.log(this.type); // lorsqu'on définit un objet, le mot clé this représent l'objet lui même
  }
}

console.log(animal);
animal.afficherType();

console.log("_____");

let salmon = Object.create(animal); // le prototype de poisson est animal
salmon.type = "poisson";
salmon.espece = "saumon";
salmon.nager = () => console.log("Le saumon nage...");

console.log(salmon);
salmon.afficherType();
salmon.nager();
console.log(`espece : ${salmon.espece}`);

console.log("_____ Avec constructeur _____");

/* Un constructeur est une fonction qui permet de définir le type de l'objet.
La convention est d'utiliser le PascalCase pour nommer les constructeurs
*/

function TelephonePortable(marque, prix) {
  this.marque = marque;
  this.prix = prix;

  this.display = function () {
    console.log(`Téléphone de marque ${this.marque} : ${this.prix} €`);
  }
}

/*
On peut créé des instances avec le mot clé new
*/

let myPhone = new TelephonePortable("iPhone",1500);
console.log(myPhone);
myPhone.display();

console.log("_____");

/*
Object.assign() : méthode qui permet de copier toutes d'un objet dans un autre
create : créé une instance avec pour prototype un objet donné
assign : ajoute/met à jour le prototype d'un objet avec les propriétés d'un objet donné
*/

let cible = {
  a:1,
  b:2,
}

let source = {
  b:4,
  c:5,
}

let resultat = Object.assign(cible,source);
console.log(resultat);

console.log("_____");

// Boucler sur les propriétés d'un objet

let myObject = {
  a:1,
  b:2,
  c:3,
  d:4,
}

console.log("for ... in ...");

for (let el in myObject) {
  console.log("_____");
  console.log(el);
  console.log(myObject[el]);
}

// for (let el of myObject) {
//   // main.js:159 Uncaught TypeError: myObject is not iterable
//   // at main.js:159:16
//   console.log("_____");
//   console.log(el);
//   console.log(myObject[el]);
// }

console.log("_____ Passage par valeur, ou par référence _____");

/*
Passage par valeur, ou par référence

Les types primitifs ne sont pas mutables, et ils sont passé à la fonction par valeur : une copie de la valeur est
envoyée à la fonction.
Si vous manipulez un paramètre d'une fonction qui est de type primitif, vous manipulez une copie :
la variable initiale n'est pas modifiée.

Les objets sont mutables, et ils sont passés à la fonction par référence. On copie l'adresse mémoire de l'objet et c'est 
ça qu'on envoie à la fonction. Si on manipule un paramète dans une fonction qui est de type objet, on manipule l'objet initial.
*/

let nombre = 5;

function ajouter(x) {
  x += 5;
  // x = x + 5;
}

console.log(nombre);
ajouter(nombre);
console.log(nombre);

user = {
  nom:"Joe",
  age:45,
}

function bonAnniversaire(personne) {
  console.log(`Bon anniversaire ${personne.nom}`);
  personne.age += 1;
}

console.log(user);
bonAnniversaire(user)
console.log(user);


user = {
  nom:"Joe",
  age:45,
}

function bonNonAnniversaire(personne) {
  console.log(`Bon non anniversaire ${personne.nom}`);
  personne = "autre chose, le paramètre local personne est modifié";
}

console.log(user);
bonNonAnniversaire(user)
console.log(user);