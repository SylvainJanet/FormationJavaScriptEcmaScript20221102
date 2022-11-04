/*
3) Créer un formulaire de création de compte : nom d'utilisateur, email, 
mot de passe. Faire une vérification basique du formulaire : le nom d'utilisateur
ne doit pas être vide, l'adresse email doit contenir un @, et le mot de passe
doit contenir au moins 10 caractères. En cas de validation faire uniquement un 
alert() avec un message approprié. Sinon, mettre un message d'erreur au niveau
du ou des champs incorrects.
*/

(function () {

  let form = document.querySelector("form");

  let userNameInput = document.getElementById("userName");
  let emailInput = document.getElementById("email");
  let pwdInput = document.getElementById("pwd");
  let userNameError = document.getElementById("userNameError");
  let emailError = document.getElementById("emailError");
  let pwdError = document.getElementById("pwdError");

  form.addEventListener("submit",function(e) {
    e.preventDefault();
    let userName = userNameInput.value;
    let email = emailInput.value;
    let pwd = pwdInput.value;

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
      return alert(`Utilisateur créé ! ${userName} - ${email}`);
    }
    if (userNameIncorrect) {
      userNameError.innerText = "Le nom d'utilisateur doit être non vide";
    }
    if (emailIncorrect) {
      emailError.innerText = "Email invalide";
    }
    if (pwdIncorrect) {
      pwdError.innerText = "Le mot de passe doit contenir au moins 10 caractères" 
    }
  });

})();