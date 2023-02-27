function calcular() {
  let num = document.querySelector("#num");
  let res = document.querySelector("#tabuada");
  res.innerText = ''  
  for (let contador = 1; contador <= 10; contador++) { 
    if (num.value.length == 0) {
      alert("Digite um número, por favor");
      return;
    }
    let resposta = num.value * contador;
    let multiplicacao = document.createElement("p");
    multiplicacao.innerText = `${num.value} x ${contador} = ${resposta}`;
    res.appendChild(multiplicacao);
    
  }
}
