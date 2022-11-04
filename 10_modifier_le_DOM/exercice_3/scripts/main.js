/*
3) Reprendre l'exercice 3 sur les événements, mais dans le cas où les données sont 
incorrectes, indiquer une erreur via un changement de classe (modification de la couleur 
en rouge, message d'erreur, ...)
*/

(function () {

  let form = document.querySelector("form");

  let userNameInput = document.getElementById("userName");
  let emailInput = document.getElementById("email");
  let pwdInput = document.getElementById("pwd");
  let userNameError = document.getElementById("userNameError");
  let emailError = document.getElementById("emailError");
  let pwdError = document.getElementById("pwdError");
  let userNameLabel = userNameInput.previousElementSibling;
  let emailLabel = emailInput.previousElementSibling;
  let pwdLabel = pwdInput.previousElementSibling;

  function resetErrorClassElement(el) { 
    el.classList.remove("error");
    el.classList.add("ok");
  }

  function resetErrorClassElements(...els) {
    for (el of els) {
      resetErrorClassElement(el);
    }
  }

  function errorClassToElement(el) {   
    el.classList.remove("ok");
    el.classList.add("error");
  }

  function errorClassToElements(...els) {
    for (el of els) {
      errorClassToElement(el);
    }
  }

  form.addEventListener("submit",function(e) {
    e.preventDefault();
    let userName = userNameInput.value;
    let email = emailInput.value;
    let pwd = pwdInput.value;

    resetErrorClassElements(userNameError,emailError,pwdError);
    userNameError.innerText = "";
    emailError.innerText = "";
    pwdError.innerText = "";

    let userNameIncorrect = userName === "";
    let emailIncorrect = !email.includes("@");
    let pwdIncorrect = pwd.length < 10;
    let isValid = ! (userNameIncorrect || emailIncorrect || pwdIncorrect);

    if (isValid) {
      userNameInput.value = "";
      emailInput.value = "";
      pwdInput.value = "";
      resetErrorClassElements(userNameError,userNameInput,userNameLabel,
        emailError,emailInput, emailLabel,
        pwdError,pwdInput,pwdLabel);
      userNameInput.classList.remove("ok");
      userNameLabel.classList.remove("ok");
      emailInput.classList.remove("ok");
      emailLabel.classList.remove("ok");
      pwdInput.classList.remove("ok");
      pwdLabel.classList.remove("ok");
      return alert(`Utilisateur créé ! ${userName} - ${email}`);
    }
    if (userNameIncorrect) {
      userNameError.innerText = "Le nom d'utilisateur doit être non vide";
      errorClassToElements(userNameError,userNameInput, userNameLabel);
    } else {
      resetErrorClassElements(userNameError,userNameInput,userNameLabel);
      userNameError.innerText = "";
    }
    if (emailIncorrect) {
      emailError.innerText = "L'adresse email est invalide";
      errorClassToElements(emailError,emailInput, emailLabel);
    } else {
      resetErrorClassElements(emailError,emailInput,emailLabel);
      emailError.innerText = "";
    }
    if (pwdIncorrect) {
      pwdError.innerText = "Le mot de passe doit contenir au moins 10 caractères";
      errorClassToElements(pwdError,pwdInput, pwdLabel);
    } else {
      resetErrorClassElements(pwdError,pwdInput,pwdLabel);
      pwdError.innerText = "";
    }
  });

})();