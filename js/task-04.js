const counter = document.querySelector("#counter");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");

const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

function decrementValue() {
  
    counterValue -= 1;
    value.textContent = counterValue;
  }

function incrementValue() {
  counterValue += 1;
  value.textContent = counterValue;
}
decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);
