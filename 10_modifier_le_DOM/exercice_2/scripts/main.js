/*
2) Afficher du texte dans des paragraphes, et mettre des boutons qui permettent de cacher
le texte
*/

(function() {

  let divHideProblem = document.getElementById("hidden");
  let divsToHide = divHideProblem.children;
  for (let div of divsToHide) {
    div.querySelector("button").addEventListener("click", (e) => {
      let p = e.target.parentElement.querySelector("p");
      if (p.classList.contains("hidden")) {
        p.classList.remove("hidden");
        e.target.innerText = "Hide";
      } else {
        p.classList.add("hidden");
        e.target.innerText = "Display";
      }
    })
  }

})();