/*
3) Afficher l'heure actuelle.
Pour répéter un traitement de manière régulière, utiliser
setInterval
https://developer.mozilla.org/en-US/docs/Web/API/setInterval
Indiquer également le nombre de jours restant jusqu'à
la nouvelle année.
*/

(function() {

  let h1 = document.getElementById("currentTime");
  let p = document.getElementById("remainingTime");

  function updateDate()  {
    let now = new Date()
    /*
Formats de date : 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
*/
    h1.innerText = now.getHours() + "h" + now.getMinutes() + "m" + now.getSeconds() + "s";
  }

  updateDate();
  setInterval(updateDate,500);

  let tomorrow = new Date(2023,0,1,0,0,0,0);
  let msPerDay = 1000*60*60*24;

  function updateDays() {
    let now = new Date();
    let tempsMs = tomorrow.getTime() - now.getTime();
    let nbrDays = tempsMs / msPerDay;
    p.innerText = "Nombre de jours avant la nouvelle année : " + Math.round(nbrDays*100)/100;
  }

  updateDays();

  setInterval(updateDays,1000*60);

})();