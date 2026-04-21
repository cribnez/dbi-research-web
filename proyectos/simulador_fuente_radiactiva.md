---
layout: default
title: Simulador de Fuente Radiactiva
proyecto_id: simulador_fuente_radiactiva
---

{% comment %} 
Esta línea es la "magia". Busca en _data/proyectos.yml el proyecto que coincida con el ID de arriba 
{% endcomment %}
{% assign proyecto_info = site.data.proyectos | where: "id", page.proyecto_id | first %}

<div class="container" style="background: white; padding: 40px; border-radius: 12px; margin-top: 40px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); margin-bottom: 60px;">
    
    <a href="{{ '/' | relative_url }}" style="color: var(--azul-primario); text-decoration: none; font-weight: bold; display: flex; align-items: center; gap: 5px;">
        <span>←</span> Volver al inicio
    </a>

    <h1 style="color: var(--azul-oscuro); margin-top: 25px; line-height: 1.2;">{{ proyecto_info.titulo }}</h1>
    
    <div style="display: flex; gap: 15px; margin-top: 10px;">
        <span style="background: #eef4ff; color: var(--azul-primario); padding: 5px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: bold;">Año: {{ proyecto_info.anio }}</span>
        <span style="background: #fdf2e9; color: #d35400; padding: 5px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: bold;">Categoría: {{ proyecto_info.nivel }}</span>
    </div>

    <div style="width: 100%; height: 1px; background: #eee; margin: 30px 0;"></div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
        
        <div>
            <h3 style="color: var(--azul-oscuro); border-left: 4px solid var(--azul-primario); padding-left: 10px;">Resumen del Proyecto</h3>
            <p style="color: #444; line-height: 1.7; text-align: justify;">
                {{ proyecto_info.resumen }}
            </p>

            <h3 style="color: var(--azul-oscuro); margin-top: 30px; border-left: 4px solid var(--azul-primario); padding-left: 10px;">Resultados Principales</h3>
            <ul style="color: #444; line-height: 1.8; padding-left: 20px;">
                {% for resultado in proyecto_info.resultados_lista %}
                    <li>{{ resultado }}</li>
                {% endfor %}
            </ul>

            <div style="margin-top: 40px;">
                <a href="{{ proyecto_info.github }}" target="_blank" style="background: var(--azul-oscuro); color: white; padding: 15px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    <i class="fab fa-github"></i> Ver documentación completa
                </a>
            </div>
        </div>

        <div style="background: #f8f9fa; padding: 25px; border-radius: 12px; border: 1px solid #eee;">
            <h4 style="color: var(--azul-oscuro); margin-top: 0; margin-bottom: 20px; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px;">Equipo de Trabajo</h4>
            
            <div style="margin-bottom: 25px;">
                <p style="color: var(--azul-primario); font-weight: bold; font-size: 0.8rem; margin-bottom: 5px; text-transform: uppercase;">Investigador a cargo (Director):</p>
                <p style="margin: 0; color: #333; font-weight: 500;">{{ proyecto_info.director }}</p>
            </div>

            <div style="margin-bottom: 20px;">
                <p style="color: var(--azul-primario); font-weight: bold; font-size: 0.8rem; margin-bottom: 5px; text-transform: uppercase;">Alumnas autoras:</p>
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
        </div>
    </div>
</div>