---
layout: catalogo
title: Catálogo
---

<header class="hero">
    <h1 class="hero-title">Catálogo de Producción Académica</h1>
    <p class="hero-subtitle catalogo-hero-subtitle">
        Explora las investigaciones, estadías y proyectos desarrollados por nuestro grupo de investigación.
    </p>
</header>

<div class="container">

    <div class="search-container catalogo-search-wrapper">

        <div class="catalogo-input-container">
            <input
                type="text"
                id="searchInput"
                placeholder="Buscar por título, autor o tecnología..."
                class="search-input catalogo-input-text"
                aria-label="Buscar proyectos">
        </div>

        <select
            id="filterCategoria"
            class="search-input catalogo-select"
            aria-label="Filtrar por categoría">

            <option value="todos">Todas las categorías</option>

            <optgroup label="Investigación Académica">
                <option value="Ingeniería">Ingeniería</option>
                <option value="Maestría">Maestría</option>
                <option value="Doctorado">Doctorado</option>
                <option value="Investigación / Publicación">
                    Investigación / Publicación
                </option>
            </optgroup>

            <optgroup label="Vinculación Profesional">
                <option value="Estadías">Estadías (600 h)</option>
                <option value="Estancia">Estancias (120 h)</option>
            </optgroup>

        </select>

        <select
            id="filterTipo"
            class="search-input catalogo-select"
            aria-label="Filtrar por formato">

            <option value="todos">Todos los formatos</option>
            <option value="Capítulo de Libro">Capítulos de Libro</option>
            <option value="Artículo">Artículos</option>
            <option value="Congreso">Memorias de Congreso</option>
            <option value="Prototipo">Prototipos / Software</option>
            <option value="Tesis">Tesis</option>

        </select>

        <button id="btnLimpiar" type="button">
            <i class="fas fa-redo-alt"></i>
            Limpiar
        </button>

    </div>

    <div id="contadorResultados" class="contador-resultados">
        Mostrando todos los proyectos
    </div>

    {% assign todos_los_items = site.proyectos | concat: site.estadias %}
    {% assign proyectos_ordenados = todos_los_items | uniq: "url" | sort: "anio" | reverse %}

    <div class="grid" id="catalogoGrid">

        {% for proyecto in proyectos_ordenados %}

        <div
            class="card proyecto-item"
            data-categoria="{{ proyecto.nivel }} {{ proyecto.modalidad }}"
            data-anio="{{ proyecto.anio }}"
            data-tipo="{{ proyecto.tipo | join: ',' }}"
            data-fulltext="{{ proyecto.title | downcase }} {{ proyecto.autores_lista | join: ' ' | downcase }} {{ proyecto.resumen | downcase }}">

            <div>

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

                            {% assign tipo_slug = t | slugify %}

                            <span class="badge-tipo tipo-{{ tipo_slug }}">
                                {{ t }}
                            </span>

                        {% endif %}
                    {% endfor %}

                </div>

                <h3 class="proyecto-titulo">
                    {{ proyecto.title }}
                </h3>

                <p class="proyecto-autor">
                    <strong>Por:</strong>

                    {% if proyecto.autor %}
                        {{ proyecto.autor }}
                    {% elsif proyecto.autores_lista %}
                        {{ proyecto.autores_lista | join: ", " }}
                    {% endif %}
                </p>

                <p class="proyecto-resumen">
                    {{ proyecto.resumen | truncate: 140 }}
                </p>

            </div>

            <div class="proyecto-footer">
                <a href="{{ proyecto.url | relative_url }}"
                   class="project-link proyecto-link-btn">
                    Ver detalles &rarr;
                </a>
            </div>

        </div>

        {% endfor %}

    </div>

    <div class="catalogo-load-more">

        <button id="btnCargarMas" type="button">
            Cargar más proyectos
            <i class="fas fa-plus"></i>
        </button>

    </div>

</div>

<script src="{{ '/assets/js/catalogo.js' | relative_url }}"></script>