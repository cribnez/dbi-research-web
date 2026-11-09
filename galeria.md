---
layout: galeria
title: Galería
---

<header class="hero">
    <h1 class="hero-title">Galería de Actividades</h1>
    <p class="hero-subtitle">
        Momentos clave de nuestra labor investigativa.
    </p>
</header>

<div class="container galeria-container">

    <div class="galeria-filtros">

        <div class="galeria-filtros-wrapper">
            <button class="filter-btn active" onclick="filterGallery('todos', this)">
                Todos
            </button>

            <button class="filter-btn" onclick="filterGallery('2026', this)">
                2026
            </button>

            <button class="filter-btn" onclick="filterGallery('2025', this)">
                2025
            </button>

            <button class="filter-btn" onclick="filterGallery('2024', this)">
                2024
            </button>
        </div>

    </div>

    <div class="grid gallery-grid" id="galleryGrid">

        {% for item in site.data.galeria %}

        {% comment %}
        Separamos por ";" en caso de que sea un álbum con varias fotos.
        {% endcomment %}

        {% assign fotos = item.imagen | split: ";" %}
        {% assign primera_foto = fotos[0] | strip %}

        {% comment %}
        Detectamos si la imagen es una URL externa o local.
        {% endcomment %}

        {% assign es_externo = primera_foto | slice: 0, 4 %}

        {% if es_externo == "http" %}
            {% assign ruta_final = primera_foto %}
        {% else %}
            {% assign ruta_final = primera_foto | prepend: "/assets/img/" | relative_url %}
        {% endif %}

        <div
            class="card gallery-item"
            data-anio="{{ item.anio }}"
            onclick="openModal('{{ item.titulo }}', '{{ item.descripcion }}', '{{ item.imagen }}')">

            <img
                src="{{ ruta_final }}"
                class="gallery-thumb"
                alt="{{ item.titulo }}">

            {% comment %}
            Indicador visual cuando existen varias imágenes.
            {% endcomment %}

            {% if fotos.size > 1 %}
            <div class="gallery-count-badge">
                +{{ fotos.size | minus: 1 }}
            </div>
            {% endif %}

            <div class="gallery-overlay">

                <h3 class="gallery-overlay-title">
                    {{ item.titulo }}
                </h3>

                <span class="gallery-overlay-year">
                    {{ item.anio }}
                </span>

            </div>

        </div>

        {% endfor %}

    </div>

</div>

<div id="galleryModal" class="gallery-modal" onclick="closeModal()">

    <span class="close-btn" onclick="closeModal()">
        &times;
    </span>

    <div class="gallery-modal-image-wrapper">

        <button
            id="prevBtn"
            class="gallery-nav-btn"
            onclick="prevImg(event)">
            ❮
        </button>

        <img
            id="modalImg"
            class="gallery-modal-image"
            onclick="event.stopPropagation()"
            alt="Imagen ampliada">

        <button
            id="nextBtn"
            class="gallery-nav-btn"
            onclick="nextImg(event)">
            ❯
        </button>

    </div>

    <div
        class="gallery-modal-info"
        onclick="event.stopPropagation()">

        <h2 id="modalTitle"></h2>

        <p id="modalDesc"></p>

        <span id="imgCounter"></span>

    </div>

</div>

<script>
    const GLOBAL_BASE_URL = '{{ "/assets/img/" | relative_url }}';
</script>

<script src="{{ '/assets/js/galeria.js' | relative_url }}"></script>