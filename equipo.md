---
layout: equipo
title: Nuestro Equipo
---

<header class="hero equipo-hero">
    <h1 class="hero-title">
        Nuestro Equipo
    </h1>

    <p class="hero-subtitle">
        Talento dedicado a la investigación y desarrollo.
    </p>
</header>

<div class="container">

    <div class="equipo-section-header">
        <h2 class="equipo-section-title">
            Investigadores Principales
        </h2>
        <div class="equipo-divider"></div>
    </div>

    <div class="grid equipo-grid">

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

    <div class="equipo-section-header">

        <h2 class="equipo-section-title">
            Colaboradores y Estudiantes
        </h2>

        <div class="equipo-divider"></div>

    </div>

    <div class="grid equipo-grid" id="alumnosGrid">

        {% for miembro in site.data.equipo.alumnos %}

        <div class="card equipo-card alumno-item">

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

                    <p class="equipo-role-alt">
                        {{ miembro.rol }}
                    </p>

                    {% if miembro.especialidad %}
                    <div class="equipo-specialty-badge">
                        {{ miembro.especialidad }}
                    </div>
                    {% endif %}

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

    <div class="equipo-pagination">

        <button id="btnSiguientesAlumnos">

            Ver siguientes alumnos

            <i class="fas fa-arrow-right"></i>

        </button>

        <div id="paginacionTexto"></div>

    </div>

</div>

<script>
document.addEventListener("DOMContentLoaded", function () {

    const alumnosPorPagina = 6;
    const alumnos = Array.from(
        document.querySelectorAll("#alumnosGrid .alumno-item")
    );

    const boton = document.getElementById("btnSiguientesAlumnos");
    const textoPagina = document.getElementById("paginacionTexto");

    let indiceInicial = 0;

    function mostrarBloque() {

        alumnos.forEach((alumno, index) => {

            if (
                index >= indiceInicial &&
                index < indiceInicial + alumnosPorPagina
            ) {

                alumno.style.setProperty(
                    "display",
                    "flex",
                    "important"
                );

            } else {

                alumno.style.setProperty(
                    "display",
                    "none",
                    "important"
                );

            }

        });

        const totalPaginas =
            Math.ceil(alumnos.length / alumnosPorPagina);

        const paginaActual =
            Math.floor(indiceInicial / alumnosPorPagina) + 1;

        if (textoPagina && totalPaginas > 0) {

            textoPagina.textContent =
                `Mostrando grupo ${paginaActual} de ${totalPaginas}`;

        }

        if (indiceInicial + alumnosPorPagina >= alumnos.length) {

            boton.innerHTML =
                '<i class="fas fa-undo"></i> Volver al inicio';

        } else {

            boton.innerHTML =
                'Ver siguientes alumnos <i class="fas fa-arrow-right"></i>';

        }

    }

    if (alumnos.length > 0) {

        mostrarBloque();

        if (alumnos.length <= alumnosPorPagina) {

            boton.style.display = "none";

            if (textoPagina) {
                textoPagina.style.display = "none";
            }

        }

    } else {

        boton.style.display = "none";

    }

    boton.addEventListener("click", function () {

        indiceInicial += alumnosPorPagina;

        if (indiceInicial >= alumnos.length) {
            indiceInicial = 0;
        }

        mostrarBloque();

        document
            .querySelector(".equipo-section-header:last-of-type")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});
</script>