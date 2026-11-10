---
layout: equipo
title: Nuestro Equipo
---

<header class="hero equipo-hero">
    <h1 class="hero-title">
        Nuestro Equipo
    </h1>

    <p class="hero-subtitle">
        Talento dedicado a la investigación y desarrollo de tecnologías biomédicas.
    </p>
</header>

<div class="container">

    <div class="equipo-section-header">
        <h2 class="equipo-section-title">
            Investigadores Principales
        </h2>
        <div class="equipo-divider"></div>
    </div>

    <div class="grid equipo-grid equipo-investigadores-grid">

        {% for miembro in site.data.equipo.investigadores %}

        <div class="card equipo-card">

            <div class="equipo-card-content">

                <div class="equipo-photo-container">
                    <img
                        src="{{ miembro.foto | relative_url }}"
                        alt="Foto de {{ miembro.nombre }}">
                </div>

                <div class="equipo-info">

                    <h3 class="equipo-name">
                        {{ miembro.nombre }}
                    </h3>

                    <p class="equipo-role">
                        {{ miembro.rol }}
                    </p>

                    <p class="equipo-specialty">
                        {{ miembro.especialidad }}
                    </p>

                    <p class="equipo-institution">
                        {{ miembro.institucion }}
                    </p>

                </div>

            </div>

            <div class="equipo-footer">

                <i class="far fa-envelope"></i>

                <a
                    href="mailto:{{ miembro.email }}"
                    class="equipo-email">

                    {{ miembro.email }}

                </a>

            </div>

        </div>

        {% endfor %}

    </div>

    <div class="equipo-section-header equipo-section-alumnos">

        <h2 class="equipo-section-title">
            Colaboradores y Estudiantes
        </h2>

        <div class="equipo-divider"></div>

        <p class="equipo-section-desc">
            Estudiantes de pregrado y posgrado en formación y desarrollo de proyectos de investigación.
        </p>

    </div>

    <div class="directorio-alumnos" id="directorioAlumnos">

        {% for miembro in site.data.equipo.alumnos %}

        <div class="directorio-item">

            <div class="directorio-left">

                <div class="directorio-avatar">
                    <img
                        src="{{ miembro.foto | relative_url }}"
                        alt="Foto de {{ miembro.nombre }}">
                </div>

                <div class="directorio-info">

                    <h3 class="directorio-nombre">
                        {{ miembro.nombre }}
                    </h3>

                    <div class="directorio-meta">
                        <span class="directorio-rol">{{ miembro.rol }}</span>
                        <span class="directorio-sep">&bull;</span>
                        <span class="directorio-inst">{{ miembro.institucion }}</span>
                    </div>

                </div>

            </div>

            <div class="directorio-badge-col">
                {% if miembro.especialidad %}
                <span class="directorio-badge">
                    <i class="fas fa-tag"></i>
                    {{ miembro.especialidad }}
                </span>
                {% endif %}
            </div>

            <div class="directorio-right">
                <a
                    href="mailto:{{ miembro.email }}"
                    class="directorio-email-btn"
                    title="Enviar correo a {{ miembro.nombre }}">
                    <i class="far fa-envelope"></i>
                    <span>{{ miembro.email }}</span>
                </a>
            </div>

        </div>

        {% endfor %}

    </div>

</div>
