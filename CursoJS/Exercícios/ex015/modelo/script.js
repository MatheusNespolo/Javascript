function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoNasc = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    var img = window.document.getElementById('foto')
if (anoNasc.value.length == 0 || anoNasc.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    var sexSec = window.document.getElementsByName('radsex')
    var idade = ano - Number(anoNasc.value)
    res.innerHTML = `Idade calculada: ${idade}`
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sexSec[0].checked) {
        genero = 'homem'
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'criancaM.jpg')
        } else if (idade >= 10 && idade < 25) {
            // Jovem
            img.setAttribute('src', 'jovemM.jpg')
        } else if (idade >= 25 && idade < 50) {
            // Adulto
            img.setAttribute('src', 'adultoM.jpg')
        } else {
            // Idoso
            img.setAttribute('src', 'idosoM.jpg')
        }
    } else if (sexSec[1].checked) {
        genero = 'mulher'
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'criancaF.jpg')
        } else if (idade >= 10 && idade < 25) {
            // Jovem
            img.setAttribute('src', 'jovemF.jpg')
        } else if (idade >= 25 && idade < 50) {
            // Adulto
            img.setAttribute('src', 'adultoF.jpg')
        } else {
            // Idoso
            img.setAttribute('src', 'idosoF.jpg')
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
}