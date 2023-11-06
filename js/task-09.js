const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color')
changeColorBtn.addEventListener("click", getRandomHexColor)
const resultBox = document.querySelector('.color')


function getRandomHexColor() {
  body.style.backgroundColor = resultBox.textContent = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    
 }

