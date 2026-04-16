---
layout: default
title: Nuestro Equipo
---

<div class="hero" style="padding: 60px 10%; text-align: center;">
    <h1 style="font-size: 2.5rem; margin: 0;">Nuestro Equipo</h1>
    <p style="font-size: 1.1rem; opacity: 0.9; margin-top: 10px;">
        Talento dedicado a la innovación en ingeniería y salud.
    </p>
</div>

<div class="container">
    
    <div style="text-align: center; margin: 40px 0 60px;">
        <h2 style="color: var(--azul-oscuro); font-size: 2.2rem;">Investigadores Principales</h2>
        <div style="width: 60px; height: 4px; background: var(--azul-primario); margin: 10px auto;"></div>
        <p style="color: #666;">Líderes académicos del grupo de investigación.</p>
    </div>

    <div class="grid" style="margin-bottom: 80px; gap: 40px 25px;">
        {% for miembro in site.data.equipo.investigadores %}
        <div class="card" style="text-align: center; padding: 30px 20px 15px; position: relative; display: flex; flex-direction: column; align-items: center; min-height: 350px;">
            
            <div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden; border: 4px solid #eef4ff; position: absolute; top: -60px; background: white; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                <img src="{{ miembro.foto | relative_url }}" style="width: 100%; height: 100%; object-fit: cover;" alt="{{ miembro.nombre }}">
            </div>

            <div style="margin-top: 60px; flex-grow: 1;">
                <h3 style="color: var(--azul-oscuro); margin-bottom: 8px; font-size: 1.4rem;">{{ miembro.nombre }}</h3>
                <p style="color: #0d6efd; font-weight: bold; margin-bottom: 5px; font-size: 1rem; text-transform: uppercase;">{{ miembro.rol }}</p>
                <p style="color: #555; font-size: 0.9rem; font-weight: 500; margin-bottom: 5px;">{{ miembro.especialidad }}</p>
                <p style="color: #777; font-size: 0.85rem; line-height: 1.4;">{{ miembro.institucion }}</p>
            </div>

            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; width: 100%; display: flex; justify-content: center; align-items: center; gap: 8px; color: #666; font-size: 0.85rem;">
                <i class="far fa-envelope"></i> 
                <span>{{ miembro.email }}</span>
            </div>
        </div>
        {% endfor %}
    </div>

    <div style="text-align: center; margin: 80px 0 60px;">
        <h2 style="color: var(--azul-oscuro); font-size: 2.2rem;">Colaboradores y Estudiantes</h2>
        <div style="width: 60px; height: 4px; background: var(--azul-primario); margin: 10px auto;"></div>
    </div>

    <div class="grid" style="gap: 40px 25px;">
        {% for miembro in site.data.equipo.alumnos %}
        <div class="card" style="text-align: center; padding: 30px 20px 15px; position: relative; display: flex; flex-direction: column; align-items: center; min-height: 350px;">
            
            <div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden; border: 4px solid #eef4ff; position: absolute; top: -60px; background: white; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                <img src="{{ miembro.foto | relative_url }}" style="width: 100%; height: 100%; object-fit: cover;" alt="{{ miembro.nombre }}">
            </div>

            <div style="margin-top: 60px; flex-grow: 1;">
                <h3 style="color: var(--azul-oscuro); margin-bottom: 8px; font-size: 1.4rem;">{{ miembro.nombre }}</h3>
                <p style="color: #0d6efd; font-weight: bold; margin-bottom: 5px; font-size: 1rem;">{{ miembro.rol }}</p>
                <p style="color: #777; font-size: 0.85rem; line-height: 1.4;">{{ miembro.institucion }}</p>
            </div>

            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; width: 100%; display: flex; justify-content: center; align-items: center; gap: 8px; color: #666; font-size: 0.85rem;">
                <i class="far fa-envelope"></i> 
                <span>{{ miembro.email }}</span>
            </div>
        </div>
        {% endfor %}
    </div>

</div>
