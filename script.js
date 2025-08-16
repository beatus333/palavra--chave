const botaoSeparar = document.querySelector("#botao-separar");

botaoSeparar.addEventListener("click", gerarSeparacao);

function gerarSeparacao() {
  const textoBruto = document.querySelector("#campo-input").value;
  const campoLista = document.querySelector("#area-lista");
  const listaPalavras = criarListaDePalavras(textoBruto);
  campoLista.textContent = listaPalavras.join(" · ");
}

function criarListaDePalavras(texto) {
  // Divide usando RegExp e filtra resultados vazios
  return texto.split(/\P{L}+/u).filter(word => word.length > 0);
}
