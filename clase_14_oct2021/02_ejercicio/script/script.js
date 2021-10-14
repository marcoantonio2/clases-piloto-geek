//condicionales dobles

let num = Number(prompt("ingrese número"))

if (num % 2 === 0) {
    alert(`el número ${num} es par`)
} else {
    alert(`el número ${num} es impar`)
}

// condicional ternario doble

num = Number(prompt("ingrese número"))

num % 2 === 0 ?
alert(`el número ${num} es par`) :
alert(`el número ${num} es impar`)