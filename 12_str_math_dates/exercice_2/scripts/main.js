/*
2) Créer une fonction anagramme(mot1, mot2)
qui permet de vérifier si deux mots sont des 
anagramme
*/

(function(){

  function anagramme(mot1,mot2) {
    mot1 = mot1.trim().toLowerCase();
    mot2 = mot2.trim().toLowerCase();

    if (mot1.length !== mot2.length)
      return false;
    
    let array1 = [...mot1];
    let array2 = [...mot2];

    array1.sort();
    array2.sort();

    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i])
        return false;
    }
    return true;
  }

  console.log(anagramme("parisien","aspirine"));
  console.log(anagramme("parisien","AspIrINE   "));
  console.log(anagramme("parisien","aspirinc"));
  console.log(anagramme("parisien","aspirines"));

})();