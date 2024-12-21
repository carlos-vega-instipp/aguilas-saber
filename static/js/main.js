// Archivo de JavaScript para funciones interactivas

document.addEventListener('DOMContentLoaded', () => {
    // Agrega un evento de clic a cada tile
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            alert(`Has seleccionado: ${tile.querySelector('.tile-name').textContent}`);
        });
    });

    // Cambia el color del título al pasar el mouse
    const header = document.querySelector('.page-header h1');
    header.addEventListener('mouseover', () => {
        header.style.color = '#e74c3c';
    });
    header.addEventListener('mouseout', () => {
        header.style.color = '#2c3e50';
    });
});