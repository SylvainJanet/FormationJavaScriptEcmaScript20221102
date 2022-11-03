let para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  let name = prompt("A qui dire Hello ?");
  para.textContent = "Hello " + name + " !";
}