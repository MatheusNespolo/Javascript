function contar() {
    var start = document.getElementById('inicio')
    var end = document.getElementById('fim')
    var step = document.getElementById('passo')

    for (var c = start.value; c <= end.value; step++) {
        res.innerHTML = `Contando: ${c}`
    }
}