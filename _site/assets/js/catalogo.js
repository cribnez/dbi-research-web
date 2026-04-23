// assets/js/catalogo.js

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const filterNivel = document.getElementById('filterNivel');
    const filterAnio = document.getElementById('filterAnio');
    const filterTipo = document.getElementById('filterTipo'); // 1. Definimos correctamente el selector de tipo
    const items = document.querySelectorAll('.proyecto-item');

    function filtrar() {
        const txt = searchInput.value.toLowerCase();
        const nvl = filterNivel.value;
        const ani = filterAnio.value;
        const tip = filterTipo.value; // 2. Obtenemos el valor del select de tipos

        items.forEach(item => {
            const titulo = item.querySelector('.proyecto-titulo').innerText.toLowerCase();
            const autor = item.querySelector('.proyecto-autor').innerText.toLowerCase();
            const itemNivel = item.getAttribute('data-nivel');
            const itemAnio = item.getAttribute('data-anio');
            
            // Obtenemos los tipos y los convertimos en un array real
            const itemTipos = item.getAttribute('data-tipo').split(',');

            const matchTxt = titulo.includes(txt) || autor.includes(txt);
            const matchNvl = nvl === 'todos' || itemNivel === nvl;
            const matchAni = ani === 'todos' || itemAnio === ani;
            
            // Lógica Multitipo corregida
            const matchTip = tip === 'todos' || itemTipos.includes(tip);

            item.style.display = (matchTxt && matchNvl && matchAni && matchTip) ? 'flex' : 'none';
        });
    }

    // 3. Escuchar eventos (Corregido: cada uno con su respectivo listener)
    if (searchInput) searchInput.addEventListener('input', filtrar);
    if (filterNivel) filterNivel.addEventListener('change', filtrar);
    if (filterAnio) filterAnio.addEventListener('change', filtrar);
    if (filterTipo) filterTipo.addEventListener('change', filtrar); // Escucha el cambio en Tipos

    // Leer la URL por si viene una búsqueda desde la página de Inicio
    const params = new URLSearchParams(window.location.search);
    const query = params.get('search'); 
    
    if (query && searchInput) {
        searchInput.value = query;
        filtrar(); 
    }
});