/*
1) créer une fonction findChar(chaine, lettre) qui 
affiche "trouvé" ou "aucun résultat" selon si une 
lettre apparait dans une chaine de caractères
*/

(function() {

  function findChar(chaine, lettre) {
    return chaine.indexOf(lettre) !== -1 ? "Trouvé !" : "Aucun résultat";
  }

  console.log(findChar("Ceci est un test","e"));
  console.log(findChar("Ceci est un test","z"));

})()