---
layout: default
title: Nuestro Equipo
---

<link rel="stylesheet" href="{{ '/assets/css/equipo.css' | relative_url }}">

<div class="hero equipo-hero">
    <h1>Nuestro Equipo</h1>
    <p>Talento dedicado a la investigación y desarrollo.</p>
</div>

<div class="container">
    
    <div class="equipo-section-header">
        <h2 class="equipo-section-title">Investigadores Principales</h2>
        <div class="equipo-divider"></div>
    </div>

    <div class="grid equipo-grid">
        {% for miembro in site.data.equipo.investigadores %}
        <div class="card equipo-card">
            
            <div class="equipo-photo-container">
                <img src="{{ miembro.foto | relative_url }}" alt="Foto de {{ miembro.nombre }}">
            </div>

            <div class="equipo-info">
                <h3 class="equipo-name">{{ miembro.nombre }}</h3>
                <p class="equipo-role">{{ miembro.rol }}</p>
                <p class="equipo-specialty">{{ miembro.especialidad }}</p>
                <p class="equipo-institution">{{ miembro.institucion }}</p>
            </div>

            <div class="equipo-footer">
                <i class="far fa-envelope"></i> <span>{{ miembro.email }}</span>
            </div>
        </div>
        {% endfor %}
    </div>

    <div class="equipo-section-header">
        <h2 class="equipo-section-title">Colaboradores y Estudiantes</h2>
        <div class="equipo-divider"></div>
    </div>

    <div class="grid equipo-grid">
        {% for miembro in site.data.equipo.alumnos %}
        <div class="card equipo-card">
            
            <div class="equipo-photo-container">
                <img src="{{ miembro.foto | relative_url }}" alt="Foto de {{ miembro.nombre }}">
            </div>

            <div class="equipo-info">
                <h3 class="equipo-name">{{ miembro.nombre }}</h3>
                <p class="equipo-role-alt">{{ miembro.rol }}</p>
                
                {% if miembro.especialidad %}
                <div class="equipo-specialty-badge">
                    {{ miembro.especialidad }}
                </div>
                {% endif %}
                <p class="equipo-institution">{{ miembro.institucion }}</p>
            </div>

            <div class="equipo-footer">
                <i class="far fa-envelope"></i> <span>{{ miembro.email }}</span>
            </div>
        </div>
        {% endfor %}
    </div>

</div>