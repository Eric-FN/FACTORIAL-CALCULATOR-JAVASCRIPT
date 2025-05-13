document.getElementById("send-button").addEventListener("click", (e) => {
  e.preventDefault();

  const valorInteiro = Number(document.getElementById("numeroInteiro").value);

  if (valorInteiro < 0 || valorInteiro > 10 || isNaN(valorInteiro)) {
    alert("Insira um valor válido");
    return;
  }

  const cFatorial = (n) => {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      // console.log(`${resultado} × ${i} = ${resultado * i}`);
      resultado *= i;
    }
    return resultado;
  };
  const calcular = cFatorial(valorInteiro);

  document.getElementById(
    "section-select"
  ).textContent = `O fatorial de ${valorInteiro} é ${calcular}.`;
});
