function calcular(tipo, valor) {
  if (tipo === "acao") {
    if (valor === "c") {
      //limpa o campo input
      document.getElementById("resultado").value = "";
    } else if (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/" ||
      valor === "."
    ) {
      //atribui o tipo da operação ao campo input
      document.getElementById("resultado").value += valor;
    } else if (valor === "=") {
      //realiza o calculo em string utilizando eval method
      var resultado_operacao = eval(document.getElementById("resultado").value);

      //atribui o resutlado da operação ao campo input
      document.getElementById("resultado").value = resultado_operacao;
    }
  } else if (tipo === "valor") {
    // atribui os valores númericos ao campo input
    document.getElementById("resultado").value += valor;
  }
}
