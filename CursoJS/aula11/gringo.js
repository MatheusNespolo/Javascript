function coe(){
    var nacao = document.getElementById('país').value
    var res = document.getElementById('res')
    if (nacao != 'Brasil'){
        res.innerHTML = 'gringo'
    } else {
        res.innerHTML = 'brazuca'
    }
}