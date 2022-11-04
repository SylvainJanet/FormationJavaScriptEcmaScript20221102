/*
2) Reprendre les exercices 2 et 3 de la partie sur les objets en utilisant
des classes, en utilisant des accesseurs.

(2 Objets)
*/

import {Utilisateur,initialUsers} from "./modules/utilisateur.js";

(function () {

  let form = document.querySelector("form")
  let divUsers = document.getElementById("userList");
  let lis = divUsers.querySelectorAll("li");

  for (let [i,li] of lis.entries()) {
    li.innerHTML = initialUsers[i].displayHtml();
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
      newli.innerHTML = newUser.displayHtml();
  
      divUsers.appendChild(newli);
  
      form.reset();
    }
  })

})();