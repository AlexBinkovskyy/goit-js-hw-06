const input = document.querySelector('#font-size-control');
const sample = document.querySelector('#text');
input.addEventListener('change', changeFont)

function changeFont (event)  {
   sample.style.fontSize = `${event.currentTarget.value}px`
}
