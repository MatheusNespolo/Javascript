function tabuada() {
    var num = document.getElementById('numero')
    var res = document.getElementById('resultado')

    if (num.value.length == 0) {    // Verificação de campo vazio
        res.innerHTML = 'Impossível calcular a tabuada! Digite um número.'
    } else {
        res.innerHTML = ''  // Limpa o campo de resultado para a nova tabuada
        var n = Number(num.value)   // Conversão de string para número
        for (var i = 1; i <= 10; i++) {
            res.innerHTML += `${n} x ${i} = ${n * i}\n`
        }
    }
}