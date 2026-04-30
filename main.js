let rollDice = document.querySelector("#dice");
let adviceNumber = document.querySelector("#number");
let adviceText = document.querySelector("#advice");

let getAdvice = async () => {
  rollDice.classList.toggle("rotate-180");
  rollDice.classList.add("animate-bounce");
  setTimeout(() => {
    rollDice.classList.remove("animate-bounce");
  }, 4000);
  let givenAdvice = await fetch("https://api.adviceslip.com/advice");
  let translatedAdvice = await givenAdvice.json();
  console.log(translatedAdvice);

  adviceNumber.textContent = `Advice #${translatedAdvice.slip.id}`;
  adviceText.textContent = `${translatedAdvice.slip.advice}`;
};

getAdvice();
rollDice.addEventListener("click", getAdvice);

// rollDice.addEventListener("click", async () => {
//   rollDice.classList.toggle("rotate-0");
//   rollDice.classList.toggle("rotate-180");

//   let givenAdvice = await fetch("https://api.adviceslip.com/advice");
//   let translatedAdvice = await givenAdvice.json();

//   adviceNumber.textContent = `Advice #${translatedAdvice.slip.id}`;
//   adviceText.textContent = `${translatedAdvice.slip.advice}`;
// });
