const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const pass = form.password.value;
  if (!email || !pass) {
    window.alert("Не заповнені усі необхідні поля");
  } else {
    const result = { [form.email.name]: email, [form.password.name]: pass };
    console.log(result);
    form.reset();
  }
}
