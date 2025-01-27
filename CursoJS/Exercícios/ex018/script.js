// Declaração de variáveis fora das funções é uma boa prática de programação para evitar problemas de escopo.

var num = document.getElementById('numero')
var updt = document.getElementById('atualizado')
var res = document.getElementById('resultado')
let lista = []
var soma = 0

function adicionar() { // Função para adicionar valores à lista.

    if (Number(num.value) < 1 || Number(num.value) > 100) {
        alert('Por favor, insira um número entre 1 e 100!')
    } else if (lista.indexOf(Number(num.value)) > -1) { // indexOf retorna -1 se o valor não for encontrado.
        alert('Valor já adicionado!')
    } else {
        lista.push(Number(num.value))
        updt.innerHTML += `Valor ${num.value} adicionado.\n`
        soma += Number(num.value)
    }
    num.value = ''

}

function finalizar() { // Função para finalizar a lista e mostrar os resultados.

    res.innerHTML = ''

    res.innerHTML += `Ao todo, temos ${lista.length} números cadastrados.\n`
    res.innerHTML += `O maior valor informado foi ${Math.max.apply(null, lista)}.\n`
    res.innerHTML += `O menor valor informado foi ${Math.min.apply(null, lista)}.\n`
    res.innerHTML += `Somando todos os valores, temos ${soma}.\n`

    updt.innerHTML = ''
}
