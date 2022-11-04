/*
2) Afficher un texte et proposer des boutons pour changer la langue du texte.
*/

(function() {

  let div = document.getElementById("multiLangText");
  let p = div.querySelector("p");

  contenu = {
    fr:"Ceci est un texte",
    en:"This is a text",
    de:"Das ist ein Text",
  };

  function updateLangageTo(lang) {
    return function(contenu) {
      return contenu[lang];
    }
  }

  let updateToFr = updateLangageTo("fr");
  let updateToEn = updateLangageTo("en");
  let updateToDe = updateLangageTo("de");

  let buttonFr = document.getElementById("frLang");
  let buttonEn = document.getElementById("enLang");
  let buttonDe = document.getElementById("deLang");

  buttonFr.addEventListener("click",() => {
    p.innerText = updateToFr(contenu);
    buttonEn.removeAttribute("disabled");
    buttonDe.removeAttribute("disabled","");
    buttonFr.setAttribute("disabled","");
  });

  // déclenche un événement manuellement
  buttonFr.dispatchEvent(new Event("click"));

  buttonEn.addEventListener("click",() => {
    p.innerText = updateToEn(contenu);
    buttonDe.removeAttribute("disabled","");
    buttonFr.removeAttribute("disabled","");
    buttonEn.setAttribute("disabled","");
  })

  buttonDe.addEventListener("click",() => {
    p.innerText = updateToDe(contenu);
    buttonEn.removeAttribute("disabled","");
    buttonFr.removeAttribute("disabled","");
    buttonDe.setAttribute("disabled","");
  })

})();