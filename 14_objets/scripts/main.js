/*

Le JS est basé sur les prototypes : 
un prototype contient l'ensemble des propriétés disponibles sur
un objet.

On a vu que lorsqu'on créé un objet, il détient le prototype
Object.
On a vu qu'en créant un objet en utilisant Object.create(instance)
l'objet créé a pour prototype instance.

On a donc accès a des méthodes ou des propriétés qu'on a pas
défini directement dans le littéral objet ou dans le constructeur,
mais qui sont définies dans le prototype.

On a une chaîne de prototypage :
*/

function Personne(nom,age) {
  this.nom = nom;
  this.age = age;

  this.sePresenter = function() {
    return `Je m'appelle ${this.nom} et j'ai ${this.age} ans`;
  }
}

let quelqun = new Personne("John",45);
console.log(quelqun.sePresenter());
console.log(quelqun.valueOf());
// valueOf est une méthode qui est disponible sur les Object, qui est contenu
// dans le prototype Object.

// JS appelle la méthode valueOf pour convertir un objet en valeur primitive.
// valueOf est utilisé lorsqu'on essaye de comparer des objets à un primitif avec
// ==.
// == : fait de la conversion
// === : ne fait pas de conversion
// https://262.ecma-international.org/5.1/#sec-11.9.3

// lorsqu'on fait quelqun.valueOf(), le navigateur cherche à savoir si
// quelqun implémente la méthode valueOf.
// C'est pas le cas, il va regarder si son prototype le contient, c'est à dire
// si le prototype fournit par le constructeur le contient, c'est toujours pas le cas
// il va donc regarder le prototype de ce prototype, qui est Object, et qui contient
// cette méthode, et il va utiliser celle là.

console.log(quelqun);

/*
Si on reprend Object.create()
*/

let autre = Object.create(quelqun);

// create : créé un nouvel objet à partir d'un prototype.

console.log(autre);
console.log(autre.sePresenter());

autre.nom = "Marie";

console.log(autre);
console.log(autre.sePresenter());

console.log("Afficher prototype");
console.log(autre.__proto__); // vieux et déprécié, ne pas l'utiliser
console.log(Object.getPrototypeOf(autre));

console.log("Prototype et constructeur");
/*
Prototype lors de la création par constructeur

Chaque fonction a un attribut prototype dont la valeur est un objet
qui correspond au prototype défini par le constructeur
*/

console.log(Personne.prototype); // uniquement valable sur les fonctions

/* ce que ça signifie : 
à partir d'un objet, je peux retrouver son constructeur et l'utiliser
utilise si on a un objet mais pas son constructeur
*/

// lorsqu'on créé un objet, on fait 
// variable = new Constructeur(arguments)

let newPersonne = new quelqun.constructor("Créé via quelqu'un",5);
console.log(newPersonne.sePresenter());

// on peut récupérer le nom du constructeur d'un objet
console.log(quelqun.constructor.name);

/*

On peut modifier le prototype 

*/

Personne.prototype.auRevoir = function() {
  alert(`Au revoir ${this.nom} !`)
}

quelqun.auRevoir();

// il est techniquement possible de modifier le prototype Object !
// Object.create = function(x) { alert(`Je create moi même ${x}, t'as tout cassé !`)};
// Object.create(quelqun);
// ce n'est pas une bonne pratique

/*
Lorsqu'on créé un objet par constructeur, la pratique est de séparer
les déclaration de propriétés dans le corps du constructeur, et
de déclarer les méthodes en modifiant le prototype du constructeur
*/

function Test(a,b,c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

Test.prototype.sum = function() {
  return this.a + this.b + this.c;
}

Test.prototype.prod = function() {
  return this.a * this.b * this.c;
}


// analogie avec les littéraux

let myObject = {
  maPropriete:"truc",
  autreChose:1234,
}

let fils = Object.create(myObject);

console.log(fils);

myObject.direBonjour = () => alert("Bonjour");

fils.direBonjour();

// et un objet littéral sera donc plutôt défini de cette manière :
myObject = {
  maPropriete:"truc",
  autreChose:1234,
}
myObject.direBonjour = () => alert("Bonjour");