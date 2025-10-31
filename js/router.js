import { templates } from "./templates.js";
import { formValidator } from "./formValidator.js";

export function router() {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  function navigate(page) {
    main.innerHTML = templates[page];
    localStorage.setItem("lastPage", page);

    // ativa validação se estiver no formulário
    if (page === "cadastro") formValidator();
  }

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href").replace(".html", "");
      navigate(href);
      window.history.pushState({}, "", href);
    });
  });

  // suporte ao botão Voltar/Avançar do navegador
  window.addEventListener("popstate", () => {
    const page = location.pathname.replace("/", "") || "index";
    navigate(page);
  });

  // carrega última página visitada ou home
  const last = localStorage.getItem("lastPage") || "home";
  navigate(last);
}
