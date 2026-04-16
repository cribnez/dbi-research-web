---
layout: default
title: Inicio
---

<div class="hero">
    <h1>DBI Research Group</h1>
    <p>Desarrollo de Dispositivos Biomédicos e Inteligencia Artificial aplicada a la salud.</p>
    
    <div style="margin-top: 30px; max-width: 600px; margin-left: auto; margin-right: auto; position: relative;">
        <input type="text" placeholder="Buscar proyectos, tesis o autores..." 
               style="width: 100%; padding: 15px 25px; border-radius: 30px; border: none; font-size: 1.1rem; box-shadow: 0 4px 15px rgba(0,0,0,0.2); outline: none;">
        <button style="position: absolute; right: 10px; top: 7px; background: var(--azul-primario); color: white; border: none; padding: 8px 20px; border-radius: 20px; cursor: pointer; font-weight: bold;">
            Buscar
        </button>
    </div>
</div>

<div class="container">

    <div style="margin-top: 80px; margin-bottom: 80px;">
        <div style="text-align: center; margin-bottom: 70px;">
            <h2 style="color: var(--azul-oscuro); font-size: 2.2rem; margin-bottom: 10px;">Investigadores Principales</h2>
            <div style="width: 60px; height: 4px; background: var(--azul-primario); margin: 0 auto;"></div>
            <p style="color: #666; margin-top: 15px;">Líderes académicos del grupo de investigación.</p>
        </div>

        <div class="grid" style="gap: 50px 30px;">
            {% for miembro in site.data.equipo.investigadores limit:3 %}
            <div class="card" style="text-align: center; padding: 35px 20px 20px; position: relative; display: flex; flex-direction: column; align-items: center; min-height: 340px; border-top: 5px solid var(--azul-primario);">
                
                <div style="width: 115px; height: 115px; border-radius: 50%; overflow: hidden; border: 4px solid #eef4ff; position: absolute; top: -58px; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.12);">
                    <img src="{{ miembro.foto | relative_url }}" style="width: 100%; height: 100%; object-fit: cover;" alt="{{ miembro.nombre }}">
                </div>

                <div style="margin-top: 60px; flex-grow: 1;">
                    <h3 style="color: var(--azul-oscuro); margin-bottom: 8px; font-size: 1.35rem;">{{ miembro.nombre }}</h3>
                    <p style="color: #0d6efd; font-weight: bold; margin-bottom: 8px; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.5px;">{{ miembro.rol }}</p>
                    <p style="color: #666; font-size: 0.85rem; line-height: 1.5; padding: 0 10px;">{{ miembro.institucion }}</p>
                </div>

                <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #f0f0f0; width: 100%; color: #888; font-size: 0.85rem; display: flex; justify-content: center; align-items: center; gap: 8px;">
                    <i class="far fa-envelope"></i>
                    <span>{{ miembro.email }}</span>
                </div>
            </div>
            {% endfor %}
        </div>
        
        <div style="text-align: center; margin-top: 40px;">
            <a href="{{ '/equipo.html' | relative_url }}" style="color: var(--azul-primario); font-weight: bold; text-decoration: none;">Ver todo el equipo →</a>
        </div>
    </div>

    <hr style="border: 0; height: 1px; background: #eee; margin: 60px 0;">

    <div style="margin-bottom: 40px;">
        <h2 style="color: var(--azul-oscuro); font-size: 2rem;">Producción Reciente</h2>
        <p style="color: #666;">Últimos proyectos y tesis desarrolladas.</p>
    </div>

    <div class="grid">
        {% for proyecto in site.data.proyectos limit:2 %}
        <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
                <span style="font-size: 0.75rem; color: var(--azul-primario); font-weight: bold; background: #eef4ff; padding: 4px 10px; border-radius: 10px;">
                    {{ proyecto.anio }} | {{ proyecto.nivel }}
                </span>
                <h3 style="margin-top: 15px; color: var(--azul-oscuro);">{{ proyecto.titulo }}</h3>
                <p style="font-size: 0.9rem; color: #666;"><strong>Por:</strong> {{ proyecto.autor }}</p>
                <p style="color: #444; line-height: 1.6;">{{ proyecto.resumen | truncate: 150 }}</p>
            </div>
            <div style="margin-top: 20px;">
                <a href="{{ proyecto.link | relative_url }}" style="color: var(--azul-primario); font-weight: bold; text-decoration: none;">Ver detalles →</a>
            </div>
        </div>
        {% endfor %}
    </div>

    <div style="text-align: center; margin-top: 40px;">
            <a href="{{ '/catalogo.html' | relative_url }}" style="color: var(--azul-primario); font-weight: bold; text-decoration: none;">Ver todo el equipo →</a>
        </div>

</div>
