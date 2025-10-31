import { templates } from "./templates.js";
import { formValidator } from "./formValidator.js";

export function router() {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  function navigate(page) {
    main.innerHTML = templates[page];
    localStorage.setItem("lastPage", page);
    
    updateActiveLink(page);
    updatePageTitle(page);
    main.focus();

    if (page === "cadastro") formValidator();
  }

  function updateActiveLink(currentPage) {
    links.forEach(link => {
      const route = link.getAttribute("data-route");
      if (route === currentPage) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function updatePageTitle(page) {
    const titles = {
      home: "ONG Esperança Viva - Início",
      projetos: "ONG Esperança Viva - Projetos",
      cadastro: "ONG Esperança Viva - Cadastro de Voluntário"
    };
    document.title = titles[page] || "ONG Esperança Viva";
  }

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href").replace(".html", "");
      navigate(href);
      window.history.pushState({}, "", href);
    });
  });

  window.addEventListener("popstate", () => {
    const page = location.pathname.replace("/", "") || "index";
    navigate(page);
  });

  const last = localStorage.getItem("lastPage") || "home";
  navigate(last);
}
