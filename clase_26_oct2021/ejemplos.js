let bot = document.getElementById('boton')
let inp = document.getElementById('input')

boton.addEventListener('mouseover', function () {
    boton.style.background  = 'black'
    boton.style.width = '223px'
    boton.style.height = '223px'
})

boton.addEventListener('mouseout', function () {
    boton.style.background  = 'green'
    boton.style.width = '100px'
    boton.style.height = '123px'
})

inp.addEventListener('focus', function () {
    input.style.background  = 'lightblue'
    input.style.width = '223px'
    input.style.height = '223px'
})

inp.addEventListener('blur', function () {
    input.style.background  = 'blue'
    input.style.width = '300px'
    input.style.height = '23px'
})

inp.addEventListener('keypress', function () {
    input.style.background  = 'yellow'
    input.style.width = '503px'
    input.style.height = '123px'
})

inp.addEventListener('keyup', function () {
    input.style.background  = 'red'
    input.style.width = '400px'
    input.style.height = '34px'
})

inp.addEventListener('keypress', function (e) {
    console.log(`pulsando la tecla ${String.fromCharCode(e.keyCode)}`)
})

inp.addEventListener('keyup', function (e) {
    console.log(`dejando de pulsar la tecla ${String.fromCharCode(e.keyCode)}`)
})