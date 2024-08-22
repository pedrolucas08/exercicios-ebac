const html = document.querySelector("html");
const button = document.querySelector("#toggle-theme");

button.addEventListener("click", () => {
  html.classList.toggle("dark-mode");
});
