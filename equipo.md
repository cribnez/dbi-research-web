---
layout: default
title: Nuestro Equipo
---

<div class="hero" style="padding: 60px 10%; text-align: center;">
    <h1 style="font-size: 2.5rem; margin: 0;">Nuestro Equipo</h1>
</div>

<div class="container">
    
    <div style="text-align: center; margin: 40px 0;">
        <h2 style="color: var(--azul-oscuro); font-size: 2.2rem;">Colaboradores y Estudiantes</h2>
    </div>

    <div class="grid">
        {% for miembro in site.data.equipo.alumnos %}
        <div class="card" style="text-align: center; padding: 30px 20px 15px; margin-top: 50px; position: relative; display: flex; flex-direction: column; align-items: center;">
            
            <div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden; border: 4px solid #eef4ff; position: absolute; top: -60px; background: white; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                <img src="{{ miembro.foto | relative_url }}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>

            <div style="margin-top: 60px; flex-grow: 1;">
                <h3 style="color: var(--azul-oscuro); margin-bottom: 8px; font-size: 1.4rem;">{{ miembro.nombre }}</h3>
                <p style="color: #0d6efd; font-weight: bold; margin-bottom: 5px; font-size: 1rem;">{{ miembro.rol }}</p>
                <p style="color: #666; font-size: 0.9rem; margin-bottom: 0;">{{ miembro.institucion }}</p>
            </div>

            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; width: 100%; display: flex; justify-content: center; align-items: center; gap: 8px; color: #666; font-size: 0.85rem;">
                <i class="far fa-envelope"></i> 
                <span>{{ miembro.email }}</span>
            </div>
        </div>
        {% endfor %}
    </div>

</div>
