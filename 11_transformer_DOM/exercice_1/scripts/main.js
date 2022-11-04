/*
1) Lorsque l'on clique sur un bouton, 10 <div></div> sont créées avec du texte
à l'intérieur.
*/

(function() {

  let button = document.getElementById("createDiv");
  button.addEventListener("click",(e) => {
    let parentDiv = button.parentElement;
    for (let i = 0 ; i < 10 ; i++) {
      let createdDiv = document.createElement("div");
      createdDiv.innerText = `Coucou, div numéro ${i+1}`;
      parentDiv.appendChild(createdDiv);
    }
    button.setAttribute("disabled","");
    button.innerText = "Div créées"
  });

})();