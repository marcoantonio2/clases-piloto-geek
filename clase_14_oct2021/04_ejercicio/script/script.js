
let nom, sb, v1, v2, v3;
let totalventa = 0;
let com = 0;
let totalpagar = 0;

let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    nom = document.getElementById('inputNombre').value;
    sb = Number(document.getElementById('inputSalario').value);
    v1 = Number(document.getElementById('inputv1').value);
    v2 = Number(document.getElementById('inputv2').value);
    v3 = Number(document.getElementById('inputv3').value);

    totalventa = v1 + v2 + v3
    document.getElementById('inputVenta').value = totalventa

    com = totalventa * 0.1;
    document.getElementById('inputComision').value = com

    totalpagar = sb + com
    document.getElementById('inputTotal').value = totalpagar
})