---
layout: default
title: Catálogo
---

<link rel="stylesheet" href="{{ '/assets/css/catalogo.css' | relative_url }}">

<header class="hero">
    <h1 class="hero-title catalogo-hero-title">Catálogo de Producción Académica</h1>
    <p class="hero-subtitle catalogo-hero-subtitle">
        Explora las investigaciones, estadías y proyectos desarrollados por nuestro grupo de investigación.
    </p>
</header>

<div class="container">
    
    <div class="search-container catalogo-search-wrapper">
        <div class="catalogo-input-container" style="flex: 2;">
            <input type="text" id="searchInput" placeholder="Buscar por título, autor o tecnología..." class="search-input catalogo-input-text">
        </div>

        <select id="filterCategoria" class="search-input catalogo-select">
            <option value="todos">Todas las Categorías</option>
            <optgroup label="Investigación Académica">
                <option value="Ingeniería">Ingeniería</option>
                <option value="Maestría">Maestría</option>
                <option value="Doctorado">Doctorado</option>
            </optgroup>
            <optgroup label="Vinculación Profesional">
                <option value="Estadía">Estadías (600h)</option>
                <option value="Estancia">Estancias (120h)</option>
            </optgroup>
        </select>

        <select id="filterTipo" class="search-input catalogo-select">
            <option value="todos">Todos los Formatos</option>
            <option value="Artículo">Artículos</option>
            <option value="Congreso">Memorias de Congreso</option>
            <option value="Prototipo">Prototipos / Software</option>
            <option value="Tesis">Tesis</option>
        </select>

        <button id="btnLimpiar">
            <i class="fas fa-redo-alt" style="margin-right: 8px; font-size: 0.8rem;"></i> Limpiar
        </button>
    </div>

    <div id="contadorResultados" style="margin-bottom: 20px; font-style: italic; color: #666; font-size: 0.9rem;">
        Mostrando todos los proyectos
    </div>

    <div class="grid" id="catalogoGrid">
        {% for proyecto in site.data.proyectos %}
        <div class="card proyecto-item" 
             data-categoria="{{ proyecto.nivel }} {{ proyecto.modalidad }}" 
             data-anio="{{ proyecto.anio }}"
             data-tipo="{{ proyecto.tipo | join: ',' }}"
             data-fulltext="{{ proyecto.titulo | downcase }} {{ proyecto.autores_lista | join: ' ' | downcase }} {{ proyecto.resumen | downcase }}"> 
            
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
                            {% assign tipo_slug = t | downcase | replace: "á", "a" | replace: "é", "e" | replace: "í", "i" | replace: "ó", "o" | replace: "ú", "u" | replace: " ", "-" %}
                            <span class="badge-tipo tipo-{{ tipo_slug }}">{{ t }}</span>
                        {% endif %}
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