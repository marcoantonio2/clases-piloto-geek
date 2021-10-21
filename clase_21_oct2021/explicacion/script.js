//1 captura datos del formulario

function capturaDatos() {

    let nombre = document.getElementById('inputNombre').value;
    let Apellido = document.getElementById('inputApellido').value;
    let Tel = document.getElementById('inputNum').value;
    let Dirc = document.getElementById('inputDir').value;

    console.log(nombre, Apellido, Tel, Dirc);
    guardarLocalStorage(nombre, Apellido, Tel, Dirc)
}

//capturar boton de enviar

let boton = document.getElementById('btnEnviar');

//3 llamar a controlador de eventos del boton, con click

boton.addEventListener('click', capturaDatos);

//4 capturar el formulario

let form = document.querySelector('form');

//5 controlar el evento

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

//funcion para almecenar en localStorage

function guardarLocalStorage(nom, Apel, Tele, Dire) {
    //set = asignar
    localStorage.setItem('nombre', nom);
    localStorage.setItem('apellido', Apel);
    localStorage.setItem('Telefono', Tele);
    localStorage.setItem('Direccion', Dire);

    listarDatos()
}

//7 capturar la div con id = listar

let list = document.getElementById('listar');

//8 consultar la info del localStorage para listarla en la pagina

function listarDatos() {
    //get = obtener
    let nombre = localStorage.getItem('nombre');
    let apellido = localStorage.getItem('apellido');
    let telefono = localStorage.getItem('telefono')
    let direccion = localStorage.getItem('direccion')

    list.innerHTML = `
    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Teléfono</th>
        <th>Dirección</th>
      </tr>
      <tr>
         <td>${nombre}</td>
         <td>${apellido}</td>
         <td>${telefono}</td>
         <td>${direccion}</td>
      </tr>
     </table>
    `;
}

//9 cargar la lista de listar datos al cargar el DOM DOMContentLoaded

document.addEventListener('DOMContentLoaded', listarDatos)