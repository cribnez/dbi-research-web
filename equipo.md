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
            Investigadores y Colaboradores
        </h2>
        <div class="equipo-divider"></div>
        <p class="equipo-section-desc">
            Cuerpo docente y especialistas multidisciplinarios encargados de dirigir, formular y asesorar las líneas de investigación, desarrollo tecnológico y proyectos de vinculación del grupo.
        </p>
    </div>

    <div class="equipo-investigadores-grid">

        {% for miembro in site.data.equipo.investigadores %}

        <div class="equipo-card-horizontal">

            <div class="equipo-card-side-photo">
                <div class="equipo-photo-circle">
                    <img
                        src="{{ miembro.foto | relative_url }}"
                        alt="Foto de {{ miembro.nombre }}">
                </div>
            </div>

            <div class="equipo-card-body">

                <div class="equipo-card-header">
                    <h3 class="equipo-name">
                        {{ miembro.nombre }}
                    </h3>

                    <div class="equipo-role">
                        {{ miembro.rol }}
                    </div>

                    <div class="equipo-institution">
                        <i class="fas fa-university"></i>
                        <span>{{ miembro.institucion }}</span>
                    </div>
                </div>

                {% if miembro.descripcion %}
                <p class="equipo-bio">
                    {{ miembro.descripcion }}
                </p>
                {% elsif miembro.especialidad %}
                <p class="equipo-specialty">
                    {{ miembro.especialidad }}
                </p>
                {% endif %}

                {% if miembro.email and miembro.email != "" %}
                <div class="equipo-card-contact">
                    <a
                        href="mailto:{{ miembro.email }}"
                        class="equipo-email-link"
                        title="Contactar a {{ miembro.nombre }}">
                        <i class="far fa-envelope"></i>
                        <span>{{ miembro.email }}</span>
                    </a>
                </div>
                {% endif %}

            </div>

        </div>

        {% endfor %}

    </div>

    <div class="equipo-section-header equipo-section-alumnos">

        <h2 class="equipo-section-title">
            Formación de Capital Humano
        </h2>

        <div class="equipo-divider"></div>

        <p class="equipo-section-desc">
            Estudiantes en formación profesional incorporados al desarrollo de proyectos de investigación científica y tecnológica.
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
