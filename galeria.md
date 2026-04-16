---
layout: default
title: Galería
---
<div class="container">
    <h1 style="text-align: center;">Galería del Grupo</h1>
    <div class="grid">
        {% for item in site.data.galeria %}
        <div class="card">
            <img src="/assets/img/{{ item.imagen }}" class="img-fluid">
            <h3>{{ item.titulo }}</h3>
            <p>{{ item.descripcion }}</p>
        </div>
        {% endfor %}
    </div>
</div>
