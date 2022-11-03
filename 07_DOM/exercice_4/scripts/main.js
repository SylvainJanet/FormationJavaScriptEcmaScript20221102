/*
4) Faire une structure html avec des titres et des paragraphes, sans mettre de contenu dans
le HTML.
Mettre le contenu par le code JS dans ces paragraphes. Demander à l'utilisateur si il 
souhaite que ce texte soit écrit en gras.
*/


(function () {
  
  function getTitles() {
    return document.querySelectorAll("h1,h2");
  }

  function getParagraphs() {
    return document.querySelectorAll("p");
  }

  // function fillTitles() {
  //   for (let [index,title] of getTitles().entries()) {
  //     title.innerText = titles[index];
  //   }
  // }

  // function fillParagraphs() {
  //   for (let [index,paragraph] of getParagraphs().entries()) {
  //     paragraph.innerText = titles[index];
  //   }
  // }

  function fillNodes(nodes, contents, bold) {
    for (let [index, node] of nodes.entries()) {
      let prefix = bold ? "<b>":"";
      let suffix = bold ? "</b>":"";
      node.innerHTML = prefix + contents[index] + suffix;
    }
  }

  let titles = ["Titre","Depuis le code JS"];
  let contents = [
    "Ceci est un paragraphe",
    "Un autre paragraphe",
    "Ce contenu a été généré depuis le code JS",
  ];

  let bold = confirm("En gras ?");
  fillNodes(getTitles(),titles, bold);
  fillNodes(getParagraphs(),contents, bold);
 
} )()


