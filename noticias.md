---
layout: default
title: Noticias
---

<header class="hero">
    <h1 class="hero-title">Noticias y Actividades</h1>
    <p class="hero-subtitle">
        Acontecimientos, logros académicos, conferencias y participaciones del grupo DBI.
    </p>
</header>

<div class="container" style="margin-top: 40px; margin-bottom: 60px;">

    <div style="margin-bottom: 25px; color: #666; font-size: 0.95rem;">
        Mostrando todas las noticias y eventos publicados:
    </div>

    {% assign noticias_ordenadas = site.noticias | reverse %}
    {% for noticia in noticias_ordenadas %}
    <article class="card-noticia" style="display: flex; flex-wrap: wrap; align-items: stretch; background: #fff; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border-left: 5px solid #003366; margin-bottom: 25px; width: 100%; overflow: hidden;">
        
        {% if noticia.imagen_noticia and noticia.imagen_noticia != "" %}
        <div class="noticia-imagen" style="flex: 0 0 260px; min-height: 200px; background-image: url('{{ noticia.imagen_noticia }}'); background-size: cover; background-position: center;">
        </div>
        {% endif %}
        
        <div class="noticia-contenido" style="flex: 1; min-width: 300px; padding: 25px 30px; display: flex; flex-direction: column; justify-content: center;">
            <div class="noticia-meta" style="font-size: 0.85rem; color: #888; margin-bottom: 10px;">
                <span style="background: #e6f0fa; color: #003366; padding: 4px 8px; border-radius: 4px; font-weight: bold; margin-right: 10px;">
                    {{ noticia.categoria_tag }}
                </span>
                <i class="far fa-calendar-alt"></i> {{ noticia.fecha_texto }}
            </div>
            
            <h2 style="margin: 0 0 12px 0; color: #003366; font-size: 1.35rem; font-weight: bold; line-height: 1.3;">
                {{ noticia.title }}
            </h2>
            
            <div style="color: #444; line-height: 1.6; font-size: 0.95rem; text-align: justify;">
                {{ noticia.content | markdownify }}
            </div>
        </div>
    </article>
    {% else %}
    <p style="font-style: italic; color: #777;">No hay noticias publicadas por el momento.</p>
    {% endfor %}

</div>
