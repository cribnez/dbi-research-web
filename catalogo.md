---
layout: default
title: Catálogo
---

<div class="hero" style="padding: 60px 10%; clip-path: none; text-align: left;">
    <h1 style="font-size: 2.5rem; margin: 0;">Catálogo de Producción Académica</h1>
    <p style="font-size: 1.1rem; opacity: 0.9; margin-top: 10px;">
        Explora las tesis, artículos y proyectos desarrollados por nuestro grupo de investigación.
    </p>
</div>

<div class="container">
    <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); margin-bottom: 40px; display: flex; gap: 15px; flex-wrap: wrap; align-items: center;">
        
        <div style="flex: 1; min-width: 200px;">
            <input type="text" id="searchInput" placeholder="Buscar por título o autor..." style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; outline: none;">
        </div>

        <select id="filterNivel" style="padding: 10px; border: 1px solid #ddd; border-radius: 6px; outline: none; background: white;">
            <option value="todos">Todos los Niveles</option>
            <option value="Ingeniería">Ingeniería</option>
            <option value="Maestría">Maestría</option>
            <option value="Doctorado">Doctorado</option>
        </select>

        <select id="filterAnio" style="padding: 10px; border: 1px solid #ddd; border-radius: 6px; outline: none; background: white;">
            <option value="todos">Todos los Años</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
        </select>
    </div>

    <div class="grid" id="catalogoGrid">
        {% for proyecto in site.data.proyectos %}
        <div class="card proyecto-item" data-nivel="{{ proyecto.nivel }}" data-anio="{{ proyecto.anio }}">
            <span style="font-size: 0.7rem; color: var(--azul-primario); font-weight: bold; background: #e9ecef; padding: 3px 8px; border-radius: 10px;">
                {{ proyecto.anio }} | {{ proyecto.nivel }}
            </span>
            <h3 class="proyecto-titulo" style="margin-top: 10px; color: var(--azul-oscuro);">{{ proyecto.titulo }}</h3>
            <p class="proyecto-autor" style="font-size: 0.9rem; color: #666;"><strong>Por:</strong> {{ proyecto.autor }}</p>
            <p style="color: #444;">{{ proyecto.resumen | truncate: 120 }}</p>
            <a href="{{ proyecto.link }}" style="color: var(--azul-primario); font-weight: bold; text-decoration: none;">Ver más →</a>
        </div>
        {% endfor %}
    </div>
</div>

<script>
    const searchInput = document.getElementById('searchInput');
    const filterNivel = document.getElementById('filterNivel');
    const filterAnio = document.getElementById('filterAnio');
    const items = document.querySelectorAll('.proyecto-item');

    function filtrarProyectos() {
        const termino = searchInput.value.toLowerCase();
        const nivel = filterNivel.value;
        const anio = filterAnio.value;

        items.forEach(item => {
            const titulo = item.querySelector('.proyecto-titulo').innerText.toLowerCase();
            const autor = item.querySelector('.proyecto-autor').innerText.toLowerCase();
            const itemNivel = item.getAttribute('data-nivel');
            const itemAnio = item.getAttribute('data-anio');

            const coincideTexto = titulo.includes(termino) || autor.includes(termino);
            const coincideNivel = nivel === 'todos' || itemNivel === nivel;
            const coincideAnio = anio === 'todos' || itemAnio === anio;

            if (coincideTexto && coincideNivel && coincideAnio) {
                item.style.display = 'flex'; // Mantiene el layout de la tarjeta
            } else {
                item.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filtrarProyectos);
    filterNivel.addEventListener('change', filtrarProyectos);
    filterAnio.addEventListener('change', filtrarProyectos);
</script>
