let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let numbersIndex = Math.floor(Math.random() * numbers.length);

  return numbers[numbersIndex];
}

let generateRandomSuit = () => {
  let suit = ["spade", "club", "heart", "diamond"];
  let suitIndex = Math.floor(Math.random() * suit.length);

  return suit[suitIndex];
}

window.onload = () => {
    document.querySelector('.card').classList.remove('spade');
    document.querySelector('.card').classList.add(generateRandomSuit());
    document.querySelector('.cardNumber').innerHTML = generateRandomNumber();
};