---
layout: default
title: Nuestro Equipo
---

<div class="hero" style="padding: 50px 10%; text-align: center;">
    <h1 style="font-size: 2.2rem; margin: 0;">Nuestro Equipo</h1>
    <p style="font-size: 1rem; opacity: 0.9; margin-top: 10px;">Talento dedicado a la investigación y desarrollo.</p>
</div>

<div class="container">
    
    <div style="text-align: center; margin: 40px 0 50px;">
        <h2 style="color: var(--azul-oscuro); font-size: 1.8rem;">Investigadores Principales</h2>
        <div style="width: 40px; height: 3px; background: var(--azul-primario); margin: 10px auto;"></div>
    </div>

    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px 20px; margin-bottom: 60px;">
        {% for miembro in site.data.equipo.investigadores %}
        <div class="card" style="text-align: center; padding: 25px 20px 15px; position: relative; display: flex; flex-direction: column; align-items: center; min-height: 320px; border-top: 4px solid var(--azul-primario);">
            
            <div style="width: 100px; height: 100px; border-radius: 50%; overflow: hidden; border: 3px solid #eef4ff; position: absolute; top: -50px; background: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                <img src="{{ miembro.foto | relative_url }}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>

            <div style="margin-top: 50px; flex-grow: 1; width: 100%;">
                <h3 style="color: var(--azul-oscuro); margin-bottom: 5px; font-size: 1.2rem;">{{ miembro.nombre }}</h3>
                <p style="color: #0d6efd; font-weight: bold; margin-bottom: 5px; font-size: 0.85rem; text-transform: uppercase;">{{ miembro.rol }}</p>
                <p style="color: #555; font-size: 0.8rem; margin-bottom: 5px;">{{ miembro.especialidad }}</p>
                <p style="color: #777; font-size: 0.75rem; line-height: 1.3; margin: 0; white-space: normal;">{{ miembro.institucion }}</p>
            </div>

            <div style="margin-top: 20px; padding-top: 12px; border-top: 1px solid #eee; width: 100%; color: #888; font-size: 0.75rem; display: flex; justify-content: center; align-items: center; gap: 6px;">
                <i class="far fa-envelope"></i> <span>{{ miembro.email }}</span>
            </div>
        </div>
        {% endfor %}
    </div>

    <div style="text-align: center; margin: 60px 0 50px;">
        <h2 style="color: var(--azul-oscuro); font-size: 1.8rem;">Colaboradores y Estudiantes</h2>
        <div style="width: 40px; height: 3px; background: var(--azul-primario); margin: 10px auto;"></div>
    </div>

    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px 20px; margin-bottom: 50px;">
        {% for miembro in site.data.equipo.alumnos %}
        <div class="card" style="text-align: center; padding: 25px 20px 15px; position: relative; display: flex; flex-direction: column; align-items: center; min-height: 300px; border-top: 4px solid #0d6efd;">
            
            <div style="width: 100px; height: 100px; border-radius: 50%; overflow: hidden; border: 3px solid #eef4ff; position: absolute; top: -50px; background: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                <img src="{{ miembro.foto | relative_url }}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>

            <div style="margin-top: 50px; flex-grow: 1; width: 100%;">
                <h3 style="color: var(--azul-oscuro); margin-bottom: 5px; font-size: 1.2rem;">{{ miembro.nombre }}</h3>
                <p style="color: #0d6efd; font-weight: bold; margin-bottom: 10px; font-size: 0.85rem;">{{ miembro.rol }}</p>
                
                {% if miembro.especialidad %}
                <p style="font-size: 0.80rem; color: #d35400; background: #fdf2e9; padding: 4px 12px; border-radius: 12px; font-weight: bold; margin: 0 auto 10px; display: inline-block;">
                    {{ miembro.especialidad }}
                </p>
                {% endif %}
                <p style="color: #777; font-size: 0.75rem; line-height: 1.3; margin: 0; white-space: normal;">{{ miembro.institucion }}</p>
            </div>

            <div style="margin-top: 20px; padding-top: 12px; border-top: 1px solid #eee; width: 100%; color: #888; font-size: 0.75rem; display: flex; justify-content: center; align-items: center; gap: 6px;">
                <i class="far fa-envelope"></i> <span>{{ miembro.email }}</span>
            </div>
        </div>
        {% endfor %}
    </div>

</div>