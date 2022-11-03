/*
3) Recoder le jeu où l'on devine un nombre choisi 
aléatoirement par le programme. 
(boucles ex 4)
Cette fois ci, le programme va demander à l'utilisateur
quelles bornes utiliser et lorsqu'il aura deviné un 
nombre incorrect, il lui proposera les choix cohérents
Exemple : je choisi 1 et 100 comme bornes. Le programme
me demande de saisir un nombre entre 1 et 100. Je choisi
50. Le programme me répond : le nombre est plus grand, 
choisi un nombre entre 51 et 100. Lorsque j'ai trouvé, 
le programme s'arrête.
On va cette fois ci utiliser des fonctions.
- coder deciderBornes() qui renvoie les bornes 
utilisées pour le jeu
- coder jouerUnCoup(answer,minimum,maximum) qui 
demande à l'utilisateur un entier entre minimum et 
maximum, et qui renvoie :
	* un boolean à vrai uniquement si l'utilisateur a 
    gagné (il a choisi le paramètre answer)
	* le minimum pour le coup suivant
	* le maximum pour le coup suivant
- coder jouerUnePartie(answer,minimum,maximum) qui 
fait une partie du jeu où l'entier à deviner est le 
paramètre answer, et où les bornes sont minimum et 
maximum et qui renvoie le nombre de tentatives du 
joueur
- coder une fonction jouer() (ou une IIFE) qui fait tout le jeu : 
demander à l'utilisateur les bornes du jeu, puis choisi
un nombre aléatoirement, puis demande à l'utilisateur 
de deviner un nombre, en lui disant si le nombre est 
plus grand ou plus petit, et en lui proposant au fur et 
à mesure des choix cohérents avec ces indications. 
Lorsque le joueur trouve le nombre, la fonction le 
félicite, lui donne son nombre de tentatives et 
s'arrête.
Math.floor(Math.random() * (max-min+1) + min);
En plus : 
- Rajouter un nombre maximal de tentatives, demandé à l'utilisateur
avant de lancer la partie
- Faire du contrôle sur le prompt : bien des nombres, bien compris entre
les bornes
*/

function askForNumber(message) {
  let choice;
  do {
    choice = +prompt(message);
  } while (isNaN(choice));
  return choice;
}

function askForNumberBetween(message, min, max) {
  message += ` entre ${min} et ${max}`;
  let choice;
  do {
    choice = askForNumber(message);
  } while (!(min <= choice && choice <= max));
  return choice;
}

function askForNumberGreaterThan(message, min) {
  message += ` plus grand que ${min}`;
  let choice;
  do {
    choice = askForNumber(message);
  } while (!(min < choice));
  return choice;
}

function deciderBornes() {
  let min = askForNumber("Borne inférieure");
  let max = askForNumberGreaterThan("Borne supérieure", min);
  return [min, max];
}

function jouerUnCoup(answer,minimum,maximum) {
  let guess = askForNumberBetween("Choisir un nombre",minimum,maximum);
  let nextMin = guess <= answer ? guess : minimum;
  let nextMax = guess >= answer ? guess : maximum;
  return [guess == answer, nextMin, nextMax];
}

function jouerUnePartie(answer,minimum,maximum, maxTentatives) {
  let won;
  let tentatives = 0;
  do {
    [won,minimum,maximum] = jouerUnCoup(answer, minimum, maximum);
    tentatives++;
  } while (!won && tentatives < maxTentatives);
  return [won, tentatives];
}

function pickAnswer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

(function () {
  let [min, max] = deciderBornes();
  let answer = pickAnswer(min,max);
  let maxTentatives = askForNumberGreaterThan("Combien de tentatives maximum ?",0);
  let [won, tentatives] = jouerUnePartie(answer,min,max,maxTentatives);
  if (won) {
    alert(`Bien joué ! Vous avez trouvé ${answer} en ${tentatives} tentatives !`);
  } else {
    alert(`Game over !`);
  }
})();