/*
4) Problème : nous gérons un site d'une librairie qui souhaite gérer un stock de livres
avec des informations sur eux comme le titre, l'auteur, la date de parution,
une courte description et un numéro ISBN (https://fr.wikipedia.org/wiki/International_Standard_Book_Number)
On veut gérer le stock : afficher les différents livres disponibles.
Un bouton est disponible pour supprimer un livre lorsqu'il est acheté et qu'un exemplaire
est retiré du stock.
Un formulaire est disponible pour rajouter un nouveau livre dans le stock lorsque la librairie
en achète un.
*/

(function() {

  function Livre(titre,auteur,date,description,isbn,stock) {
    this.titre = titre;
    this.auteur = auteur;
    this.date = date;
    this.description = description;
    this.isbn = isbn;
    this.stock = stock;

    this.getLiTitle = function() {
      return this.titre + " - " + this.auteur + " (" + this.date + ")";
    }

    this.getPIsbn = function () {
      return "ISBN : " + this.isbn;
    }

    this.getPStock = function() {
      return "Stock : " + this.stock;
    }
  }

  function buildLi(livre) {
    let li = document.createElement("li");
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let pIsbn = document.createElement("p");
    let divStock = document.createElement("div");
    let pStock = document.createElement("p");
    let buttonAddStock = document.createElement("button");
    let buttonRemoveStock = document.createElement("button");

    divStock.appendChild(pStock);
    divStock.appendChild(buttonAddStock);
    divStock.appendChild(buttonRemoveStock);

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(pIsbn);
    div.appendChild(divStock);

    li.appendChild(div);

    h1.innerText = livre.getLiTitle();
    p.innerText = livre.description;
    pIsbn.innerText = livre.getPIsbn();
    pStock.innerText = livre.getPStock();
    buttonAddStock.innerText = "Ajouter";
    buttonRemoveStock.innerText = "Supprimer";

    buttonAddStock.addEventListener("click", () => {
      livre.stock += 1;
      pStock.innerText = livre.getPStock();
      buttonRemoveStock.removeAttribute("disabled");
    });

    buttonRemoveStock.addEventListener("click", () => {
      livre.stock -= 1;
      pStock.innerText = livre.getPStock();
      if (livre.stock === 0)
        buttonRemoveStock.setAttribute("disabled","");
    });

    return li;
  }

  let initialStock = [
    new Livre(
      "L’Etranger","Albert Camus",
      1942,
      "L'Étranger est le premier roman publié d’Albert Camus",
      12345,
      5
    ),
    new Livre(
      "Vingt mille lieues sous les mers",
      "Jules Verne",
      1870,
      "Vingt Mille Lieues sous les mers est un roman d'aventures de Jules Verne, paru en 1869-1870. Il relate le voyage de trois naufragés capturés par le capitaine Nemo, mystérieux inventeur qui parcourt les fonds des mers à bord du Nautilus, un sous-marin très en avance sur les technologies de l'époque.",
      976150,
      3
    ),
  ]

  let ulElt = document.getElementById("stockDisplay");

  for (let livre of initialStock) {
    let li = buildLi(livre);
    ulElt.appendChild(li);
  }

  let form = document.querySelector("form");
  let buttonSubmit = document.getElementById("submit");

  let titreInput = document.getElementById("titre");
  let auteurInput = document.getElementById("auteur");
  let dateInput = document.getElementById("date");
  let descriptionInput = document.getElementById("description");
  let isbnInput = document.getElementById("isbn");

  buttonSubmit.addEventListener("click", (e) => {
    if (form.checkValidity()) {
      let titre = titreInput.value;
      let auteur = auteurInput.value;
      let date = dateInput.value;
      let description = descriptionInput.value;
      let isbn = isbnInput.value;
      let newLivre = new Livre(titre,auteur,date,description,isbn,1);
      
      let li = buildLi(newLivre);
      ulElt.appendChild(li);

      e.preventDefault();
      form.reset();
    }
  })

})();