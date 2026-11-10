document.addEventListener('DOMContentLoaded', function () {
    // 1. Referencias al DOM
    const searchInput = document.getElementById('searchInput');
    const filterAnio = document.getElementById('filterAnio');
    const btnLimpiar = document.getElementById('btnLimpiar');
    const pills = Array.from(document.querySelectorAll('.catalogo-pill'));
    const proyectoItems = Array.from(document.querySelectorAll('.proyecto-item'));
    const contador = document.getElementById('contadorResultados');
    const btnCargarMas = document.getElementById('btnCargarMas');

    // 2. Variables de control de paginación
    const itemsPorTanda = 6;
    let limiteVisible = itemsPorTanda;
    let filtroPillActivo = 'todos';

    // 3. Función auxiliar para normalizar texto (quita acentos y minúsculas)
    function normalizar(texto) {
        return (texto || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .trim();
    }

    // 4. Función principal de filtrado y renderizado
    function filtrarYRenderizar() {
        const query = normalizar(searchInput ? searchInput.value : '');
        const anioSeleccionado = filterAnio ? filterAnio.value : 'todos';

        let itemsQueCoinciden = [];

        proyectoItems.forEach(item => {
            const textoCompleto = normalizar(item.getAttribute('data-fulltext'));
            const anioCard = (item.getAttribute('data-anio') || '').trim();
            const tipoCard = normalizar(item.getAttribute('data-tipo'));

            // A. Coincidencia por texto libre (título, autores, resumen, etc.)
            const coincideTexto = !query || textoCompleto.includes(query);

            // B. Coincidencia por año
            const coincideAnio = (anioSeleccionado === 'todos') || (anioCard === anioSeleccionado);

            // C. Coincidencia por píldora / categoría rápida
            let coincidePill = true;
            if (filtroPillActivo === 'articulo') {
                coincidePill = tipoCard.includes('articulo');
            } else if (filtroPillActivo === 'congreso') {
                coincidePill = tipoCard.includes('congreso');
            } else if (filtroPillActivo === 'libro') {
                coincidePill = tipoCard.includes('libro') || tipoCard.includes('capitulo');
            } else if (filtroPillActivo === 'prototipo') {
                coincidePill = tipoCard.includes('prototipo') || tipoCard.includes('software');
            } else if (filtroPillActivo === 'estadia') {
                coincidePill = tipoCard.includes('estadia') || tipoCard.includes('estancia');
            }

            if (coincideTexto && coincideAnio && coincidePill) {
                itemsQueCoinciden.push(item);
            } else {
                item.style.setProperty('display', 'none', 'important');
                item.style.opacity = '0';
            }
        });

        // 5. Aplicar paginación progresiva sobre los que pasaron los filtros
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

        // 6. Control visual del botón "Cargar más"
        if (btnCargarMas) {
            if (mostradosEnPantalla >= itemsQueCoinciden.length || itemsQueCoinciden.length <= itemsPorTanda) {
                btnCargarMas.style.setProperty('display', 'none', 'important');
            } else {
                btnCargarMas.style.setProperty('display', 'inline-flex', 'important');
            }
        }

        // 7. Actualizar el contador de resultados
        actualizarContador(mostradosEnPantalla, itemsQueCoinciden.length, proyectoItems.length);
    }

    // Actualiza el texto informativo sobre la cantidad mostrada
    function actualizarContador(mostradosVisualmente, totalFiltrados, totalAbsoluto) {
        if (!contador) return;

        if (totalFiltrados === 0) {
            contador.textContent = 'No se encontraron proyectos con los filtros seleccionados.';
        } else if (totalFiltrados === totalAbsoluto && mostradosVisualmente === totalAbsoluto) {
            contador.textContent = `Mostrando todos los proyectos (${totalAbsoluto})`;
        } else if (totalFiltrados === totalAbsoluto) {
            contador.textContent = `Mostrando ${mostradosVisualmente} de ${totalAbsoluto} proyectos`;
        } else {
            contador.textContent = `Mostrando ${mostradosVisualmente} de ${totalFiltrados} proyectos encontrados`;
        }
    }

    // 8. Eventos de los filtros rápidos (Píldoras)
    pills.forEach(pill => {
        pill.addEventListener('click', function () {
            pills.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            filtroPillActivo = this.getAttribute('data-filter') || 'todos';
            limiteVisible = itemsPorTanda;
            filtrarYRenderizar();
        });
    });

    // 9. Eventos para búsqueda por texto y selector de año
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            limiteVisible = itemsPorTanda;
            filtrarYRenderizar();
        });
    }

    if (filterAnio) {
        filterAnio.addEventListener('change', function () {
            limiteVisible = itemsPorTanda;
            filtrarYRenderizar();
        });
    }

    // 10. Botón "Cargar más"
    if (btnCargarMas) {
        btnCargarMas.addEventListener('click', function () {
            limiteVisible += itemsPorTanda;
            filtrarYRenderizar();
        });
    }

    // 11. Botón "Limpiar"
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function () {
            if (searchInput) searchInput.value = '';
            if (filterAnio) filterAnio.value = 'todos';

            pills.forEach(p => p.classList.remove('active'));
            const pillTodos = document.querySelector('.catalogo-pill[data-filter="todos"]');
            if (pillTodos) pillTodos.classList.add('active');
            filtroPillActivo = 'todos';

            limiteVisible = itemsPorTanda;
            filtrarYRenderizar();
            if (searchInput) searchInput.focus();
        });
    }

    // 12. Render inicial
    filtrarYRenderizar();
});
