---
layout: default
title: Equipo
---
<div class="container" style="margin-top: 80px;">
    <h1 style="text-align: center;">Nuestro Equipo</h1>
    <div class="grid">
        {% for miembro in site.data.equipo %}
        <div class="card" style="text-align: center; margin-top: 50px;">
            <div class="photo-circle">
                <img src="/assets/img/{{ usuario.png }}" alt="{{ miembro.nombre }}">
            </div>
            <h3>{{ miembro.nombre }}</h3>
            <p style="color: var(--azul-primario); font-weight: bold;">{{ miembro.rol }}</p>
            <p>{{ miembro.bio }}</p>
        </div>
        {% endfor %}
    </div>
</div>
