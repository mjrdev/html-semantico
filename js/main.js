import { router } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
  // inicializa SPA
  router();

  // menu hambúrguer (mobile)
  const btnMenu = document.createElement("button");
  btnMenu.id = "menu-btn";
  btnMenu.textContent = "☰";
  document.querySelector("header").prepend(btnMenu);

  btnMenu.addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("aberto");
  });
});
