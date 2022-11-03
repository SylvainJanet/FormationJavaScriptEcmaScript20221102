/* 

DOM : document object model
Représentation du document HTML sous forme d'objet qu'on va pouvoir manipuler en JS

-> contrôler le HTML
-> contrôler le style

L'interface document représente la page web chargée dans le navigateur et c'est ce qu'on utilise pour
accéder au contenu de la page formé par l'arbre du DOM

Il inclut les éléments comme le <body>, le <header>, et tous les autres éléments de la page, avec la même structure.
*/

console.log(document);

/* le document contient toutes les balises <a></a> dans des nodes, qui sont les objets qu'on va manipuler
Les nodes sont l'équivalent objet d'une balise*/

console.log(document.links);

/*

En JS, il existe d'autres interfaces qui permettent de faire d'autres taitements

window : l'onglet du navigateur dans lequel la page est chargée pour récupérer la taille de la fenêtre par exemple

navigator : le navigateur en lui même pour récupérer des informations comme la géolocalisation, les préférences de langue,
un flux vidéo provenant de la webcam par exemple

On va utiliser document : DOM les éléments HTML et CSS

*/

/*
On a plusieurs manière de récupérer des nodes :

getElementById() : en connaissant l'id
getElementByClassName() : en connaissant une classe
querySelector() : qui récupère la première balise selon un selecteur CSS
querySelectorAll() : qui récupère toutes les balises selon un selecteur CSS
*/

let h1Element = document.getElementById("headerTitle");
console.log(h1Element);
  
console.log(h1Element.innerText);

h1Element.textContent += " - coucou depuis le code JS";

let divElement = document.getElementById("divExemple");

console.log("textContent");
console.log(divElement.textContent);

console.log("innerHTML");
console.log(divElement.innerHTML);

console.log("innerText");
console.log(divElement.innerText);

/* Tout le vocabulaire sur la hierarchie des balises en HTML se retrouve dans les nodes

- noeud (élément node)
- racine
- enfant, fils, fille
- descendant
- parent
- ancêtre
- frères et soeurs

*/

let ulElt = document.getElementById("ulElement");

let liElts = ulElt.children;
console.log(liElts);

