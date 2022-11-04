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

export {askForNumber, askForPositiveNumber};