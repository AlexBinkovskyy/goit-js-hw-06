function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const destinationBox = document.querySelector("#boxes");
const controls = document.querySelector("#controls");
const inputField = controls.firstElementChild;

function createBoxes() {
  const numberOfBoxes = parseInt(inputField.value);
  for (let i = 0, j = 30; i < numberOfBoxes; i++, j += 10) {
    const item = document.createElement("div");
    j = j++
    item.style.marginTop = "10px";
    item.style.width = `${j}px`;
    item.style.height = `${j}px`;
    item.style.backgroundColor = getRandomHexColor();
    destinationBox.append(item);
  }
}

function destroyBoxes() {
  destinationBox.innerHTML = "";
}

const createBtn = document.querySelector("button[data-create]");
createBtn.addEventListener("click", createBoxes);

const destroyBtn = document.querySelector("button[data-destroy]");
destroyBtn.addEventListener("click", destroyBoxes);
