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

            {% assign anios_galeria = site.data.galeria | map: "anio" | uniq | sort | reverse %}
            {% for anio in anios_galeria %}
            <button class="filter-btn" onclick="filterGallery('{{ anio }}', this)">
                {{ anio }}
            </button>
            {% endfor %}
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
            data-titulo="{{ item.titulo | escape }}"
            data-desc="{{ item.descripcion | escape }}"
            data-imagenes="{{ item.imagen | escape }}"
            onclick="openModalFromCard(this)">

            <img
                src="{{ ruta_final }}"
                class="gallery-thumb"
                alt="{{ item.titulo | escape }}"
                loading="lazy">

            {% comment %}
            Indicador visual cuando existen varias imágenes.
            {% endcomment %}

            {% if fotos.size > 1 %}
            <div class="gallery-count-badge">
                <i class="fas fa-camera"></i> {{ fotos.size }} fotos
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

    <div id="galeriaVacio" class="galeria-vacio" style="display: none;">
        <i class="fas fa-images" style="font-size: 2rem; margin-bottom: 10px; opacity: 0.4;"></i>
        <p>No hay actividades registradas para este año.</p>
    </div>

</div>

<div id="galleryModal" class="gallery-modal" onclick="closeModal()">

    <a
        id="modalOriginalLink"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        class="modal-original-btn"
        title="Abrir imagen original"
        aria-label="Abrir imagen original"
        onclick="event.stopPropagation()">
        <i class="fas fa-external-link-alt"></i>
    </a>

    <span class="close-btn" onclick="closeModal()" title="Cerrar">
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
        id="modalThumbnails"
        class="gallery-modal-thumbnails"
        onclick="event.stopPropagation()">
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