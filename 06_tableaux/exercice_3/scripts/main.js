/*
3) Ecrire une fonction qui transformer une chaine de 
caracteres en acronyme
Salut les    geeks -> SLG
*/


(function() {

  let chaine = "Salut les    geeks";

  function getWords(phrase) {
    return phrase.split(" ");
  }

  function firstLetter(word) {
    return word[0];
  }

  function acronyme(texte) {
    let letters = [];
    getWords(texte).forEach(word => letters.push(firstLetter(word.toUpperCase())));
    return letters.join("");
  }

  let resultat = acronyme(chaine);

  console.log(chaine);
  console.log(resultat);

})();