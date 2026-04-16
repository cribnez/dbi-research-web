---
layout: default
title: Inicio
---

<div class="hero">
    <span class="badge">INGENIERÍA Y TECNOLOGÍA</span>
    <h1 style="font-size: 2.5rem; margin-top: 20px;">Dispositivos Biomédicos Inteligentes</h1>
    <p style="font-size: 1.1rem; max-width: 600px; margin: 0 auto 30px; opacity: 0.9;">
        Innovación en algoritmos de IA y sistemas embebidos aplicados a la salud humana y veterinaria.
    </p>
    
    <div style="display: flex; max-width: 500px; margin: auto; background: white; border-radius: 30px; overflow: hidden; padding: 5px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
        <input type="text" placeholder="Buscar tesis, artículos..." style="flex: 1; border: none; padding: 12px 20px; outline: none; font-size: 1rem;">
        <button style="background: var(--azul-primario); color: white; border: none; padding: 10px 25px; border-radius: 25px; cursor: pointer; font-weight: bold;">Buscar</button>
    </div>
</div>

<div class="container">

    <div style="text-align: center; margin-bottom: 50px;">
        <h2 style="color: var(--azul-oscuro); font-size: 2.2rem; margin-bottom: 5px;">Investigadores Principales</h2>
        <div style="width: 60px; height: 4px; background: var(--azul-primario); margin: 0 auto 15px;"></div>
        <p style="color: #666;">Líderes académicos del grupo de investigación.</p>
    </div>

    <div style="text-align: center; margin: 60px 0 40px;">
        <h2 style="color: var(--azul-oscuro); font-size: 2.2rem; margin-bottom: 5px;">Líneas de Investigación</h2>
        <div style="width: 60px; height: 4px; background: var(--azul-primario); margin: 0 auto 15px;"></div>
    </div>

    <div class="grid">
        <div class="card" style="display: flex; flex-direction: column; gap: 15px;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <div style="background: var(--azul-primario); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 1.5rem;">
                    <i class="fas fa-microchip"></i>
                </div>
                <h3 style="color: var(--azul-oscuro); margin: 0;">IA en Biomédica</h3>
            </div>
            <p style="color: #666; margin: 0;">Diagnóstico y análisis de imágenes médicas con IA.</p>
        </div>

        <div class="card" style="display: flex; flex-direction: column; gap: 15px;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <div style="background: var(--azul-primario); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 1.5rem;">
                    <i class="fas fa-wifi"></i>
                </div>
                <h3 style="color: var(--azul-oscuro); margin: 0;">Sistemas Embebidos</h3>
            </div>
            <p style="color: #666; margin: 0;">Hardware, monitoreo de pacientes e IoT.</p>
        </div>
    </div>

    <div style="text-align: center; margin: 60px 0 40px;">
        <h2 style="color: var(--azul-oscuro); font-size: 2.2rem; margin-bottom: 5px;">Producción Reciente</h2>
        <div style="width: 60px; height: 4px; background: var(--azul-primario); margin: 0 auto 15px;"></div>
    </div>

    <div class="grid">
        {% for proyecto in site.data.proyectos limit:2 %}
        <div class="card">
            <span style="font-size: 0.7rem; color: var(--azul-primario); font-weight: bold; background: #e9ecef; padding: 3px 8px; border-radius: 10px;">
                {{ proyecto.anio }} | {{ proyecto.nivel }}
            </span>
            <h3 style="margin-top: 10px; color: var(--azul-oscuro);">{{ proyecto.titulo }}</h3>
            <p style="font-size: 0.9rem; color: #666;"><strong>Por:</strong> {{ proyecto.autor }}</p>
            <p style="color: #444;">{{ proyecto.resumen | truncate: 100 }}</p>
            <a href="{{ proyecto.link }}" style="color: var(--azul-primario); font-weight: bold; text-decoration: none;">Ver más →</a>
        </div>
        {% else %}
        <p style="text-align: center; color: #666; width: 100%;">No hay proyectos recientes.</p>
        {% endfor %}
    </div>

</div>
