---
layout: default
title: Detalle de Publicación
proyecto_id: libro_heart_monitoring_vest
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
        <span class="meta-badge badge-anio">AÑO: {{ proyecto_info.anio }}</span>
        
        {% assign modalidad_slug = proyecto_info.nivel | downcase | replace: "á", "a" | replace: "ó", "o" | replace: " ", "-" %}
        <span class="meta-badge meta-badge-modalidad tipo-{{ modalidad_slug }}">
            {{ proyecto_info.nivel | upcase }}
        </span>
        
        {% for t in proyecto_info.tipo %}
            {% assign tipo_slug = t | downcase | replace: "á", "a" | replace: "é", "e" | replace: "í", "i" | replace: "ó", "o" | replace: "ú", "u" | replace: " ", "-" %}
            <span class="meta-badge badge-tipo tipo-{{ tipo_slug }}">{{ t }}</span>
        {% endfor %}
    </div>

    <div class="divider"></div>

    <div class="proyecto-main-grid">
        
        <div class="col-info">
            {% if proyecto_info.imagen and proyecto_info.imagen != "" %}
            <div class="proyecto-img-wrapper">
                <img src="{{ proyecto_info.imagen | relative_url }}" alt="{{ proyecto_info.titulo }}">
            </div>
            {% endif %}

            <h3 class="seccion-titulo-azul">Resumen del Proyecto</h3>
            <p class="resumen-texto">
                {{ proyecto_info.resumen }}
            </p>

            <h3 class="seccion-titulo-azul">Resultados y Logros</h3>
            <ul class="objetivos-lista">
                {% for resultado in proyecto_info.resultados_lista %}
                    <li><i class="fas fa-check-circle"></i> {{ resultado }}</li>
                {% endfor %}
            </ul>
        </div>

        <div class="sidebar-validacion">
            <h4 class="sidebar-titulo" style="color: #003366; margin-top: 0; margin-bottom: 20px; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px;">Información Académica</h4>
            
            <div class="equipo-block" style="margin-bottom: 25px;">
                <p class="sidebar-subtitulo">Asesores / Co-autores:</p>
                {% for dir in proyecto_info.director %}
                    <p style="margin: 0; color: #333; font-weight: 500;">{{ dir }}</p>
                {% endfor %}
            </div>

            <div class="equipo-block" style="margin-bottom: 20px;">
                <p class="sidebar-subtitulo">Autores principales:</p>
                <ul style="margin: 0; padding-left: 18px; color: #555; font-size: 0.95rem; line-height: 1.6;">
                    {% for autor in proyecto_info.autores_lista %}
                        <li>{{ autor }}</li>
                    {% endfor %}
                </ul>
            </div>

            <div class="sidebar-info-adicional">
                <p><strong>Laboratorio:</strong> DBI Research Lab</p>
                <p><strong>Institución:</strong> {{ proyecto_info.escuela }}</p>
                <p><strong>Editorial:</strong> Springer Nature</p>
            </div>
            
            {% if proyecto_info.doi_link %}
            <div style="margin-top: 25px;">
                <a href="{{ proyecto_info.doi_link }}" target="_blank" class="btn-pdf-institucional" style="background-color: #3F51B5;">
                    <i class="fas fa-book"></i> Ver Capítulo en Springer
                </a>
            </div>
            {% endif %}

            {% if proyecto_info.github %}
            <div style="margin-top: 30px;">
                <a href="{{ proyecto_info.github | relative_url }}" target="_blank" class="btn-pdf-institucional">
                    <i class="fas fa-award"></i> Ver Reconocimiento CNIB
                </a>
            </div>
            {% endif %}
        </div>
    </div>
</div>