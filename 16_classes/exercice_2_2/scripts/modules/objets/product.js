class Produit {
  #description
  #prix
  #categorie
  constructor(description, prix, categorie) {
    this.description = description;
    this.prix = prix;
    this.categorie = categorie;
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    this.#description = value;
  }

  get prix() {
    return this.#prix;
  }

  set prix(value) {
    if (value < 0) {
      throw new Error("Le prix ne peux pas être négatif");
    }
    this.#prix = value;
  }

  get categorie() {
    return this.#categorie;
  }

  set categorie(value) {
    this.#categorie = value;
  }

  prixAvecReduction() {
    return this.prix * (1-this.categorie.tauxReduction/100);
  }

  getHtmlContent() {
    return `<h2>${this.categorie.titre}</h2>
            <p>${this.description} : <strike>${this.prix}</strike> ${this.prixAvecReduction()} € (-${this.categorie.tauxReduction}%)</p>`;
  }

  static productsOfCategory(products,category){
    return products.filter(p => p.categorie === category);
  }

  static getMostExpensiveProduct(products, maxPrice) {
    products.sort((p,q) => q.prixAvecReduction() - p.prixAvecReduction());
    for (let p of products)
      if (p.prixAvecReduction() <= maxPrice) 
        return p
    return null;
  }
}

export {Produit};