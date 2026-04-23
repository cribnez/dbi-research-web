---
layout: default
title: Sistema IoT de Monitoreo Geriátrico
proyecto_id: monitoreo_geriatrico_iot
---

{% assign proyecto_info = site.data.proyectos | where: "id", page.proyecto_id | first %}

<link rel="stylesheet" href="{{ '/assets/css/catalogo.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/proyecto-detalle.css' | relative_url }}">

<div class="container proyecto-detalle-container">
    
    <a href="{{ '/catalogo' | relative_url }}" class="volver-link">
        <span>←</span> Volver al catálogo
    </a>

    <h1 class="proyecto-header-title">{{ proyecto_info.titulo }}</h1>
    
    <div class="proyecto-meta-tags">
        <span class="meta-badge badge-anio">Año: {{ proyecto_info.anio }}</span>
        <span class="meta-badge badge-nivel">{{ proyecto_info.nivel }}</span>
        
        {% for t in proyecto_info.tipo %}
            {% assign tipo_slug = t | downcase | replace: "á", "a" | replace: "é", "e" | replace: "í", "i" | replace: "ó", "o" | replace: "ú", "u" %}
            <span class="badge-tipo tipo-{{ tipo_slug }}">{{ t }}</span>
        {% endfor %}
    </div>

    <div class="divider"></div>

    <div class="proyecto-main-grid">
        
        <div class="col-info">
            {% if proyecto_info.imagen %}
            <div class="proyecto-img-wrapper">
                <img src="{{ proyecto_info.imagen | relative_url }}" alt="{{ proyecto_info.titulo }}">
            </div>
            {% endif %}

            <h3 class="seccion-titulo">Resumen del Proyecto</h3>
            <p class="resumen-texto">
                {{ proyecto_info.resumen }}
            </p>

            <h3 class="seccion-titulo">Resultados Principales</h3>
            <ul class="lista-resultados">
                {% for resultado in proyecto_info.resultados_lista %}
                    <li>{{ resultado }}</li>
                {% endfor %}
            </ul>
        </div>

        <div class="sidebar-equipo">
            <h4 class="sidebar-titulo" style="color: var(--azul-oscuro); margin-top: 0; margin-bottom: 20px; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px;">Equipo de Trabajo</h4>
            
            <div class="equipo-block" style="margin-bottom: 25px;">
            <p class="sidebar-label">Investigadores a cargo (Directores):</p>
            {% for dir in proyecto_info.director %}
                <p style="margin: 0; color: #333; font-weight: 500;">{{ dir }}</p>
            {% else %}
                <p style="margin: 0; color: #333; font-weight: 500;">{{ proyecto_info.director }}</p>
            {% endfor %}
        </div>

            <div class="equipo-block" style="margin-bottom: 20px;">
                <p class="sidebar-label">Alumnas/os autores:</p>
                <ul style="margin: 0; padding-left: 18px; color: #555; font-size: 0.95rem; line-height: 1.6;">
                    {% for autor in proyecto_info.autores_lista %}
                        <li>{{ autor }}</li>
                    {% endfor %}
                </ul>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px dotted #ccc; font-size: 0.85rem; color: #777;">
                <p><strong>Laboratorio:</strong> DBI Research Lab</p>
                <p><strong>Institución:</strong> {{ proyecto_info.escuela }}</p>
            </div>

            {% if proyecto_info.github %}
            <div style="margin-top: 30px;">
                <a href="{{ proyecto_info.github }}" target="_blank" class="btn-github">
                    <i class="fab fa-github"></i> Ver documentación completa
                </a>
            </div>
            {% endif %}
        </div>
    </div>
</div>