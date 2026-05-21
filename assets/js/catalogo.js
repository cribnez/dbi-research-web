document.addEventListener('DOMContentLoaded', function() {
    // 1. Referencias a los elementos del DOM
    const searchInput = document.getElementById('searchInput');
    const filterCategoria = document.getElementById('filterCategoria');
    const filterTipo = document.getElementById('filterTipo');
    const btnLimpiar = document.getElementById('btnLimpiar');
    const proyectoItems = document.querySelectorAll('.proyecto-item');
    const contador = document.getElementById('contadorResultados');

    // 2. Función principal de filtrado
    function filtrarProyectos() {
        const query = searchInput.value.toLowerCase().trim();
        const categoriaSeleccionada = filterCategoria.value.toLowerCase();
        const tipoSeleccionado = filterTipo.value.toLowerCase();
        
        let visibles = 0;

        proyectoItems.forEach(item => {
            // Extraemos los datos de los atributos data- del HTML
            const textoCompleto = item.getAttribute('data-fulltext') || "";
            const categoriaCard = item.getAttribute('data-categoria').toLowerCase();
            const tipoCard = item.getAttribute('data-tipo').toLowerCase();

            // Lógica de coincidencia
            const coincideTexto = textoCompleto.includes(query);
            
            // El filtro de categoría busca si el valor seleccionado está contenido 
            // en el string (ej: "Ingeniería" o "Estadía")
            const coincideCategoria = (categoriaSeleccionada === 'todos') || 
                                       (categoriaCard.includes(categoriaSeleccionada));
            
            // El filtro de tipo busca en la lista separada por comas
            const coincideTipo = (tipoSeleccionado === 'todos') || 
                                 (tipoCard.includes(tipoSeleccionado));

            // Mostrar u ocultar con una pequeña transición
            if (coincideTexto && coincideCategoria && coincideTipo) {
                item.style.display = 'flex'; // O 'block', según tu CSS
                item.style.opacity = '1';
                visibles++;
            } else {
                item.style.display = 'none';
                item.style.opacity = '0';
            }
        });

        // 3. Actualizar el contador de resultados
        actualizarContador(visibles, proyectoItems.length);
    }

    // 4. Función para el texto del contador
    function actualizarContador(mostrados, totales) {
        if (mostrados === totales) {
            contador.textContent = `Mostrando todos los proyectos (${totales})`;
        } else if (mostrados === 0) {
            contador.textContent = "No se encontraron proyectos que coincidan con tu búsqueda.";
        } else {
            contador.textContent = `Se encontraron ${mostrados} de ${totales} proyectos`;
        }
    }

    // 5. Event Listeners
    searchInput.addEventListener('input', filtrarProyectos);
    filterCategoria.addEventListener('change', filtrarProyectos);
    filterTipo.addEventListener('change', filtrarProyectos);

    // 6. Lógica del Botón Limpiar
    btnLimpiar.addEventListener('click', function() {
        searchInput.value = '';
        filterCategoria.value = 'todos';
        filterTipo.value = 'todos';
        filtrarProyectos();
        
        // Opcional: poner el foco de nuevo en el buscador
        searchInput.focus();
    });

    // Ejecutar una vez al cargar por si hay valores previos en el navegador
    filtrarProyectos();
});