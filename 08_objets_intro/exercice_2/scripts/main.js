/*
2) Définir un constructeur Utilisateur avec pour propriétés nom, email, age et une méthode
permettant de se présenter. 
Créer plusieurs instances d'utilisateurs dans une liste par le code, et afficher
dans une page HTML les différentes informations et les présentations.
(on ne sait pas encore générer des balises html, du coup créer toute la structure html
à la main, avec un nombre d'utilisateurs fixe)
*/

(function () {

  function Utilisateur(nom, email, age) {
    this.nom = nom;
    this.email = email;
    this.age = age;

    this.sePresenter = function() {
      return `Je suis ${this.nom}. J'ai ${this.age} ans, et mon email est ${this.email}`; 
    };
  };

  function userDisplayHtml(user) {
    return `<strong>${user.nom}</strong><p>${user.sePresenter()}</p>`;
  }

  let users = [
    new Utilisateur("Sylvain","sjanet@jehann.fr",30),
    new Utilisateur("Chloe","chloeTheBest@gmail.com",22),
    new Utilisateur("Marjorie","marjobarjo@flageolets.fr",99),
    new Utilisateur("Océane","oceane@ministere.gouv.fr",12),
  ];

  let divUsers = document.getElementById("userList");
  let lis = divUsers.querySelectorAll("li");

  for (let [i,li] of lis.entries()) {
    li.innerHTML = userDisplayHtml(users[i]);
  }

})();