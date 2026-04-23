---
layout: default
title: Catálogo
---

<link rel="stylesheet" href="{{ '/assets/css/catalogo.css' | relative_url }}">

<header class="hero">
    <h1 class="hero-title catalogo-hero-title">Catálogo de Producción Académica</h1>
    <p class="hero-subtitle catalogo-hero-subtitle">
        Explora las tesis, artículos y proyectos desarrollados por nuestro grupo de investigación.
    </p>
</header>

<div class="container">
    
    <div class="search-container catalogo-search-wrapper">
        <div class="catalogo-input-container">
            <input type="text" id="searchInput" placeholder="Buscar por título o autor..." class="search-input catalogo-input-text">
        </div>

        <select id="filterTipo" class="search-input catalogo-select">
            <option value="todos">Todos los Tipos</option>
            <option value="Tesis">Tesis</option>
            <option value="Artículo">Artículos</option>
            <option value="Congreso">Memorias de Congreso</option>
            <option value="Prototipo">Prototipos / Software</option>
        </select>

        <select id="filterNivel" class="search-input catalogo-select">
            <option value="todos">Todos los Niveles</option>
            <option value="Ingeniería">Ingeniería</option>
            <option value="Maestría">Maestría</option>
            <option value="Doctorado">Doctorado</option>
        </select>

        <select id="filterAnio" class="search-input catalogo-select">
            <option value="todos">Todos los Años</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
        </select>
    </div>

    <div class="grid" id="catalogoGrid">
        {% for proyecto in site.data.proyectos %}
        <div class="card proyecto-item" 
             data-nivel="{{ proyecto.nivel }}" 
             data-anio="{{ proyecto.anio }}"
             data-tipo="{{ proyecto.tipo | join: ',' }}"> 
            
            <div>
                <div class="proyecto-tag-wrapper">
                    <span class="project-tag">
                        {{ proyecto.anio }} | {{ proyecto.nivel }}
                    </span>
                    
                    {% for t in proyecto.tipo %}
                        {% assign tipo_slug = t | downcase | replace: "á", "a" | replace: "é", "e" | replace: "í", "i" | replace: "ó", "o" | replace: "ú", "u" %}
                        <span class="badge-tipo tipo-{{ tipo_slug }}">{{ t }}</span>
                    {% endfor %}
                </div>

                <h3 class="proyecto-titulo">{{ proyecto.titulo }}</h3>

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
                <a href="{{ proyecto.link | relative_url }}" class="project-link proyecto-link-btn">
                    Ver detalles →
                </a>
            </div>
        </div>
        {% endfor %}
    </div>
</div>

<script src="{{ '/assets/js/catalogo.js' | relative_url }}"></script>