/*
5) Reprendre la closure de l'exercice 4 sur les tableaux pour demander à l'utilisateur
son nom et l'afficher de manière dynamique dans le contenu des différents paragraphes.
*/


(function() {

  function getTitles() {
    return document.querySelectorAll("h1,h2");
  }

  function getParagraphs() {
    return document.querySelectorAll("p");
  }

  function fillNodes(nodes, contents, prenom) {
    let contentsWithName = contents.map(l => insererDansTexte(prenom,...l));
    for (let [index, node] of nodes.entries()) {
      node.innerText = contentsWithName[index];
    }
  }

  function insererDansTexte(prenom, ...texts) {
    if (texts.length === 0)
      return prenom;
    let result = "";
    for (let text of texts.slice(0,-1)) {
      result += text + prenom
    }
    result += texts[texts.length - 1];
    return result;
  }

  titles = [
    ["Bonjour "," !"], 
    ["Une deuxième partie, j'espère que tu suis ","..."]
  ];
  contents = [
    ["Premier paragraphe"],
    ["Deuxième paragraphe. Dédicace à ",". Mais juste pour celui là"],
    ["Troisième paragraphe"],
    [
      "Bon ",
      " t'as compris j'espère. Je peux faire ça autant de fois que je veux. Ca t'en bouche un coin ",
      " ? Sur ce, au revoir ", 
      " !"
    ],
  ]

  let prenom = prompt("Comment tu t'appelles ?");
  fillNodes(getTitles(),titles, prenom);
  fillNodes(getParagraphs(),contents, prenom);

})();

