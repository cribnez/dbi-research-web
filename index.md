---
layout: default
title: Inicio
---

<section class="hero">
    <div class="hero-container">
        <span class="badge">INGENIERÍA Y TECNOLOGÍA</span>
        <h1>Dispositivos Biomédicos Inteligentes</h1>
        <p>Innovación en algoritmos de IA y sistemas embebidos aplicados a la salud humana y veterinaria.</p>
        
        <div class="search-box">
            <input type="text" placeholder="Buscar tesis, artículos, proyectos...">
            <button>Buscar</button>
        </div>
    </div>
</section>

<section class="content-section">
    <h2 class="section-title">Investigadores Principales</h2>
    <div class="blue-divider"></div>
    <p class="subtitle">Líderes académicos del grupo de investigación.</p>

    <div class="investigator-grid">
        {% for miembro in site.data.equipo %}
        {% if miembro.rol == "INVESTIGADOR" %}
        <div class="card-investigador">
            <div class="profile-photo">
                <img src="assets/img/{{ miembro.foto }}" alt="{{ miembro.nombre }}">
            </div>
            <h3>{{ miembro.nombre }}</h3>
            <p class="tag-rol">{{ miembro.rol }}</p>
        </div>
        {% endif %}
        {% endfor %}
    </div>
</section>

<section class="content-section grey-bg">
    <h2 class="section-title">Líneas de Investigación</h2>
    <div class="blue-divider"></div>

    <div class="lines-grid">
        <div class="line-card">
            <div class="icon-circle"><i class="fas fa-microchip"></i></div>
            <div class="line-text">
                <h3>IA en Biomédica</h3>
                <p>Diagnóstico y análisis de imágenes médicas con IA.</p>
            </div>
        </div>
        <div class="line-card">
            <div class="icon-circle"><i class="fas fa-wifi"></i></div>
            <div class="line-text">
                <h3>Sistemas Embebidos</h3>
                <p>Hardware, monitoreo de pacientes e IoT.</p>
            </div>
        </div>
    </div>
</section>
