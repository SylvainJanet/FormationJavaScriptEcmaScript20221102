/*
5) Créer une fonction rot(chaine, number) qui encode 
une chaine de caractères selon le code de César en 
utilisant le paramètre number.
Code de césar : https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage
Attention aux majuscules/minuscules !
Pour s'aider : https://fr.wikibooks.org/wiki/Les_ASCII_de_0_%C3%A0_127/La_table_ASCII#Descriptif3
Exemple : 
rot("ABCD",3) = "DEFG"
rot("Message secret",13) = "Zrffntr frperg"
Pour décoder un message, il suffit d'utiliser 
rot(messageEncode,26-ancienNumber) Et donc :
rot("DEFG",23) = "ABCD"
rot("Zrffntr frperg",13) = "Message secret"
*/


(function() {

  // function rotAsciiCharacter(code,number,indexMin, indexMax) {
  //   if (code < indexMin || code > indexMax){
  //     return code;
  //   }
  //   if (code + number > indexMax) {
  //     newNumberAscii = indexMin + code + number - (indexMax + 1);
  //   }
  //   else {
  //     newNumberAscii = code + number;
  //   }
  //   return newNumberAscii;
  // }
  function rotAsciiCharacter(code,number,indexMin,indexMax) {
    if (code < indexMin || code > indexMax)
      return code;
    return indexMin + (code - indexMin + number) % (indexMax - indexMin +1);
  }

  function rotAsciiMajuscule(code, number) {
    return rotAsciiCharacter(code, number, 65, 90);
  }

  function rotAsciiMinuscule(code, number) {
    return rotAsciiCharacter(code, number, 97, 122);
  }

  function rot(chaine, number) {
    let result = "";
    for (char of chaine) {
      numberAscii = char.charCodeAt(0);
      if ((numberAscii < 65) || (numberAscii > 90 && numberAscii < 97) || (numberAscii > 122)){
        result = result+char;
      }
      else {
        if (numberAscii<=90) {// majuscule
          newNumberAscii = rotAsciiMajuscule(numberAscii, number);
        } 
        else // minuscule
        {
          newNumberAscii = rotAsciiMinuscule(numberAscii, number);
        } 
        result = result + String.fromCharCode(newNumberAscii)
      }
    }

    return result
  }

  // on aurait pu faire une closure
  function rot11(chaine) {
    return rot(chaine,11);
  }

  function rot15(chaine) {
    return rot(chaine,15);
  } 

  console.log(rot("ABCD",3));
  console.log(rot("Message secret",13));
  console.log(rot("DEFG",23));
  console.log(rot("Zrffntr frperg",13));

  console.log(rot15("Un message codé en rot15 ! On le décode en rot11 ;)"));
  console.log(rot11("Jc bthhpvt rdsé tc gdi15 ! Dc at sérdst tc gdi11 ;)"));
})();