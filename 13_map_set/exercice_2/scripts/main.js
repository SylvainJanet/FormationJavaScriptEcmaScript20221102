/*
2) Ecrire une fonction qui renvoie les lettres communes à deux mots. Pour l'utiliser,
faire des champs de texte et un bouton qui affiche les lettres communes sur la page HTML.
*/

(function(){

  let div = document.getElementById("commonLetters");
  [input1,input2] = div.querySelectorAll("input");
  let button = div.querySelector("button");
  let pResult = div.querySelector("p");

  function removeSpaces(chaine) {
    return chaine.split(" ").filter(s => s.length > 0).join("");
  }

  function intersection(set1,set2) {
    let result = new Set();
    for (el of set1) {
      if (set2.has(el)) {
        result.add(el)
      }
    }
    return result;
  }

  function commonLetters(mot1,mot2) {
    mot1 = removeSpaces(mot1);
    mot2 = removeSpaces(mot2);

    let set1 = new Set(mot1);
    let set2 = new Set(mot2);

    let commonSet = intersection(set1,set2);
    // let result = "";
    // for (let el of commonSet) {
    //   result += el;
    // }

    // return result;
    return "".concat(...commonSet.values());
  }

  button.addEventListener("click", () => {
    let mot1 = input1.value;
    let mot2 = input2.value;
    pResult.innerText = commonLetters(mot1,mot2);
  });

})();