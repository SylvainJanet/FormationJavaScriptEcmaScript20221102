/*
1) Faire une page dans laquelle un utilisateur peut entrer deux nombres, 
appuyer sur un bouton et afficher le résultat de l'addition de ces deux nombres.
*/

(function() {

  let div = document.getElementById("addNumbers");
  let button = div.querySelector("button");
  let resultDiv = div.querySelector("p");
  
  button.addEventListener("click",(e) => {
    let result = 0;
    div.querySelectorAll("input").forEach(i => result+=i.valueAsNumber);
    resultDiv.innerText = result;
  })

})();