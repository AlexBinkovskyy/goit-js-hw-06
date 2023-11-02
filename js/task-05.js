const input = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const helloFn = (event) => {
  if (event.target.value.length !== 0) {
    outputName.textContent = event.target.value;
  } else {
    outputName.textContent = "Anonymous";
  }
};

input.addEventListener("input", helloFn);
