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
    <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); margin-bottom: 40px; display: flex; gap: 15px; flex-wrap: wrap;">
        <div style="flex: 2; min-width: 250px;">
            <input type="text" id="searchInput" placeholder="Buscar por título o autor..." style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; outline: none;">
        </div>
        <select id="filterNivel" style="flex: 1; padding: 12px; border: 1px solid #ddd; border-radius: 8px; background: white;">
            <option value="todos">Todos los Niveles</option>
            <option value="Ingeniería">Ingeniería</option>
            <option value="Maestría">Maestría</option>
        </select>
        <select id="filterAnio" style="flex: 1; padding: 12px; border: 1px solid #ddd; border-radius: 8px; background: white;">
            <option value="todos">Todos los Años</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
        </select>
    </div>

    <div class="grid" id="catalogoGrid">
        {% for proyecto in site.data.proyectos %}
        <div class="card proyecto-item" data-nivel="{{ proyecto.nivel }}" data-anio="{{ proyecto.anio }}" style="display: flex; flex-direction: column; padding: 25px; min-height: 280px; text-align: left;">
            
            <div style="margin-bottom: 15px;">
                <span style="font-size: 0.75rem; color: var(--azul-primario); font-weight: bold; background: #eef4ff; padding: 4px 12px; border-radius: 15px;">
                    {{ proyecto.anio }} | {{ proyecto.nivel }}
                </span>
            </div>

            <h3 class="proyecto-titulo" style="margin: 0 0 10px 0; color: var(--azul-oscuro); font-size: 1.3rem; line-height: 1.3;">
                {{ proyecto.titulo }}
            </h3>

            <p class="proyecto-autor" style="font-size: 0.95rem; color: #666; margin-bottom: 12px;">
                <strong>Por:</strong> {{ proyecto.autor }}
            </p>

            <p style="color: #555; font-size: 0.95rem; line-height: 1.5; margin: 0; flex-grow: 1;">
                {{ proyecto.resumen | truncate: 140 }}
            </p>

            <div style="margin-top: 20px;">
                <a href="{{ proyecto.link }}" style="color: var(--azul-primario); font-weight: bold; text-decoration: none; font-size: 1rem;">
                    Ver más →
                </a>
            </div>
        </div>
        {% endfor %}
    </div>
</div>

<script>
    const searchInput = document.getElementById('searchInput');
    const filterNivel = document.getElementById('filterNivel');
    const filterAnio = document.getElementById('filterAnio');
    const items = document.querySelectorAll('.proyecto-item');

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

            item.style.display = (matchTxt && matchNvl && matchAni) ? 'flex' : 'none';
        });
    }

    searchInput.addEventListener('input', filtrar);
    filterNivel.addEventListener('change', filtrar);
    filterAnio.addEventListener('change', filtrar);
</script>
