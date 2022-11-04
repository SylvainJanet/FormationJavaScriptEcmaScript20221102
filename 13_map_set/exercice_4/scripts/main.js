/*
4) Reprendre l'exercice 2 sur les événements, mais utiliser des maps. 
Pour chaque language supporté, une map sera responsable de contenir 
l'ensemble des messages dans une langue.
Utiliser enfin une dernière map qui contiendra en clé les langues supportées,
et en valeur chacune des map contenant les messages associées.
Codé ainsi, il sera beaucoup plus simple de rajouter du contenu,
traduisible dans plusieurs languages, ainsi que de rajouter
une langue supportée.
*/

(function() {

  let messages = new Map();

  // pour rajouter des langues, il suffit de rajouter une Map.
  // pour rajouter des messages, il suffit de mettre des bons ids de rajouter
  // les différentes traductions
  // (on pourrait ne pas fonctionner en id et mettre en clé directement les éléments
  // récupérés du DOM)

  let messagesFr = new Map([
    ["title","Ceci est un titre"],
    ["paragraph","Ceci est un texte"],
  ]);

  let messagesEn = new Map([
    ["title","This is a title"],
    ["paragraph","This is a text"],
  ]);

  let messagesDe = new Map([
    ["title","Das ist ein Titel"],
    ["paragraph","Das ist ein Text"]
  ])

  messages.set("Français",messagesFr);
  messages.set("English",messagesEn);
  messages.set("Deutsch",messagesDe);
  let defaultLanguage = "Français"

  function updateContent(lang){
    let dictionnary = messages.get(lang);
    for (let [id,text] of dictionnary) {
      let elt = document.getElementById(id);
      elt.innerText = text;
    }
  }

  updateContent(defaultLanguage);

  let div = document.getElementById("multiLangButtons");

  let languages = [...messages.keys()];
  let langageButtons = [];
  for (let lang of languages) {
    let button = document.createElement("button");
    button.innerText = lang;
    div.appendChild(button);

    langageButtons.push(button);

    if (lang===defaultLanguage) {
      button.setAttribute("disabled","");
    }

    button.addEventListener("click", (e) => {
      for (b of langageButtons) {
        b.removeAttribute("disabled");
      }
      e.target.setAttribute("disabled","");
      updateContent(lang);
    });
  }

})();