function adicionar() {
    var num = document.getElementById('numero')
    var updt = document.getElementById('atualizado')
    let lista = []

    if ((Number(num.value) in lista)) {
        alert('Número já adicionado!')
    } else if (num.value.length == 0) {
        alert('Por favor, insira um número!')
    } else {
        lista.push(Number(num.value))
        updt.innerHTML += `O número ${num.value} foi adicionado.\n`
    }
}

function finalizar() {

}