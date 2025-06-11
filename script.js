document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const msgDisplay = document.getElementById("form-msg");

  if (name && email && message) {
    msgDisplay.textContent = `Obrigado pela mensagem, ${name}! Responderemos em breve.`;
    msgDisplay.style.color = "#C8B560";
    this.reset();
  } else {
    msgDisplay.textContent = "Por favor, preencha todos os campos.";
    msgDisplay.style.color = "red";
  }
});
