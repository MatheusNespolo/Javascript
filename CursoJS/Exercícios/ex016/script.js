function contar() {
    var start = document.getElementById('inicio')
    var end = document.getElementById('fim')
    var step = document.getElementById('passo')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) { //Verificação de campos vazios
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Preencha as entradas!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(start.value)
        var f = Number(end.value)   //Conversão de string para número
        var p = Number(step.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (var c = i; c <= f; c += p) {   // Começo menor que o final para teste
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for (var c = i; c >= f; c -= p) {   // Começo maior que o final para teste
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}