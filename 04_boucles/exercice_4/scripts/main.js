/*
4) Ecrire un programme qui choisit un nombre aléatoirement entre 0 et 100 et qui 
demande à l'utilisateur de deviner ce nombre. Après chaque proposition, le programme 
indique si la valeur est plus grande ou plus petite que la proposition.
Lorsque l'utilisateur a trouvé, lui donner son nombre de tentatives. Si l'utilisateur
dépasse un certain nombre de coups, il a perdu.
Indication : pour choisir un nombre aléatoire, utiliser : 
nombreAleatoire = Math.floor(Math.random() * 101);
*/

let randomNumber = Math.floor(Math.random() * 101);
let nbrTentatives = 0;
let maxTentatives = 6;
let choice;
let lost = false;
do {
  if (nbrTentatives >= maxTentatives) {
    lost = true;
    break;
  }

  choice = +prompt("Essaye de deviner mon nombre entre 0 et 100 !");

  if (choice < randomNumber) {
    alert("Trop petit !");
  }
  if (choice > randomNumber) {
    alert("Trop grand !");
  }

  nbrTentatives++;

} while (choice !== randomNumber);

if (lost) {
  alert(`Perdu ! Le nombre était ${randomNumber}, et vous ne l'avez pas trouvé en ${maxTentatives} essais !`)
} else {
  alert(`Vous avez trouvé ${randomNumber} en ${nbrTentatives} essais !`);
}