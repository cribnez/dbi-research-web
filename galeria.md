---
layout: default
title: Galería
---

<header class="hero">
    <h1 class="hero-title">Galería de Actividades</h1>
    <p class="hero-subtitle">Momentos clave de nuestra labor investigativa.</p>
</header>

<div class="container" style="margin-top: 60px;">
    
    <div style="text-align: center; margin-bottom: 40px;">
        <div style="display: inline-flex; gap: 10px; background: #f0f4f8; padding: 5px; border-radius: 30px;">
            <button class="filter-btn active" onclick="filterGallery('todos', this)">Todos</button>
            <button class="filter-btn" onclick="filterGallery('2026', this)">2026</button>
            <button class="filter-btn" onclick="filterGallery('2025', this)">2025</button>
            <button class="filter-btn" onclick="filterGallery('2024', this)">2024</button>
        </div>
    </div>

    <div class="grid" id="galleryGrid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px;">
        {% for item in site.data.galeria %}
        
        {% comment %} 1. Separamos por comas en caso de que sea un álbum con varias fotos {% endcomment %}
        {% assign fotos = item.imagen | split: ";" %}
        {% assign primera_foto = fotos[0] | strip %}

        {% comment %} 2. Tu lógica original para detectar Cloudinary o Local en la portada {% endcomment %}
        {% assign es_externo = primera_foto | slice: 0, 4 %}
        {% if es_externo == "http" %}
            {% assign ruta_final = primera_foto %}
        {% else %}
            {% assign ruta_final = primera_foto | prepend: "/assets/img/" | relative_url %}
        {% endif %}

        <div class="card gallery-item" data-anio="{{ item.anio }}" onclick="openModal('{{ item.titulo }}', '{{ item.descripcion }}', '{{ item.imagen }}')" 
             style="cursor: pointer; padding: 0; overflow: hidden; border-radius: 12px; height: 250px; position: relative; border: none; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            
            <img src="{{ ruta_final }}" 
                 style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" 
                 alt="{{ item.titulo }}">
            
            {% comment %} 3. Indicador visual si hay más de 1 foto {% endcomment %}
            {% if fotos.size > 1 %}
            <div style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 4px 10px; border-radius: 15px; font-size: 0.75rem; font-weight: bold; backdrop-filter: blur(4px);">
                +{{ fotos.size | minus: 1 }}
            </div>
            {% endif %}

            <div class="gallery-overlay">
                <h3 style="margin: 0; font-size: 0.95rem; font-weight: 600;">{{ item.titulo }}</h3>
                <span style="font-size: 0.75rem; opacity: 0.9;">{{ item.anio }}</span>
            </div>
        </div>
        {% endfor %}
    </div>
</div>

<div id="galleryModal" onclick="closeModal()" style="display:none; position: fixed; z-index: 9999; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); align-items: center; justify-content: center; padding: 20px; flex-direction: column;">
    <span class="close-btn" onclick="closeModal()">&times;</span>
    
    <div style="position: relative; width: 100%; max-width: 900px; text-align: center; display: flex; align-items: center; justify-content: center;">
        <button id="prevBtn" onclick="prevImg(event)" style="background: none; border: none; color: white; font-size: 40px; cursor: pointer; padding: 20px; display: none;">&#10094;</button>
        
        <img id="modalImg" onclick="event.stopPropagation()" style="max-width: 80%; max-height: 70vh; border-radius: 4px; box-shadow: 0 0 30px rgba(0,0,0,0.5);">
        
        <button id="nextBtn" onclick="nextImg(event)" style="background: none; border: none; color: white; font-size: 40px; cursor: pointer; padding: 20px; display: none;">&#10095;</button>
    </div>

    <div style="max-width: 700px; text-align: center; color: white; margin-top: 25px;" onclick="event.stopPropagation()">
        <h2 id="modalTitle" style="color: #3498db; margin-bottom: 10px; font-size: 1.5rem;"></h2>
        <p id="modalDesc" style="line-height: 1.6; font-size: 1rem; opacity: 0.9;"></p>
        <span id="imgCounter" style="font-size: 0.85rem; color: #aaa; display: block; margin-top: 10px;"></span>
    </div>
</div>

<link rel="stylesheet" href="{{ '/assets/css/galeria.css' | relative_url }}">

<script>
    // Le pasamos la ruta de Jekyll a una variable para que el archivo .js la pueda leer
    const GLOBAL_BASE_URL = '{{ "/assets/img/" | relative_url }}';
</script>
<script src="{{ '/assets/js/galeria.js' | relative_url }}"></script>