// assets/js/inicio.js

function ejecutarBusqueda() {
    const input = document.getElementById('inputBusquedaHero');
    if (!input) return; // Seguridad en caso de que el input no exista
    
    const terminobusqueda = input.value.trim();
    
    if (terminobusqueda !== "") {
        // Usamos la variable global definida en el HTML
        window.location.href = URL_CATALOGO + "?search=" + encodeURIComponent(terminobusqueda);
    }
}

// Escuchar el evento "Enter" cuando la página termine de cargar
document.addEventListener('DOMContentLoaded', () => {
    const inputBusqueda = document.getElementById('inputBusquedaHero');
    if (inputBusqueda) {
        inputBusqueda.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') ejecutarBusqueda();
        });
    }
});