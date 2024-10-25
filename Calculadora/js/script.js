function limpar(){
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").innerText = "";
}
function calcularSoma(){
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var soma = parseFloat(num1) + parseFloat(num2);
    document.getElementById("resultado").innerText = soma;
}
function calcularSub(){
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var sub = parseFloat(num1) - parseFloat(num2);
    document.getElementById("resultado").innerText = sub;
}
function calcularMulti(){
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var multi = parseFloat(num1) * parseFloat(num2);
    document.getElementById("resultado").innerText = multi;
}
function calcularDiv(){
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var div = parseFloat(num1) / parseFloat(num2);
    document.getElementById("resultado").innerText = div;
}