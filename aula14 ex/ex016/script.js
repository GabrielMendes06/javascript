let lista = []
function listar(){
    const num = document.querySelector('#numero')
    const valor = num.value
    if (valor < 1 || valor > 100) {
        alert('ERRO, por favor, digite um número entre 1 e 100')
    } else {
        lista.unshift(+valor)
        console.log(lista)
    }
}

