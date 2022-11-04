class Categorie {
  #titre;
  #tauxReduction;
  constructor(titre, tauxReduction) {
    this.titre = titre;
    this.tauxReduction = tauxReduction;
  }

  get titre() {
    return this.#titre;
  }

  set titre(value) {
    this.#titre = value;
  }

  get tauxReduction() {
    return this.#tauxReduction;
  }

  set tauxReduction(value) {
    if (value < 0 || value > 100) {
      throw new Error("Taux de réduction incorrect");
    }
    this.#tauxReduction = value;
  }

  getHtmlContentNoProductFound() {
    return `<h2>${this.titre}</h2>
            <p>Aucun produit trouvé</p>`
  }
}

export {Categorie};