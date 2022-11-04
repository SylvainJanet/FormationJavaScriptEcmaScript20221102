/*
Les événements permettent de rendre une page interactive.

Lorsqu'un événement se produit, on aura dans notre JS des écouteurs d'événements qui vont se déclencher et effectuer
un certain traitement.

La problématique : comment attacher un écouteur d'événement ?
Quels sont les événements qu'on peut écouter ?
*/

let myButton = document.getElementById("buttonFirstExemple");

myButton.addEventListener("click", function() {
  console.log("Coucou !");
});


myButton = document.getElementById("buttonFunctionParameter");

myButton.addEventListener("click", (e) => {
  console.log("Event");
  console.log(e);
  let targetElement = e.target;
  console.log(targetElement);
  targetElement.innerText = "Vous avez cliqué !";
});

let onPress = function () {
  console.log("Click détécté");
}

myButton.addEventListener("click", onPress);

// l'ECMAScript ne donne aucune indication sur l'ordre dans lequel les écouteurs vont s'exécuter.


let form = document.getElementById("formElement");
let nameInput = document.getElementById("lname");
let firstNameInput = document.getElementById("fname");
let pErrorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (e) => {
  // lorsqu'on souhaite stopper le comportement par défaut d'un évenement, on peut utiliser
  // e.preventDefault();
  // par exemple, lors de la validation d'un formulaire, on peut empêcher les données d'être envoyées
  console.log("Formulaire validé !");
  // element de type input : nameInput.value : valeur rentrée par l'utilisateur
  if (nameInput.value === "" || firstNameInput.value === "") {
    e.preventDefault();
    console.log("Erreur !");
    pErrorMessage.innerText = "Erreur ! Aucun champ ne doit être vide !";
  }
});


/* 
Bouillonement et capture
*/

let divOne = document.getElementById("div1");
let divTwo = document.getElementById("div2");
let divThree = document.getElementById("div3");

// divOne.addEventListener("click", () => console.log("Clic sur div1"));
// divTwo.addEventListener("click", () => console.log("Clic sur div2"));
// divThree.addEventListener("click", () => console.log("Clic sur div3"));

/*

Lorsqu'un événement se déclenche sur un élément, il y a deux phases qui s'enclenchent :
une première phase de capture,
une seconde phase de bouillonnement

Phase de capture :
- le navigateur part de l'ancêtre le plus éloigné (<html>), regarde si il y a des écouteurs d'événements appropriés
- il passe à l'élément suivant, fait la même chose
- jusqu'à ce que atteigne l'élément sur lequel on a cliqué

Phase de bouillonement :
- il fait le parcours inverse et exécute les écouteurs d'événements

On peut stopper la propagation de l'événement lors de la phase de bouillonnement en faisant stopPropagation()

*/


divOne.addEventListener("click", (e) => {
  console.log("Clic sur div1")
  e.stopPropagation();
});

divTwo.addEventListener("click", (e) => {
  console.log("Clic sur div2")
  e.stopPropagation();
});

divThree.addEventListener("click", (e) => {
  console.log("Clic sur div3")
  e.stopPropagation();
});

/*
Il existe d'autre manières d'attacher des écouteurs d'événements à un élément

Via une propriété : certains éléments ont des propriétés particulières correspondant à des événements dont la valeur est un listener
*/

let button = document.getElementById("eventByPropButton");
button.onclick = function () {
  console.log("Clic sur le bouton, événement écouté via une propriété");
}

// inconvénient : on ne peut pas associer plusieurs écouteurs d'événements

/*

Directement dans le code HTML
Possible, mais déconseillé : on préfère isoler les différents codes
fichiers HTML, fichiers CSS, fichiers JS

*/

function direCoucou() {
  alert("Coucou ! ");
}

/*

Evenements liés à window
https://developer.mozilla.org/en-US/docs/Web/API/Window#events

load
lancé lorsque la page est chargée

resize
lancé lorsqu'on modifie la taille de la fenêtre


Documentation listant tous les événements :
https://developer.mozilla.org/fr/docs/Web/Events

DOMContentLoaded : lancé lorsque le DOM a été chargé 
(la différence avec l'événement load de window, c'est qu'il n'attend pas que les ressources soient chargées)
Cet événement permet de mettre la balise script où on souhaite

*/

