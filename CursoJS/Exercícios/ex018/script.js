function adicionar() {
    var num = document.getElementById('numero')
    var updt = document.getElementById('atualizado')
    let lista = []

    if (Number(num.value) < 1 || Number(num.value) > 100) {
        alert('Por favor, insira um número entre 1 e 100!')
    } else {
        lista.push(Number(num.value))
        updt.innerHTML += `O número ${num.value} foi adicionado.\n`
    }
}

function finalizar() {
    var num = document.getElementById('numero')
    var res = document.getElementById('resultado')
    let lista = []

    if (lista.length == 0) {
        alert('Por favor, adicione um número antes de finalizar!')
    } else {
        res.innerHTML += `O maior número é ${Math.max.apply(null, lista)}.\n`
        res.innerHTML += `O menor número é ${Math.min.apply(null, lista)}.\n`
        res.innerHTML += `A soma dos números é ${lista.reduce((a, b) => a + b, 0)}.\n`
        res.innerHTML += `A média dos números é ${lista.reduce((a, b) => a + b, 0) / lista.length}.\n`
    }
}
