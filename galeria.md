---
layout: default
title: Galería
---

<div class="hero" style="padding: 60px 10%; text-align: center;">
    <h1 style="font-size: 2.5rem; margin: 0;">Galería de Actividades</h1>
    <p style="font-size: 1.1rem; opacity: 0.9; margin-top: 10px;">Momentos clave de nuestra labor investigativa.</p>
</div>

<div class="container">
    <div class="grid">
        {% for item in site.data.galeria %}
        <div class="card" style="padding: 10px; overflow: hidden;">
            <div style="width: 100%; height: 200px; overflow: hidden; border-radius: 8px;">
                <img src="{{ '/assets/img/' | append: item.imagen | relative_url }}" class="img-fluid" alt="{{ item.titulo }}">
                     style="width: 100%; height: 100%; object-fit: cover;" 
                     alt="{{ item.titulo }}">
            </div>
            <div style="padding: 15px 5px 5px;">
                <h4 style="color: var(--azul-oscuro); margin: 0; font-size: 1rem;">{{ item.titulo }}</h4>
                <p style="color: #888; font-size: 0.8rem; margin-top: 5px;">{{ item.fecha }}</p>
            </div>
        </div>
        {% endfor %}
    </div>
</div>
