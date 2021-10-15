//condicionales multiples

let fruta = prompt("ingrese fruta")

fruta = fruta.toLocaleLowerCase()

if (fruta === 'mango') {
    alert(`el precio de la fruta ${fruta} es 8.000`);
} else if (fruta === 'banano') {
    alert(`el precio de la fruta ${fruta} es 5.000`);
} else if (fruta === 'papaya') {
    alert(`el precio de la fruta ${fruta} es 12.000`);
} else {
    alert(`la fruta ingresada esta agotada`);
}

//condicional ternario multiple

fruta === 'mango' ?
    alert(`el precio de la fruta ${fruta} es 8.000`)
    : fruta === 'banano' ?
        alert(`el precio de la fruta ${fruta} es 5.000`)
        : fruta === 'papaya' ?
            alert(`el precio de la fruta ${fruta} es 12.000`)
            : alert(`la fruta ingresada esta agotada`)