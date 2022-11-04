/*
On peut récupérer et modifier des attributs d'un élément
*/

let button = document.getElementById("myButton");

let disabled = button.getAttribute("disabled");
console.log("Attribut disabled :");
console.log(disabled);

let userResponse = confirm("Désactiver le bouton ?");
if (userResponse) {
  button.setAttribute("disabled","");
} else {
  button.removeAttribute("disabled");
}

button.setAttribute("name","exempleButton");

/* modification du style d'une balise */

let maDiv = document.getElementById("styleDemo");
maDiv.setAttribute("style","color:red");

// cette méthode n'est pas à privilégier : on remplace tout le contenu de l'attribut
// difficile d'ajouter / supprimer un élément de style en particulier
// pareil pour la modification des classes

maDiv.style.background = 'blue';
// au lieu de
// maDiv.setAttribute("style","background:blue");
// qui fait perdre le color:red

// on peut accéder à et modifier les classes d'un élément

let nomClasse = maDiv.className;
console.log(nomClasse);
let listeClasses = maDiv.classList;
console.log(listeClasses);

// la propriété classList est un objet qui ressemble à un tableau sur lequel on a des méthodes pratiques comme le add, le remove,
// ou le replace

listeClasses.add("nouvelleClasseParLeCode");
listeClasses.remove("demo");