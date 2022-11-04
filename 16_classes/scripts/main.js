/*
On a vu dans la partie sur les objets le chaînage de prototype
utilisé lors de la création d'objets par constructeur ou par littéral.

On a vu comment créer un objet qui a les mêmes propriétés qu'un autre en
utilisant la méthode Object.create()
C'est ce qu'on appelle l'héritage. 
Comment faire ce processus sur des objets définis par constructeur ?

C'est possible :
https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

Tout ce qu'on va voir sur les classes peut être fait, et fonctionne en réalité
avec des prototypes. Javascript permet de coder selon différent paradigmes :
une approche fonctionnelle, séquentielle, orientée prototypes, orientée classes...
*/


/*

Les classes permettent de décrire un objet : 
un constructeur : une méthode pour instancier les objets
des propriétés : une manière de décrire les objets
des méthodes : ce qu'on peut faire avec les objets
facilite l'héritage, l'encapsulation, la création de propriétés/méthodes statiques

*/

class MyClass {
  // le mot this fait référence à l'instance, de la même manière
  // que dans un constructeur

  // constructeur :
  constructor() {
    // corps de mon constructeur
  }

  maPropriete = "truc";

  maMethode() {
    // corps de la méthode
    console.log("méthode de mon objet");
  }

}

let monObjet = new MyClass(); // c'est le constructeur qui est appelé
console.log(monObjet);
console.log(monObjet.maPropriete);
monObjet.maMethode();


// propriétés d'instance vs propriétés statiques :
// une propriété d'instance est une propriété qui a une valeur 

monAutreObjet = new MyClass();
monAutreObjet.maPropriete = "autre chose";

console.log(monObjet.maPropriete);
console.log(monAutreObjet.maPropriete);

class Personne {
  constructor(nom,prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }

  presentation() {
    return `Je m'appelle ${this.prenom} ${this.nom}`;
  }

  static planete = "Terre";
  static helloPlanet(planet) {
    return `Salut ${planet}, ici la ${Personne.planete}`;
  }
}

// chaque personne a son propre nom, son propre prenom

// les propriétés statiques sont des propriétés de la classe
// Conceptuellement, les personnes partagent cette propriété

console.log(Personne.planete);

// les méthodes statiques sont des méthodes propres à la classe

console.log(Personne.helloPlanet("lune"));


/* L'équivalent en prototype : 
*/

function Person(nom, prenom) {
  this.nom = nom;
  this.prenom = prenom;
}

Person.prototype.presentation = function() {
  return `Je m'appelle ${this.prenom} ${this.nom}`;
}

Person.planete = "Terre";
Person.helloPlanet = function (planet) {
  return `Salut ${planet}, ici la ${Personne.planete}`;
}



/* 
Encapsulation :
Idée : on souhaite controller les valeurs des propriétés d'un objet
*/

console.log("_____");

class Rectangle {
  constructor(longueur, largeur) {
    this.longueur = longueur;
    this.largeur = largeur;
  }

  surface() {
    return this.longueur * this.largeur;
  }
}

let myRec1 = new Rectangle(10,20);
let myRec2 = new Rectangle(15,25);

console.log(myRec1.surface());
console.log(myRec2.surface());


let myRec3 = new Rectangle(10,-5);
console.log(myRec3.surface());
myRec3.longueur = 3;
console.log(myRec3.surface());

console.log("_____");

// idée : rendre une propriété privée (accessible uniquement depuis la classe)
// et des accesseurs seront responsables de la modifiers, ce seront
// des fonctions qu'on va pouvoir coder.
// On a deux types de contrôle :
// - le contrôle en écriture : les SETTERS
// - le contrôle en lecture : les GETTERS

class RectangleAvecPrive {
  #longueur; // le # rend une propriété privée
  #largeur;
  constructor(longueur, largeur) {
    this.#longueur = longueur;
    this.#largeur = largeur;
  }

  surface() {
    return this.#longueur * this.#largeur;
  }

  getLongueur() {
    return this.#longueur;
  }

  setLongueur(value) {
    if (value <= 0) {
      throw new Error("La longueur ne peut pas être négative");
    }
    this.#longueur = value;
  }

  getLargeur() {
    return this.#largeur;
  }
 
}


let recWithPrivate = new RectangleAvecPrive(10,20);
console.log(recWithPrivate.surface());
// console.log(recWithPrivate.#longueur); // pas possible 
console.log(recWithPrivate.getLongueur());
console.log(recWithPrivate.getLargeur());
// on a pas créé de setter pour la largeur : les valeurs sont en lecture seule.
recWithPrivate.setLongueur(250);
console.log(recWithPrivate.surface());
// recWithPrivate.setLongueur(-12); // Uncaught Error: La longueur ne peut pas être négative

console.log("_____");

// il est possible de faire de l'encapsulation sur les propriétés
// en les rendant accessibles comme des propriétés.

class RectangleGetSet{
  #longueur
  #largeur
  constructor(longueur, largeur) {
    this.#longueur = longueur;
    this.#largeur = largeur;
  }

  // les mots clés get et set permettent de mettre en place le mécanisme
  // de propriétés utilisant des accesseurs

  get longueur() { // le nom du getter est celui de la propriété
    return this.#longueur; 
    // on est pas obligés d'utiliser les variables privés
  }

  // si on ne met pas le set ..., la propriété est en lecture seule
  set longueur(value) {
    this.#longueur = value;
  }

  get largeur() {
    return this.#largeur
  }

  surface() {
    return this.#longueur * this.#largeur;
  }
}

let rec = new RectangleGetSet(1,2);
console.log(rec.longueur);
console.log(rec.largeur);
console.log(rec.surface());
rec.longueur = 10;
rec.largeur = 20;
console.log(rec.longueur);
console.log(rec.largeur);
console.log(rec.surface());

// cette mécanique existe pour les propriétés statiques

// Lien pour le mécanisme d'héritage avec les classes
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript


// Itérateurs, générateurs, itérables
// ne sont rien d'autres que des objets ayant des méthodes particulières
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators