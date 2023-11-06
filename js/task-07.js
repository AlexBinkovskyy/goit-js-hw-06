const input = document.querySelector('#font-size-control');
const sample = document.querySelector('#text');
input.addEventListener('input', changeFont)
sample.style.fontSize = `${input.value}px`;

function changeFont (event)  {
   sample.style.fontSize = `${event.currentTarget.value}px`
}
