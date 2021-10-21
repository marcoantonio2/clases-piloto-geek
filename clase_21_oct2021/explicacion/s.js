//funcion simple sin retorno

function imprimirM() {
    console.log(`funcion simple sin retorno`);
}

imprimirM();

//función simple con retorno

function calcProm(Num1, Num2, num3) {
    let Prom = (Num1 + Num2 + num3) / 3;
    return `El promedio es: ${Prom.toFixed(2)}`;
}

console.log (calcProm(5, 2, 3))

//funcion anonima

const calcSuma = function(Num1,Num2) {
    let total = Num1 + Num2
    return total
}

console.log(calcSuma(12,40))