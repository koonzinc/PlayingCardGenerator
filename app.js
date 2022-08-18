import './style.css';

window.onload = () => {
  document.getElementById('card').classList.remove("card club");
  document.getElementById('card').classList.add(`card ${generateRandomSuit()}`);

  document.getElementById("cardNum").innerHTML = generateRandomNumber();
};

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