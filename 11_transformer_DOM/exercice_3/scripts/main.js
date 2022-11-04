/*
3 Reprendre l'exercice 2 des objets et rajouter un formulaire pour rajouter des utilisateurs
depuis la page web. Ajouter de la validation en utilisant l'API Constraint Validation :
https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript
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

  let form = document.querySelector("form")
  let divUsers = document.getElementById("userList");
  let lis = divUsers.querySelectorAll("li");

  for (let [i,li] of lis.entries()) {
    li.innerHTML = userDisplayHtml(users[i]);
  }

  let button = document.getElementById("submit");
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let ageInput = document.getElementById("age");
  button.addEventListener("click",(e) => {
    if (form.checkValidity()) {
      e.preventDefault();
      let name = nameInput.value;
      let email = emailInput.value;
      let age = ageInput.value;
      let newUser = new Utilisateur(name,email,age);
  
      let newli = document.createElement("li");
      newli.innerHTML = userDisplayHtml(newUser);
  
      divUsers.appendChild(newli);
  
      form.reset();
    }
  })

})();
