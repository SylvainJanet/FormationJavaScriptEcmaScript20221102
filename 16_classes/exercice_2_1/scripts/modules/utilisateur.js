class Utilisateur {
  #nom;
  #email;
  #age;
  constructor(nom, email, age) {
    this.nom = nom;
    this.email = email;
    this.age = age;
  }

  get nom() {
    return this.#nom;
  }

  set nom(value) {
    this.#nom = value;
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    this.#email = value;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (value <0) {
      throw new Error("L'age ne peut pas être négatif");
    }
    this.#age = value;
  }

  sePresenter() {
    return `Je suis ${this.nom}. J'ai ${this.age} ans, et mon email est ${this.email}`; 
  };

  displayHtml() {
    return `<strong>${this.nom}</strong><p>${this.sePresenter()}</p>`;
  }
};

let initialUsers = [
  new Utilisateur("Sylvain","sjanet@jehann.fr",30),
  new Utilisateur("Chloe","chloeTheBest@gmail.com",22),
  new Utilisateur("Marjorie","marjobarjo@flageolets.fr",99),
  new Utilisateur("Océane","oceane@ministere.gouv.fr",12),
];

export {Utilisateur, initialUsers};