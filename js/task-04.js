const counter = document.querySelector("#counter");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");

const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

// додав заборону від"ємних значень умовою if
function decrementValue() {
  if (counterValue > 0) {
    counterValue -= 1;
    value.textContent = counterValue;
  }
}
function incrementValue() {
  counterValue += 1;
  value.textContent = counterValue;
}
decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);
