
// se trae la pantalla y los botones desde el documento
let screen = document.getElementById('screen');
const buttons = document.querySelectorAll("#buttons a");

for (const button of buttons) {
    //se escucha el click y se previene
    button.addEventListener('click', function (e) {
        e.preventDefault();
        //un if (el dataset key es una especie de id)
        if (e.target.dataset.key == 'equal') {
            screen.textContent = eval(screen.textContent);
            if (screen.textContent.length > 8) {
                screen.textContent = eval(screen.textContent).toFixed(8);
            }
        } else if (e.target.dataset.key == 'clear') {
            screen.textContent = '';
        } else {
            screen.textContent = screen.textContent + e.target.dataset.key;
        }
    });
}