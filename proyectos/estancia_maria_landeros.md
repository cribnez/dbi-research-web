---
layout: default
title: Detalle de Estancia Industrial II
proyecto_id: estancia_maria_landeros
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
        
        <span class="meta-badge" style="background-color: #e3f2fd; color: #1976d2; font-weight: bold;">
            {{ proyecto_info.modalidad | upcase }}
        </span>

        <span class="meta-badge badge-nivel" style="background-color: #fdf3e7; color: #d35400;">{{ proyecto_info.nivel | upcase }}</span>
    </div>

    <div class="divider"></div>

    <div class="proyecto-main-grid">
        
        <div class="col-info">
            {% if proyecto_info.imagen and proyecto_info.imagen != "" %}
            <div class="proyecto-img-wrapper" style="margin-bottom: 25px;">
                <img src="{{ proyecto_info.imagen }}" alt="Imagen del Proyecto" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            </div>
            {% endif %}

            <h3 class="seccion-titulo" style="color: #003366; border-left: 4px solid #1976d2; padding-left: 10px;">Resumen de la Estancia</h3>
            <p class="resumen-texto" style="text-align: justify; line-height: 1.6; color: #444;">
                {{ proyecto_info.resumen }}
            </p>

            <h4 style="color: #1976d2; margin-top: 25px;"><i class="fas fa-heartbeat"></i> Objetivos Académicos:</h4>
            <ul style="list-style: none; padding-left: 0; color: #555; font-size: 0.95rem;">
                <li style="margin-bottom: 8px;"><i class="fas fa-check-circle" style="color: #1976d2; margin-right: 10px;"></i> Aplicación de competencias del segundo ciclo de formación.</li>
                <li style="margin-bottom: 8px;"><i class="fas fa-check-circle" style="color: #1976d2; margin-right: 10px;"></i> Desarrollo de memoria técnica institucional.</li>
                <li style="margin-bottom: 8px;"><i class="fas fa-check-circle" style="color: #1976d2; margin-right: 10px;"></i> Cumplimiento de 120 horas de vinculación profesional.</li>
            </ul>
        </div>

        <div class="sidebar-equipo" style="background-color: #f8f9fa; border-radius: 12px; padding: 25px; border: 1px solid #e9ecef;">
            
            <h4 style="color: #003366; margin-top: 0; margin-bottom: 20px; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px;">Validación Institucional</h4>
            
            <div style="margin-bottom: 20px;">
                <p style="font-size: 0.85rem; color: #1976d2; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">Asesor de Estancia:</p>
                {% for dir in proyecto_info.director %}
                    <p style="margin: 0; color: #333; font-weight: 500;">{{ dir }}</p>
                {% endfor %}
            </div>

            <div style="margin-bottom: 25px;">
                <p style="font-size: 0.85rem; color: #1976d2; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">Alumno(a) en Estancia:</p>
                <p style="margin: 0; color: #555;">
                    <i class="fas fa-user-graduate" style="color: #1976d2; margin-right: 8px;"></i>
                    {{ proyecto_info.autores_lista | first }}
                </p>
            </div>

            <div style="border-top: 1px dotted #ccc; padding-top: 20px; font-size: 0.85rem; color: #666;">
                <p style="margin-bottom: 8px;"><strong>Institución:</strong> {{ proyecto_info.escuela }}</p>
                <p style="margin-bottom: 8px;"><strong>Carrera:</strong> {{ proyecto_info.carrera }}</p>
                <p style="margin-bottom: 8px;"><strong>Matrícula:</strong> {{ proyecto_info.matricula }}</p>
                <p style="margin-bottom: 8px;"><strong>Horas:</strong> {{ proyecto_info.horas }}</p>
                <p style="margin-bottom: 8px;"><strong>Correo:</strong> <a href="mailto:{{ proyecto_info.correo }}" style="color: #666; text-decoration: none;">{{ proyecto_info.correo }}</a></p>
                <p style="margin-bottom: 8px;"><strong>Periodo:</strong> {{ proyecto_info.periodo }}</p>
            </div>

            {% if proyecto_info.github %}
            <div style="margin-top: 25px;">
                <a href="{{ proyecto_info.github | relative_url }}" target="_blank" style="display: block; text-align: center; background-color: #1976d2; color: white; padding: 12px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 0.9rem;">
                    <i class="fas fa-file-pdf" style="margin-right: 8px;"></i> Ver Carta de Presentación
                </a>
            </div>
            {% endif %}
            
        </div>
    </div>
</div>