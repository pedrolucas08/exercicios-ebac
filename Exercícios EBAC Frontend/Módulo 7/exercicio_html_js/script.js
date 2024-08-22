document.addEventListener("DOMContentLoaded", () => {
  const inputA = document.getElementById("number-a");
  const inputB = document.getElementById("number-b");
  const button = document.getElementById("button");
  const mensagem = document.getElementById("mensagem");

  function compararValores() {
    const valorA = parseFloat(inputA.value);
    const valorB = parseFloat(inputB.value);

    const mensagemPositiva = "O Campo B tem um número maior que o Campo A";
    const mensagemErro = "O Campo B tem que tem um número maior que o Campo A";
    const mensagemErro2 =
      "Os valores são iguais, mas o valor do Campo B deve ser maior que o valor do Campo A";

    if (!isNaN(valorA) && !isNaN(valorB)) {
      if (valorB < valorA) {
        button.disabled = true;
        button.style.backgroundColor = "#00ff0021";
        mensagem.classList.remove("positivo");
        mensagem.classList.add("erro");
        mensagem.textContent = mensagemErro;
      } else if (valorA === valorB) {
        button.disabled = true;
        button.style.backgroundColor = "#00ff0021";
        mensagem.classList.remove("positivo");
        mensagem.classList.add("erro");
        mensagem.textContent = mensagemErro2;
      } else {
        button.disabled = false;
        button.style.backgroundColor = "#00ff00b5";
        mensagem.classList.remove("erro");
        mensagem.classList.add("positivo");
        mensagem.textContent = mensagemPositiva;
      }
    } else {
      mensagem.classList.remove("positivo");
      mensagem.classList.remove("erro");
      mensagem.textContent = "";
    }
  }

  inputA.addEventListener("input", compararValores);
  inputB.addEventListener("input", compararValores);
});
