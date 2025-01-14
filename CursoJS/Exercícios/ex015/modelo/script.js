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
    if (sexSec[0].checked) {
        genero = 'homem'
    } else if (sexSec[1].checked) {
        genero = 'mulher'
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}