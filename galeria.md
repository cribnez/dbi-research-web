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
        <div class="card" style="padding: 15px; text-align: center;">
            <div style="width: 100%; height: 200px; overflow: hidden; border-radius: 8px; margin-bottom: 15px; background: #f8f9fa;">
                <img src="{{ '/assets/img/' | append: item.imagen | relative_url }}" 
                     style="width: 100%; height: 100%; object-fit: cover;" 
                     alt="{{ item.titulo }}">
            </div>
            <h3 style="color: var(--azul-oscuro); margin-bottom: 5px;">{{ item.titulo }}</h3>
            <p style="color: #666; font-size: 0.9rem;">{{ item.descripcion }}</p>
        </div>
        {% endfor %}
    </div>
</div>
