let lista = [];
function listar() {
  let num = document.querySelector("#numero");
  let valor = num.value;
  if (valor < 1 || valor > 100) {
    alert("ERRO, por favor, digite um número entre 1 e 100");
  } else {
    lista.push(Number(valor));
    console.log(lista);
    document.querySelector('#numero').value = null    
  } 
}