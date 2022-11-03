/*
3) Ecrire la table de multiplication d'un nombre demandé à l'utilisateur
*/

let number = +prompt("Choisir un nombre")

for (let i = 0 ; i <= 10; i++) {
  console.log(`${i} x ${number} = ${i*number}`)
}