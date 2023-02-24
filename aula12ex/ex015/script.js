function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
        if  (idade >= 0 && idade < 6) {
                //Bebê
                img.setAttribute('src','imagens/bebe-homem.jpg')
            } else if (idade < 12) {
                //Criança
                img.setAttribute('src','imagens/criança-homem.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','imagens/jovem-homem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','imagens/adulto-homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src','imagens/idoso-homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if  (idade >= 0 && idade < 6) {
                //Bebê
                img.setAttribute('src', 'imagens/bebe-mulher.jpg')
            } else if (idade < 12) {
                //Criança
                img.setAttribute('src', 'imagens/criança-mulher.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/a-mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/i-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }   
}   