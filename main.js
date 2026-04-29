let rollDice = document.querySelector("#dice");
let adviceNumber = document.querySelector("#number");
let adviceText = document.querySelector("#advice");

let getAdvice = async () => {
  let givenAdvice = await fetch("https://api.adviceslip.com/advice");
  let translatedAdvice = await givenAdvice.json();
  console.log(translatedAdvice);

  adviceNumber.textContent = `Advice #${translatedAdvice.slip.id}`;
  adviceText.textContent = `${translatedAdvice.slip.advice}`;
};

getAdvice();
rollDice.addEventListener("click", getAdvice);
