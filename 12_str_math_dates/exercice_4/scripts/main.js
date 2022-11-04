/*
4) Créer une fonction 
palindrome(mot, spaceIgnored = False) 
qui permet de vérifier si une chaine de caractères
est un palindrome.
Le paramètre spaceIgnored permet d'inclure ou non 
les espaces
palindrome('kayak') = True
palindrome('Esope reste ici et se repose') = False
palindrome('Esope reste ici et se repose', True) = True
palindrome('chien') = False
*/

(function() {

  function removeSpaces(chaine) {
    return chaine.split(" ").filter(s => s.length > 0).join("");
  }

  function inverser(chaine) {
    let array = [...chaine];
    array.reverse();
    return array.join("");
  }

  function palindrome(mot, spaceIgnored = false) {
    mot = mot.trim().toLowerCase();
    if (spaceIgnored) {
      mot = removeSpaces(mot);
    }
    let motInverse = inverser(mot);
    return mot === motInverse;
  }

  console.log(palindrome("kayak"));
  console.log(palindrome("Esope reste ici et se repose"));
  console.log(palindrome("Esope reste ici et se repose", true));
  console.log(palindrome("kayaak"));
})();