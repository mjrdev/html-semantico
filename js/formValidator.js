export function formValidator() {
  const form = document.querySelector("#formCadastro");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll("input[required]").forEach(input => {
      const error = input.nextElementSibling;
      if (input.value.trim() === "" || !input.checkValidity()) {
        input.classList.add("erro");
        if (error && error.classList.contains("msg-erro")) error.remove();
        input.insertAdjacentHTML("afterend", `<span class="msg-erro">Campo inválido!</span>`);
        valid = false;
      } else {
        input.classList.remove("erro");
        const old = input.parentNode.querySelector(".msg-erro");
        if (old) old.remove();
      }
    });

    if (valid) {
      alert("Cadastro enviado com sucesso!");
      form.reset();
    }
  });
}
