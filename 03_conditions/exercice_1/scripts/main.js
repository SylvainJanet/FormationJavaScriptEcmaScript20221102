/*
1) Demander à l'utilisateur si il souhaite afficher un message dans la console.
Si l'utilisateur valide, afficher un message. Sinon, ne rien faire.
*/

let userAgree = confirm("Voulez-vous afficher un message dans la console ?");
if (userAgree){
  console.log("Coucou depuis la console !");
}