---
layout: catalogo
title: Catálogo
---

<header class="hero">
    <h1 class="hero-title">Catálogo de Producción Académica</h1>
    <p class="hero-subtitle catalogo-hero-subtitle">
        Explora la producción científica, desarrollos tecnológicos, participaciones en congresos y estadías profesionales del grupo de investigación DBI.
    </p>
</header>

<div class="container catalogo-container">

    <!-- Barra de búsqueda principal -->
    <div class="catalogo-search-bar">

        <div class="catalogo-input-wrapper">
            <i class="fas fa-search search-icon"></i>
            <input
                type="text"
                id="searchInput"
                placeholder="Buscar por título, autor, tecnología o palabras clave..."
                class="catalogo-input-text"
                aria-label="Buscar proyectos">
        </div>

        <div class="catalogo-filter-controls">
            <div class="catalogo-select-wrapper">
                <i class="fas fa-calendar-alt select-icon"></i>
                <select
                    id="filterAnio"
                    class="catalogo-select-anio"
                    aria-label="Filtrar por año">
                    <option value="todos">Todos los años</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                </select>
            </div>

            <button id="btnLimpiar" type="button" class="btn-limpiar" title="Restablecer filtros">
                <i class="fas fa-redo-alt"></i>
                <span>Limpiar</span>
            </button>
        </div>

    </div>

    <!-- Píldoras / Botones de Filtro Rápido -->
    <div class="catalogo-pills-container" id="catalogoPills">
        <button type="button" class="catalogo-pill active" data-filter="todos">
            <i class="fas fa-th-large"></i> Todos
        </button>
        <button type="button" class="catalogo-pill" data-filter="articulo">
            <i class="fas fa-file-alt"></i> Artículos
        </button>
        <button type="button" class="catalogo-pill" data-filter="congreso">
            <i class="fas fa-award"></i> Congresos
        </button>
        <button type="button" class="catalogo-pill" data-filter="libro">
            <i class="fas fa-book"></i> Capítulos de Libro
        </button>
        <button type="button" class="catalogo-pill" data-filter="prototipo">
            <i class="fas fa-microchip"></i> Prototipos / Software
        </button>
        <button type="button" class="catalogo-pill" data-filter="estadia">
            <i class="fas fa-user-graduate"></i> Estadías y Estancias
        </button>
    </div>

    <!-- Contador de Resultados -->
    <div id="contadorResultados" class="contador-resultados">
        Mostrando todos los proyectos
    </div>

    {% assign todos_los_items = site.proyectos | concat: site.estadias | concat: site.eventos %}
    {% assign proyectos_ordenados = todos_los_items | uniq: "url" | sort: "anio" | reverse %}

    <!-- Cuadrícula de Proyectos -->
    <div class="grid catalogo-grid" id="catalogoGrid">

        {% for proyecto in proyectos_ordenados %}

        <div
            class="card proyecto-item"
            data-anio="{{ proyecto.anio }}"
            data-tipo="{{ proyecto.tipo | join: ' ' | downcase }} {{ proyecto.modalidad | downcase }}"
            data-fulltext="{{ proyecto.title | downcase }} {{ proyecto.autor | downcase }} {{ proyecto.autores_lista | join: ' ' | downcase }} {{ proyecto.resumen | downcase }} {{ proyecto.anio }} {{ proyecto.modalidad | downcase }}">

            <!-- Miniatura / Banner Superior -->
            <div class="proyecto-thumb">
                {% if proyecto.imagen and proyecto.imagen != "" %}
                    <img src="{{ proyecto.imagen }}" alt="{{ proyecto.title }}" loading="lazy">
                {% else %}
                    <div class="proyecto-thumb-fallback {% if proyecto.modalidad %}thumb-estadia{% elsif proyecto.tipo contains 'Capítulo de Libro' %}thumb-libro{% elsif proyecto.tipo contains 'Congreso' or proyecto.tipo contains 'Memorias de Congreso' %}thumb-congreso{% else %}thumb-general{% endif %}">
                        {% if proyecto.modalidad %}
                            <i class="fas fa-user-graduate"></i>
                            <span>{{ proyecto.modalidad }} Industrial</span>
                        {% elsif proyecto.tipo contains "Capítulo de Libro" %}
                            <i class="fas fa-book"></i>
                            <span>Publicación Editorial</span>
                        {% elsif proyecto.tipo contains "Congreso" or proyecto.tipo contains "Memorias de Congreso" %}
                            <i class="fas fa-award"></i>
                            <span>Ponencia / Congreso</span>
                        {% else %}
                            <i class="fas fa-microchip"></i>
                            <span>I+D Biomédica</span>
                        {% endif %}
                    </div>
                {% endif %}
            </div>

            <!-- Cuerpo de la tarjeta -->
            <div class="proyecto-card-body">

                <div class="proyecto-tag-wrapper">
                    <span class="project-tag">
                        {{ proyecto.anio }} |
                        {% if proyecto.modalidad %}
                            {{ proyecto.modalidad }}
                        {% else %}
                            {{ proyecto.nivel }}
                        {% endif %}
                    </span>

                    {% for t in proyecto.tipo %}
                        {% if t != proyecto.modalidad %}
                            {% assign tipo_slug = t | downcase | replace: "á", "a" | replace: "é", "e" | replace: "í", "i" | replace: "ó", "o" | replace: "ú", "u" | replace: "ñ", "n" | replace: " ", "-" %}
                            <span class="badge-tipo tipo-{{ tipo_slug }}">
                                {{ t }}
                            </span>
                        {% endif %}
                    {% endfor %}
                </div>

                <h3 class="proyecto-titulo">
                    <a href="{{ proyecto.url | relative_url }}">
                        {{ proyecto.title }}
                    </a>
                </h3>

                <p class="proyecto-autor">
                    <i class="far fa-user"></i>
                    <span>
                        {% if proyecto.autor %}
                            {{ proyecto.autor }}
                        {% elsif proyecto.autores_lista %}
                            {{ proyecto.autores_lista | join: ", " }}
                        {% endif %}
                    </span>
                </p>

                <p class="proyecto-resumen">
                    {{ proyecto.resumen | truncate: 130 }}
                </p>

            </div>

            <!-- Pie de tarjeta -->
            <div class="proyecto-footer">
                <div class="proyecto-resources">
                    {% if proyecto.doi_link and proyecto.doi_link != "" %}
                        <span class="micro-res-badge badge-doi" title="Publicación indexada con DOI">
                            <i class="fas fa-book"></i> DOI
                        </span>
                    {% endif %}
                    {% if proyecto.drive and proyecto.drive != "" %}
                        <span class="micro-res-badge badge-constancia" title="Constancia de participación">
                            <i class="fas fa-file-lines"></i> Constancia
                        </span>
                    {% endif %}
                    {% if proyecto.github %}
                        <span class="micro-res-badge badge-code" title="Código / Repositorio">
                            <i class="fab fa-github"></i> Código
                        </span>
                    {% endif %}
                    {% if proyecto.youtube %}
                        <span class="micro-res-badge badge-yt" title="Demostración en video">
                            <i class="fab fa-youtube"></i> Video
                        </span>
                    {% endif %}
                </div>

                <a href="{{ proyecto.url | relative_url }}" class="project-link-btn">
                    Ver detalles&nbsp;&rarr;
                </a>
            </div>

        </div>

        {% endfor %}

    </div>

    <!-- Paginación Numérica -->
    <div class="catalogo-pagination" id="catalogoPagination" aria-label="Paginación de proyectos">
        <!-- Generado dinámicamente con JS -->
    </div>

</div>

<script src="{{ '/assets/js/catalogo.js' | relative_url }}"></script>
