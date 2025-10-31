export function formValidator() {
  const form = document.querySelector("#formCadastro");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    let firstInvalidField = null;

    form.querySelectorAll("input[required]").forEach(input => {
      const errorId = `${input.id}-error`;
      let existingError = document.getElementById(errorId);
      
      if (input.value.trim() === "" || !input.checkValidity()) {
        input.classList.add("erro");
        input.setAttribute("aria-invalid", "true");
        
        if (existingError) existingError.remove();
        
        const errorMessage = getErrorMessage(input);
        input.insertAdjacentHTML("afterend", 
          `<span id="${errorId}" class="msg-erro" role="alert" aria-live="polite">${errorMessage}</span>`
        );
        
        if (!firstInvalidField) firstInvalidField = input;
        valid = false;
      } else {
        input.classList.remove("erro");
        input.setAttribute("aria-invalid", "false");
        if (existingError) existingError.remove();
      }
    });

    if (valid) {
      const successMessage = document.createElement("div");
      successMessage.setAttribute("role", "alert");
      successMessage.setAttribute("aria-live", "polite");
      successMessage.className = "success-message";
      successMessage.textContent = "Cadastro enviado com sucesso!";
      
      form.insertBefore(successMessage, form.firstChild);
      form.reset();
      
      setTimeout(() => {
        if (successMessage.parentNode) {
          successMessage.remove();
        }
      }, 5000);
    } else if (firstInvalidField) {
      firstInvalidField.focus();
    }
  });

  function getErrorMessage(input) {
    const fieldName = input.getAttribute("name");
    const fieldLabels = {
      nome: "Nome completo",
      email: "Email",
      cpf: "CPF",
      telefone: "Telefone"
    };
    
    if (input.value.trim() === "") {
      return `${fieldLabels[fieldName]} é obrigatório.`;
    }
    
    if (input.type === "email" && !input.checkValidity()) {
      return "Digite um email válido.";
    }
    
    if (fieldName === "cpf" && !input.checkValidity()) {
      return "Digite um CPF válido no formato 000.000.000-00.";
    }
    
    return `${fieldLabels[fieldName]} inválido.`;
  }
}
