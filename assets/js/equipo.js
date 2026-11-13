document.addEventListener('DOMContentLoaded', function () {
    const items = Array.from(document.querySelectorAll('#directorioAlumnos .directorio-item'));
    const paginationContainer = document.getElementById('alumnosPagination');
    const contador = document.getElementById('alumnosContadorTexto');
    const directorioAlumnos = document.getElementById('directorioAlumnos');

    if (!items.length) return;

    const itemsPorPagina = 9;
    let paginaActual = 1;
    const totalItems = items.length;
    const totalPaginas = Math.ceil(totalItems / itemsPorPagina);

    // 1. Renderiza la página actual (oculta los demás)
    function renderizarPagina(hacerScroll = true) {
        const inicio = (paginaActual - 1) * itemsPorPagina;
        const fin = inicio + itemsPorPagina;

        items.forEach((item, index) => {
            if (index >= inicio && index < fin) {
                item.style.setProperty('display', 'flex', 'important');
            } else {
                item.style.setProperty('display', 'none', 'important');
            }
        });

        actualizarContador(inicio, fin, totalItems);
        renderizarBotonesPaginacion(totalPaginas);

        if (hacerScroll && directorioAlumnos) {
            directorioAlumnos.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // 2. Genera los botones numéricos y de navegación
    function renderizarBotonesPaginacion(total) {
        if (!paginationContainer) return;

        if (total <= 1) {
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

        // Botones de páginas con elipsis
        const paginasAMostrar = calcularRangoPaginas(paginaActual, total);

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
        const disabledNext = (paginaActual === total) ? 'disabled' : '';
        html += `<button type="button" class="pagination-btn pagination-nav" data-page="${paginaActual + 1}" ${disabledNext} title="Página siguiente">
            Siguiente <i class="fas fa-chevron-right"></i>
        </button>`;

        paginationContainer.innerHTML = html;

        // Asignar eventos de clic
        paginationContainer.querySelectorAll('.pagination-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                if (this.disabled) return;
                const targetPage = parseInt(this.getAttribute('data-page'), 10);
                if (targetPage >= 1 && targetPage <= total && targetPage !== paginaActual) {
                    paginaActual = targetPage;
                    renderizarPagina(true);
                }
            });
        });
    }

    // 3. Calcula el rango elíptico de botones (ej. 1, 2, 3, '...', 5)
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

    // 4. Actualiza el texto de conteo
    function actualizarContador(inicio, fin, total) {
        if (!contador) return;
        const hasta = Math.min(fin, total);
        contador.innerHTML = `Mostrando <strong>${inicio + 1}</strong> a <strong>${hasta}</strong> de <strong>${total}</strong> alumnos (Página <strong>${paginaActual}</strong> de <strong>${totalPaginas}</strong>)`;
    }

    // Inicializar en la página 1 sin scroll
    renderizarPagina(false);
});
