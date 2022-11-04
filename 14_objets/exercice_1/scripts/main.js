/*
1) Définir un littéral objet Article, qui a un titre, un auteur, un contenu,
et une fonction qui retourne le contenu signé par le nom de l'auteur.
Afficher ensuite cet article dans une page HTML structurée comme vous le souhaitez
(le titre et le contenu de l'article doivent être dans des balises différentes).
*/

(function() {

  let article = {
    titre:"Faire de la programmation objet en Javascript",
    auteur:"Sylvain Janet",
    contenu:"Dans cette formation, on a vu comment créer des littéraux objets en JS.", 
  };

  article.contenuSigne = function () { return this.contenu + "\n\t" + this.auteur};

  console.log(article);

  let divArticle = document.getElementById("article");
  let titleH2 = document.createElement("h2");
  let contentP = document.createElement("p");

  divArticle.appendChild(titleH2);
  divArticle.appendChild(contentP);

  titleH2.innerText = article.titre;
  contentP.innerText = article.contenuSigne();

})()