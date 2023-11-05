function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const item = document.createElement("div");
    item.style.marginTop = "10px";
    item.style.width = "30px";
    item.style.height = "30px";
    item.style.backgroundColor = getRandomHexColor();
    destinationBox.append(item);
  }
}

function destroyBoxes() {
  destinationBox.innerHTML = "";
}

function GetNumber(ivent) {
 return parseInt(ivent.target.value);
}
const input = () => controls.firstElementChild.addEventListener("input", GetNumber);

const destinationBox = document.querySelector("#boxes");
const controls = document.querySelector("#controls");
console.log('input', input.value);

const createBtn = document.querySelector("button[data-create]");
createBtn.addEventListener("click", () => {const numberOfBoxes = input.value; createBoxes(numberOfBoxes)})
// createBoxes(5)

const destroyBtn = document.querySelector('button[data-destroy]')
destroyBtn.addEventListener('click', destroyBoxes)


