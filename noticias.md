---
layout: default
title: Noticias
page_css: /assets/css/noticias.css
---

<header class="hero">
    <h1 class="hero-title">Noticias y Actividades</h1>
    <p class="hero-subtitle">
        Acontecimientos, logros académicos, conferencias y participaciones del grupo DBI.
    </p>
</header>

<div class="container" style="margin-top: 40px; margin-bottom: 60px;">

    <!-- Filtros por Año (generados automáticamente) -->
    <div class="noticias-filtros">
        <div class="noticias-filtros-wrapper">
            <button class="filter-btn active" onclick="filterNoticias('todos', this)">
                Todos
            </button>

            {% assign anios = site.noticias | map: "anio" | uniq | sort | reverse %}
            {% for anio in anios %}
            <button class="filter-btn" onclick="filterNoticias('{{ anio }}', this)">
                {{ anio }}
            </button>
            {% endfor %}
        </div>
    </div>

    <!-- Contador de resultados -->
    <div id="noticiasContador" class="noticias-contador">
        Mostrando todas las noticias
    </div>

    <!-- Listado de noticias -->
    {% assign noticias_ordenadas = site.noticias | sort: "date" | reverse %}
    {% for noticia in noticias_ordenadas %}
    <article class="card-noticia" data-anio="{{ noticia.anio }}" data-categoria="{{ noticia.categoria_tag }}">
        
        {% if noticia.imagen_noticia and noticia.imagen_noticia != "" %}
        <div class="noticia-imagen" style="background-image: url('{{ noticia.imagen_noticia }}');">
        </div>
        {% endif %}
        
        <div class="noticia-contenido">
            <div class="noticia-meta">
                <span class="noticia-badge-categoria">
                    {{ noticia.categoria_tag }}
                </span>
                <span class="noticia-badge-anio">
                    <i class="far fa-calendar-alt"></i> {{ noticia.anio }}
                </span>
                <span class="noticia-fecha">
                    {{ noticia.fecha_texto }}
                </span>
            </div>
            
            <h2 class="noticia-titulo">
                {{ noticia.title }}
            </h2>
            
            <div class="noticia-cuerpo">
                {{ noticia.content | markdownify }}
            </div>
        </div>
    </article>
    {% else %}
    <p class="noticias-vacio">No hay noticias publicadas por el momento.</p>
    {% endfor %}

    <!-- Mensaje cuando no hay resultados del filtro -->
    <div id="noticiasVacio" class="noticias-vacio" style="display: none;">
        <i class="fas fa-newspaper" style="font-size: 2rem; margin-bottom: 10px; opacity: 0.4;"></i>
        <p>No hay noticias registradas para este año.</p>
    </div>

</div>

<script src="{{ '/assets/js/noticias.js' | relative_url }}"></script>
