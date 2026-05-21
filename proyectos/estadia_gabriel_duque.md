---
layout: default
title: Detalle de Estadía
proyecto_id: estadia_gabriel_duque
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
        <span class="meta-badge meta-badge-modalidad">{{ proyecto_info.modalidad | upcase }}</span>
        <span class="meta-badge badge-nivel">{{ proyecto_info.nivel | upcase }}</span>
    </div>

    <div class="divider"></div>

    <div class="proyecto-main-grid">
        <div class="col-info">
            {% if proyecto_info.imagen and proyecto_info.imagen != "" %}
            <div class="proyecto-img-wrapper" style="margin-bottom: 25px;">
                <img src="{{ proyecto_info.imagen }}" alt="Imagen del Proyecto" style="width: 100%; border-radius: 8px;">
            </div>
            {% endif %}

            <h3 class="seccion-titulo-azul">Resumen de la {{ proyecto_info.modalidad | downcase }}</h3>
            <p class="resumen-texto">{{ proyecto_info.resumen }}</p>

            <h4 class="objetivos-titulo"><i class="fas fa-tasks"></i> Objetivos Académicos:</h4>
            <ul class="objetivos-lista">
                <li><i class="fas fa-check-circle"></i> Aplicación de competencias profesionales del ciclo correspondiente.</li>
                <li><i class="fas fa-check-circle"></i> Elaboración de memoria técnica institucional.</li>
                <li><i class="fas fa-check-circle"></i> Cumplimiento de {{ proyecto_info.horas }} de vinculación profesional.</li>
            </ul>
        </div>

        <div class="sidebar-validacion">
            <h4 class="proyecto-header-title" style="font-size: 1.1rem; margin-top: 0;">Validación Institucional</h4>
            
            <div style="margin-bottom: 20px;">
                <p class="sidebar-subtitulo">Asesor(es):</p>
                {% for dir in proyecto_info.director %}
                    <p style="margin: 0; color: #333; font-weight: 500;">{{ dir }}</p>
                {% endfor %}
            </div>

            <div style="margin-bottom: 25px;">
                <p class="sidebar-subtitulo">Alumno(a) en {{ proyecto_info.modalidad }}:</p>
                <p style="margin: 0; color: #555;">
                    <i class="fas fa-user-graduate" style="color: #003366; margin-right: 8px;"></i>
                    {{ proyecto_info.autores_lista | first }}
                </p>
            </div>

            <div class="sidebar-info-adicional">
                <p><strong>Institución:</strong> {{ proyecto_info.escuela }}</p>
                <p><strong>Carrera:</strong> {{ proyecto_info.carrera | default: "Ingeniería Biomédica" }}</p>
                <p><strong>Matrícula:</strong> {{ proyecto_info.matricula }}</p>
                <p><strong>Horas:</strong> {{ proyecto_info.horas }}</p>
                <p><strong>Periodo:</strong> {{ proyecto_info.periodo }}</p>
            </div>

            {% if proyecto_info.github %}
            <div style="margin-top: 25px;">
                <a href="{{ proyecto_info.github | relative_url }}" target="_blank" class="btn-pdf-institucional">
                    <i class="fas fa-file-pdf"></i> Ver Carta de Presentación
                </a>
            </div>
            {% endif %}
        </div>
    </div>
</div>