var operandoa;
var operandob;
var operacion;

function init() {
    var resultado = document.getElementById('resul');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multi = document.getElementById('multi');
    var div = document.getElementById('div');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
}

uno.onclick = function (e) {
    resultado.textcontent = resultado.textcontent + "1";
}

dos.onclick = function (e) {
    resultado.textcontent = resultado.textcontent + "2";
}

tres.onclick = function (e) {
    resultado.textcontent = resultado.textcontent + "3";
}

cuatro.onclick = function (e) {
    resultado.textcontent = resultado.textcontent + "4";
}

cinco.onclick = function (e) {
    resultado.textcontent = resultado.textcontent + "5";
}

seis.onclick = function (e) {
    resultado.textcontent = resultado.textcontent + "6";
}

siete.onclick = function (e) {
    resultado.textcontent = resultado.textcontent + "7";
}

ocho.onclick = function (e) {
    resultado.textcontent = resultado.textcontent + "8";
}

nueve.onclick = function (e) {
    resultado.textcontent = resultado.textcontent + "9";
}

cero.onclick = function (e) {
    resultado.textcontent = resultado.textcontent + "0";
}

suma.onclick = function (e) {
    operandoa = resultado.textcontent;
    operacion = "+";
    limpiar();
}

resta.onclick = function (e) {
    operandoa = resultado.textcontent;
    operacion = "-";
    limpiar();
}

multi.onclick = function (e) {
    operandoa = resultado.textcontent;
    operacion = "*";
    limpiar();
}

div.onclick = function (e) {
    operandoa = resultado.textcontent;
    operacion = "/";
    limpiar();
}

igual.onclick = function (e) {
    operandob = resultado.textcontent;
    limpiar();
}

function limpiar() {
    resultado.textcontent = "";
}

function resetear(params) {
    resultado.textcontent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob)
            break
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob)
            break
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob)
            break
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob)
            break

    }
    resetear();
    resultado.textcontent = res
}
