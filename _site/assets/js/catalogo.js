document.addEventListener('DOMContentLoaded', function() {
    // 1. Referencias al DOM
    const searchInput = document.getElementById('searchInput');
    const filterCategoria = document.getElementById('filterCategoria');
    const filterTipo = document.getElementById('filterTipo');
    const btnLimpiar = document.getElementById('btnLimpiar');
    const proyectoItems = Array.from(document.querySelectorAll('.proyecto-item'));
    const contador = document.getElementById('contadorResultados');
    const btnCargarMas = document.getElementById('btnCargarMas');

    // 2. Variables de control para "Cargar más"
    const itemsPorTanda = 6;
    let limiteVisible = itemsPorTanda;

    // 3. Función unificada de filtrado y paginación
    function filtrarYRenderizar() {
        const query = searchInput.value.toLowerCase().trim();
        const categoriaSeleccionada = filterCategoria.value.toLowerCase();
        const tipoSeleccionado = filterTipo.value.toLowerCase();
        
        // Almacenamos temporalmente los elementos que pasan los filtros de búsqueda
        let itemsQueCoinciden = [];

        proyectoItems.forEach(item => {
            const textoCompleto = item.getAttribute('data-fulltext') || "";
            const categoriaCard = item.getAttribute('data-categoria').toLowerCase();
            const tipoCard = item.getAttribute('data-tipo').toLowerCase();

            const coincideTexto = textoCompleto.includes(query);
            const coincideCategoria = (categoriaSeleccionada === 'todos') || (categoriaCard.includes(categoriaSeleccionada));
            const coincideTipo = (tipoSeleccionado === 'todos') || (tipoCard.includes(tipoSeleccionado));

            if (coincideTexto && coincideCategoria && coincideTipo) {
                itemsQueCoinciden.push(item);
            } else {
                // Si no coincide con los filtros, lo ocultamos inmediatamente
                item.style.setProperty('display', 'none', 'important');
                item.style.opacity = '0';
            }
        });

        // Aplicamos el límite visible (Paginación) sobre los elementos que pasaron la búsqueda
        let mostradosEnPantalla = 0;
        itemsQueCoinciden.forEach((item, index) => {
            if (index < limiteVisible) {
                item.style.setProperty('display', 'flex', 'important');
                item.style.opacity = '1';
                mostradosEnPantalla++;
            } else {
                item.style.setProperty('display', 'none', 'important');
                item.style.opacity = '0';
            }
        });

        // 4. Control visual del botón "Cargar más"
        if (btnCargarMas) {
            if (mostradosEnPantalla >= itemsQueCoinciden.length || itemsQueCoinciden.length <= itemsPorTanda) {
                btnCargarMas.style.setProperty('display', 'none', 'important');
            } else {
                btnCargarMas.style.setProperty('display', 'inline-flex', 'important');
            }
        }

        // 5. ¡CORRECCIÓN AQUÍ!: Enviamos los que verdaderamente se están mostrando en la interfaz
        actualizarContador(mostradosEnPantalla, itemsQueCoinciden.length, proyectoItems.length);
    }

    // Función para el texto informativo del contador adaptado a la paginación
    function actualizarContador(mostradosVisualmente, totalFiltrados, totalAbsoluto) {
        if (totalFiltrados === 0) {
            contador.textContent = "No se encontraron proyectos que coincidan con tu búsqueda.";
        } else if (mostradosVisualmente === totalAbsoluto) {
            contador.textContent = `Mostrando todos los proyectos (${totalAbsoluto})`;
        } else {
            // Muestra cuántos ve físicamente el usuario del total de coincidencias de su búsqueda
            contador.textContent = `Viendo ${mostradosVisualmente} de ${totalFiltrados} proyectos encontrados`;
        }
    }

    // 6. Event Listeners para cambios de filtros (Resetean el límite a 6)
    const resetearYFiltrar = () => {
        limiteVisible = itemsPorTanda; // Reinicia la paginación al buscar cosas nuevas
        filtrarYRenderizar();
    };

    searchInput.addEventListener('input', resetearYFiltrar);
    filterCategoria.addEventListener('change', resetearYFiltrar);
    filterTipo.addEventListener('change', resetearYFiltrar);

    // Evento del botón Cargar Más
    if (btnCargarMas) {
        btnCargarMas.addEventListener('click', function() {
            limiteVisible += itemsPorTanda; // Añade 6 elementos más al límite
            filtrarYRenderizar();
        });
    }

    // Lógica del Botón Limpiar
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function() {
            searchInput.value = '';
            filterCategoria.value = 'todos';
            filterTipo.value = 'todos';
            resetearYFiltrar();
            searchInput.focus();
        });
    }

    // Ejecución inicial perfecta
    filtrarYRenderizar();
});