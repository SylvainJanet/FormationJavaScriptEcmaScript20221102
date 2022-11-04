/*
3) Problème : on a une liste de produits qui sont définis par une description,
un prix, une catégorie. Créer une liste d'une dizaine de produits, avec quelques catégories
différentes. 
C'est les soldes, mais chaque catégorie de produit a son propre taux de réduction.
Demander à l'utilisateur le prix maximum qu'il est prêt à payer, et afficher
dans une page HTML le produit le plus cher de chaque catégorie (avec la réduction appliquée)
qui est disponible.
*/

(function() {

  function Categorie(titre, tauxReduction) {
    this.titre = titre;
    this.tauxReduction = tauxReduction;
  }

  function Produit(description, prix, categorie) {
    this.description = description;
    this.prix = prix;
    this.categorie = categorie;
  }

  Produit.prototype.prixAvecReduction = function () {
    return this.prix * (1-this.categorie.tauxReduction/100);
  }

  function getHtmlContentForProduct(produit) {
    return `<h2>${produit.categorie.titre}</h2>
            <p>${produit.description} : <strike>${produit.prix}</strike> ${produit.prixAvecReduction()} € (-${produit.categorie.tauxReduction}%)</p>`;
  }

  function getHtmlContentNoProductFound(category) {
    return `<h2>${category.titre}</h2>
            <p>Aucun produit trouvé</p>`
  }

  function askForNumber(message) {
    let choice;
    do {
      choice = +prompt(message);
    } while (isNaN(choice));
    return choice;
  }
  
  function askForPositiveNumber(message) {
    let choice;
    do {
      choice = askForNumber(message);
    } while (choice <= 0);
    return choice;
  }

  function getMaxPrice() {
    return askForPositiveNumber("Quel est votre budget ?");
  }

  function productsOfCategory(products,category){
    return products.filter(p => p.categorie === category);
  }

  function getMostExpensiveProduct(products, maxPrice) {
    products.sort((p,q) => q.prixAvecReduction() - p.prixAvecReduction());
    console.log(products);
    for (p of products)
      if (p.prixAvecReduction() <= maxPrice) 
        return p
    return null;
  }

  let catInfo = new Categorie("informatique",20);
  let catHygiene = new Categorie("hygiène",10);
  let catNourriture = new Categorie("nourriture",5);

  categories = [
    catInfo, catHygiene, catNourriture
  ];

  produits = [
    new Produit("souris",10,catInfo),
    new Produit("PC DELL",1850,catInfo),
    new Produit("clavier",25,catInfo),
    new Produit("savon",5,catHygiene),
    new Produit("PQ",10,catHygiene),
    new Produit("lessive",20,catHygiene),
    new Produit("pomme",1,catNourriture),
    new Produit("kiwi",2,catNourriture),
    new Produit("poulet",10,catNourriture),
    new Produit("radis",5,catNourriture),
  ]

  let budget = getMaxPrice();

  let mainDiv = document.getElementById("productSelection");

  for (let cat of categories) {
    div = document.createElement("div");

    let productOfCat = productsOfCategory(produits,cat);
    let productToDisplay = getMostExpensiveProduct(productOfCat,budget);
    if (productToDisplay === null)
      div.innerHTML = getHtmlContentNoProductFound(cat);
    else
      div.innerHTML = getHtmlContentForProduct(productToDisplay);
    
    mainDiv.appendChild(div);
  }
  
})();