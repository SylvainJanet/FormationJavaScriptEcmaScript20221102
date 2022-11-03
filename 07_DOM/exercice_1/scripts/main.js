/*
1) Demander à l'utilisateur comment il s'appelle, et lui dire bonjour en affichant son nom 
dans une balise <h1></h1> de la page.
*/

(function() {
  let prenom = prompt("Comment tu t'appelles ?");
  prenom ??= "inconnu";
  let titreElt = document.getElementById("titre");
  titreElt.innerText = `Salut ${prenom}, bienvenue !`;
})();