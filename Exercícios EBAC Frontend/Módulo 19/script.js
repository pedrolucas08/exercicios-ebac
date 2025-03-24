let produtos = document.querySelectorAll(".produtos__produto");

produtos.forEach((produto) => {
  produto.addEventListener("click", () => {
    produto.classList.toggle("produto--em-destaque");
  });
});
