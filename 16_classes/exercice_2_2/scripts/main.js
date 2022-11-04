/*
2) Reprendre les exercices 2 et 3 de la partie sur les objets en utilisant
des classes, en utilisant des accesseurs.

(3 Objets)
*/

import {Categorie} from "./modules/objets/categorie.js";
import {Produit} from "./modules/objets/product.js";

import {askForPositiveNumber} from "./modules/tools/input.js"

(function() {

  function getMaxPrice() {
    return askForPositiveNumber("Quel est votre budget ?");
  }

  let catInfo = new Categorie("informatique",20);
  let catHygiene = new Categorie("hygiène",10);
  let catNourriture = new Categorie("nourriture",5);

  let categories = [
    catInfo, catHygiene, catNourriture
  ];

  let produits = [
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
    let div = document.createElement("div");

    let productOfCat = Produit.productsOfCategory(produits,cat);
    let productToDisplay = Produit.getMostExpensiveProduct(productOfCat,budget);
    if (productToDisplay === null)
      div.innerHTML = cat.getHtmlContentNoProductFound();
    else
      div.innerHTML = productToDisplay.getHtmlContent();
    
    mainDiv.appendChild(div);
  }
  
})();