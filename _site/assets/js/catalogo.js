document.addEventListener('DOMContentLoaded', function () {
    // 1. Referencias al DOM
    const searchInput = document.getElementById('searchInput');
    const filterAnio = document.getElementById('filterAnio');
    const btnLimpiar = document.getElementById('btnLimpiar');
    const pills = Array.from(document.querySelectorAll('.catalogo-pill'));
    const proyectoItems = Array.from(document.querySelectorAll('.proyecto-item'));
    const contador = document.getElementById('contadorResultados');
    const paginationContainer = document.getElementById('catalogoPagination');
    const catalogoGrid = document.getElementById('catalogoGrid');

    // 2. Control de paginación numérica
    const itemsPorPagina = 9;
    let paginaActual = 1;
    let filtroPillActivo = 'todos';
    let itemsFiltrados = [];

    // 3. Normalizador de texto (sin acentos, minúsculas)
    function normalizar(texto) {
        return (texto || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .trim();
    }

    // 4. Filtrado principal
    function aplicarFiltros() {
        const query = normalizar(searchInput ? searchInput.value : '');
        const anioSeleccionado = filterAnio ? filterAnio.value : 'todos';

        itemsFiltrados = [];

        proyectoItems.forEach(item => {
            const textoCompleto = normalizar(item.getAttribute('data-fulltext'));
            const anioCard = (item.getAttribute('data-anio') || '').trim();
            const tipoCard = normalizar(item.getAttribute('data-tipo'));

            // A. Búsqueda por texto libre
            const coincideTexto = !query || textoCompleto.includes(query);

            // B. Búsqueda por año
            const coincideAnio = (anioSeleccionado === 'todos') || (anioCard === anioSeleccionado);

            // C. Búsqueda por categoría / píldora rápida
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
                itemsFiltrados.push(item);
            } else {
                item.style.setProperty('display', 'none', 'important');
                item.style.opacity = '0';
            }
        });

        // Aseguramos que la página actual no sobrepase el total
        const totalPaginas = Math.ceil(itemsFiltrados.length / itemsPorPagina) || 1;
        if (paginaActual > totalPaginas) {
            paginaActual = 1;
        }

        renderizarPagina(false);
    }

    // 5. Renderizado de la página actual y sus botones
    function renderizarPagina(hacerScroll = true) {
        const totalItems = itemsFiltrados.length;
        const totalPaginas = Math.ceil(totalItems / itemsPorPagina);

        const inicio = (paginaActual - 1) * itemsPorPagina;
        const fin = inicio + itemsPorPagina;

        // Ocultar todos los que pasaron los filtros salvo los del rango
        itemsFiltrados.forEach((item, index) => {
            if (index >= inicio && index < fin) {
                item.style.setProperty('display', 'flex', 'important');
                item.style.opacity = '1';
            } else {
                item.style.setProperty('display', 'none', 'important');
                item.style.opacity = '0';
            }
        });

        // Actualizar contador informativo
        actualizarContador(inicio, fin, totalItems, proyectoItems.length);

        // Renderizar barra de botones de paginación
        renderizarBotonesPaginacion(totalPaginas);

        // Scroll suave al inicio del catálogo al cambiar de página
        if (hacerScroll && catalogoGrid) {
            catalogoGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // 6. Generador de la barra de paginación numérica
    function renderizarBotonesPaginacion(totalPaginas) {
        if (!paginationContainer) return;

        // Si solo hay 1 página o ninguna, ocultamos la barra
        if (totalPaginas <= 1) {
            paginationContainer.innerHTML = '';
            paginationContainer.style.display = 'none';
            return;
        }

        paginationContainer.style.display = 'flex';
        let html = '';

        // Botón Anterior
        const disabledPrev = (paginaActual === 1) ? 'disabled' : '';
        html += `<button type="button" class="pagination-btn pagination-nav" data-page="${paginaActual - 1}" ${disabledPrev} title="Página anterior">
            <i class="fas fa-chevron-left"></i> Anterior
        </button>`;

        // Botones numéricos con rango elíptico
        const paginasAMostrar = calcularRangoPaginas(paginaActual, totalPaginas);

        paginasAMostrar.forEach(p => {
            if (p === '...') {
                html += `<span class="pagination-ellipsis">&hellip;</span>`;
            } else {
                const activeClass = (p === paginaActual) ? 'active' : '';
                html += `<button type="button" class="pagination-btn pagination-num ${activeClass}" data-page="${p}" title="Ir a la página ${p}">
                    ${p}
                </button>`;
            }
        });

        // Botón Siguiente
        const disabledNext = (paginaActual === totalPaginas) ? 'disabled' : '';
        html += `<button type="button" class="pagination-btn pagination-nav" data-page="${paginaActual + 1}" ${disabledNext} title="Página siguiente">
            Siguiente <i class="fas fa-chevron-right"></i>
        </button>`;

        paginationContainer.innerHTML = html;

        // Event listeners a los botones generados
        paginationContainer.querySelectorAll('.pagination-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                if (this.disabled) return;
                const targetPage = parseInt(this.getAttribute('data-page'), 10);
                if (targetPage && targetPage !== paginaActual && targetPage >= 1 && targetPage <= totalPaginas) {
                    paginaActual = targetPage;
                    renderizarPagina(true);
                }
            });
        });
    }

    // Algoritmo de rango de páginas
    function calcularRangoPaginas(actual, total) {
        if (total <= 7) {
            return Array.from({ length: total }, (_, i) => i + 1);
        }
        if (actual <= 4) {
            return [1, 2, 3, 4, 5, '...', total];
        }
        if (actual >= total - 3) {
            return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
        }
        return [1, '...', actual - 1, actual, actual + 1, '...', total];
    }

    // 7. Actualización del contador
    function actualizarContador(inicio, fin, totalFiltrados, totalAbsoluto) {
        if (!contador) return;

        if (totalFiltrados === 0) {
            contador.textContent = 'No se encontraron proyectos con los filtros seleccionados.';
        } else if (totalFiltrados <= itemsPorPagina) {
            contador.textContent = `Mostrando todos los proyectos encontrados (${totalFiltrados})`;
        } else {
            const hasta = Math.min(fin, totalFiltrados);
            contador.textContent = `Mostrando ${inicio + 1} a ${hasta} de ${totalFiltrados} proyectos (Página ${paginaActual} de ${Math.ceil(totalFiltrados / itemsPorPagina)})`;
        }
    }

    // 8. Event listeners para filtros (resetean a la página 1)
    const resetearYFiltrar = () => {
        paginaActual = 1;
        aplicarFiltros();
    };

    if (searchInput) searchInput.addEventListener('input', resetearYFiltrar);
    if (filterAnio) filterAnio.addEventListener('change', resetearYFiltrar);

    pills.forEach(pill => {
        pill.addEventListener('click', function () {
            pills.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            filtroPillActivo = this.getAttribute('data-filter') || 'todos';
            resetearYFiltrar();
        });
    });

    // 9. Botón Limpiar
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function () {
            if (searchInput) searchInput.value = '';
            if (filterAnio) filterAnio.value = 'todos';

            pills.forEach(p => p.classList.remove('active'));
            const pillTodos = document.querySelector('.catalogo-pill[data-filter="todos"]');
            if (pillTodos) pillTodos.classList.add('active');
            filtroPillActivo = 'todos';

            resetearYFiltrar();
            if (searchInput) searchInput.focus();
        });
    }

    // 10. Ejecución inicial
    aplicarFiltros();
});
