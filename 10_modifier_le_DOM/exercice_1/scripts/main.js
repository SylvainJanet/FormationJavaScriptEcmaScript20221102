/*
1) Afficher un titre, un texte, et un bouton qui permet de mettre en dark mode et vice versa :
le fond en noir, le texte en blanc
*/

(function () {

  let boutton = document.getElementById("modeChange");
  boutton.addEventListener("click", (e) => {
    let divToChange = e.target.previousElementSibling;
    if (divToChange.classList.contains("light")) {
      e.target.innerText = "Change to light";
      divToChange.classList.replace("light","dark");
    } else {
      e.target.innerText = "Change to dark";
      divToChange.classList.replace("dark","light");
    }
      
  });


})()