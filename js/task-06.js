const input = document.querySelector("input");
input.addEventListener("blur", valid);
function valid() {
  if (input["value"].length !== parseInt(input.getAttribute("data-length"))) {
    input.classList.add("invalid");
  } else {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
}

