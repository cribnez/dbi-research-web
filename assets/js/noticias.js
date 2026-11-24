/**
 * Noticias - Filtro por Año
 * DBI Research Group
 */

function filterNoticias(anio, btn) {
    var tarjetas = document.querySelectorAll('.card-noticia');
    var mensajeVacio = document.getElementById('noticiasVacio');
    var contador = document.getElementById('noticiasContador');
    var visibles = 0;

    // Actualizar botón activo
    var botones = document.querySelectorAll('.noticias-filtros .filter-btn');
    for (var i = 0; i < botones.length; i++) {
        botones[i].classList.remove('active');
    }
    btn.classList.add('active');

    // Filtrar tarjetas
    for (var j = 0; j < tarjetas.length; j++) {
        var tarjeta = tarjetas[j];
        var anioTarjeta = tarjeta.getAttribute('data-anio');

        if (anio === 'todos' || anioTarjeta === anio) {
            tarjeta.classList.remove('oculta');
            visibles++;
        } else {
            tarjeta.classList.add('oculta');
        }
    }

    // Actualizar contador
    if (anio === 'todos') {
        contador.textContent = 'Mostrando todas las noticias (' + tarjetas.length + ')';
    } else {
        contador.textContent = 'Mostrando ' + visibles + (visibles === 1 ? ' noticia' : ' noticias') + ' de ' + anio;
    }

    // Mostrar/ocultar mensaje vacío
    if (visibles === 0) {
        mensajeVacio.style.display = 'block';
    } else {
        mensajeVacio.style.display = 'none';
    }
}

// Inicializar contador al cargar
document.addEventListener('DOMContentLoaded', function() {
    var total = document.querySelectorAll('.card-noticia').length;
    var contador = document.getElementById('noticiasContador');
    if (contador && total > 0) {
        contador.textContent = 'Mostrando todas las noticias (' + total + ')';
    }
});
