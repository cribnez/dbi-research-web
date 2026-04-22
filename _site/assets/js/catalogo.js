// assets/js/catalogo.js

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const filterNivel = document.getElementById('filterNivel');
    const filterAnio = document.getElementById('filterAnio');
    const items = document.querySelectorAll('.proyecto-item');

    // Función principal para filtrar los proyectos
    function filtrar() {
        const txt = searchInput.value.toLowerCase();
        const nvl = filterNivel.value;
        const ani = filterAnio.value;

        items.forEach(item => {
            const titulo = item.querySelector('.proyecto-titulo').innerText.toLowerCase();
            const autor = item.querySelector('.proyecto-autor').innerText.toLowerCase();
            const itemNivel = item.getAttribute('data-nivel');
            const itemAnio = item.getAttribute('data-anio');

            const matchTxt = titulo.includes(txt) || autor.includes(txt);
            const matchNvl = nvl === 'todos' || itemNivel === nvl;
            const matchAni = ani === 'todos' || itemAnio === ani;

            // Mostrar u ocultar la tarjeta (usamos flex porque así está tu diseño en HTML)
            item.style.display = (matchTxt && matchNvl && matchAni) ? 'flex' : 'none';
        });
    }

    // Escuchar eventos de escritura y cambios en los selectores
    if (searchInput) searchInput.addEventListener('input', filtrar);
    if (filterNivel) filterNivel.addEventListener('change', filtrar);
    if (filterAnio) filterAnio.addEventListener('change', filtrar);

    // Leer la URL por si viene una búsqueda desde la página de Inicio
    const params = new URLSearchParams(window.location.search);
    const query = params.get('search'); 
    
    if (query && searchInput) {
        searchInput.value = query; // Escribe la palabra en el buscador
        filtrar(); // Ejecuta el filtro automáticamente
    }
});