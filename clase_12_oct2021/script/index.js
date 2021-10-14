import {Suma} from './Ejercicio1.js'
import {Multiplicacion} from './Ejercicio2.js'

let bntEJ1 = document.getElementById('Ej1')
let btnEj2 = document.querySelector('#Ej2')
let resultado = document.querySelector('#resultado')
let num1 = document.querySelector('#num1').value
let num2 = document.querySelector('#num2').value


bntEJ1.addEventListener('click', ()=>{

   // num1 = Number(prompt('Ingrese Número 1'))
   // num2 = Number(prompt('Ingrese Número 2'))
   resultado.innerHTML = `El resultado es ${Suma(num1,num2)}`
})

btnEj2.addEventListener('click', ()=>{
   // num1 = Number(prompt('Ingrese Número 1'))
   // num2 = Number(prompt('Ingrese Número 2'))
 
    resultado.innerHTML = `El resultado es ${Multiplicacion(num1,num2)}`

})