const botoes = document.querySelectorAll(".btn-pix");

botoes.forEach(botao => {
  botao.addEventListener("click", async () => {
    const texto = botao.innerText.trim();

    await navigator.clipboard.writeText(texto);

    botao.innerText = "Copiado!";

    setTimeout(() => {
      botao.innerText = texto;
    }, 2000);
  });
});