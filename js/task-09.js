const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color')
changeColorBtn.addEventListener("click", getRandomHexColor)

function getRandomHexColor() {
  body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
 }

