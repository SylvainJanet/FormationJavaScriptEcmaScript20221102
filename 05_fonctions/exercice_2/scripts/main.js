/*
2) Ecrire une fonction qui affiche la table de multiplication d'un nombre ou le premier 
et le dernier multiples sont paramétrés
tableMultiplication(7,3,5) renvoie
7 * 3 = 21
7 * 4 = 28
7 * 5 = 35
*/

function tableMultiplication(number, first, last) {
  for (let i = first; i <= last; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}

tableMultiplication(7,3,5)