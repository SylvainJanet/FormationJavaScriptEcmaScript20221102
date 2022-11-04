/*
Un élément auquel il faut être attentif :
il y a une distinction entre une Node et un Element
Node comprend aussi les commentaires, le texte
Element correspond à toutes les balises

Dans la plupart des cas, on a besoin des éléments.

A priori, on a pas besoin de firstChild
*/

let maDiv = document.getElementById("exempleDiv");
let child = maDiv.firstChild;
child = maDiv.firstElementChild;

let parent = maDiv.parentNode;
parent = maDiv.parentElement;

// création d'éléments HTML :

let createdDiv = document.createElement("div");
createdDiv.innerText = "Div créée et insérée par le code";

maDiv.appendChild(createdDiv);

/*

appendChild ajoute un noeud en fin de liste des enfants de la node choisie.

Si cet élément existe déjà, il est déplacé en fin de liste : pas besoin de le supprimer

Si vous voulez une copie d'une node (en mémoire, un autre objet dont le contenu est identique)
on peut utiliser la méthode cloneNode()

*/

maDiv.appendChild(createdDiv);

let otherCreatedDiv = createdDiv.cloneNode(true);
maDiv.appendChild(otherCreatedDiv);

let paragraph = document.createElement("p");
paragraph.innerText = "avant-dernier élément inséré";
maDiv.appendChild(paragraph);

maDiv.appendChild(createdDiv);

// Il existe d'autres méthodes pour insérer un élément où on le souhaite

// parent.insertBefore(new_element,element)
// insère un noeud juste avant un élément (un noeud frère juste avant)

// peut aider pour insérer à une position précise
let lastDiv = document.createElement("div");
lastDiv.innerText = "Dernier élément inséré";
// maDiv.insertBefore(lastDiv,paragraph);
maDiv.insertBefore(lastDiv,maDiv.children[1]);

// parent.removeChild(child) retirer un enfant
maDiv.removeChild(otherCreatedDiv);