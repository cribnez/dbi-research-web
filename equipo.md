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
        <div class="card equipo-card" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
            <div style="width: 100%; display: flex; flex-direction: column; align-items: center; text-align: center;">
                <div class="equipo-photo-container">
                    <img src="{{ miembro.foto | relative_url }}" alt="Foto de {{ miembro.nombre }}">
                </div>

                <div class="equipo-info" style="width: 100%;">
                    <h3 class="equipo-name">{{ miembro.nombre }}</h3>
                    <p class="equipo-role">{{ miembro.rol }}</p>
                    <p class="equipo-specialty">{{ miembro.especialidad }}</p>
                    <p class="equipo-institution">{{ miembro.institucion }}</p>
                </div>
            </div>

            <div class="equipo-footer" style="margin-top: auto; padding-top: 15px; width: 100%; text-align: center;">
                <i class="far fa-envelope" style="margin-right: 5px;"></i> 
                <a href="mailto:{{ miembro.email }}" style="color: inherit; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#003366'" onmouseout="this.style.color='inherit'">
                    {{ miembro.email }}
                </a>
            </div>
        </div>
        {% endfor %}
    </div>

    <div class="equipo-section-header">
        <h2 class="equipo-section-title">Colaboradores y Estudiantes</h2>
        <div class="equipo-divider"></div>
    </div>

    <div class="grid equipo-grid" id="alumnosGrid">
        {% for miembro in site.data.equipo.alumnos %}
        <div class="card equipo-card alumno-item" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
            <div style="width: 100%; display: flex; flex-direction: column; align-items: center; text-align: center;">
                <div class="equipo-photo-container">
                    <img src="{{ miembro.foto | relative_url }}" alt="Foto de {{ miembro.nombre }}">
                </div>

                <div class="equipo-info" style="width: 100%;">
                    <h3 class="equipo-name">{{ miembro.nombre }}</h3>
                    <p class="equipo-role-alt">{{ miembro.rol }}</p>
                    
                    {% if miembro.especialidad %}
                    <div class="equipo-specialty-badge" style="text-align: left;">
                        {{ miembro.especialidad }}
                    </div>
                    {% endif %}
                    <p class="equipo-institution">{{ miembro.institucion }}</p>
                </div>
            </div>

            <div class="equipo-footer" style="margin-top: auto; padding-top: 15px; width: 100%; text-align: center;">
                <i class="far fa-envelope" style="margin-right: 5px;"></i> 
                <a href="mailto:{{ miembro.email }}" style="color: inherit; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#003366'" onmouseout="this.style.color='inherit'">
                    {{ miembro.email }}
                </a>
            </div>
        </div>
        {% endfor %}
    </div>

    <div style="text-align: center; margin-top: 30px; margin-bottom: 40px;">
        <button id="btnSiguientesAlumnos" style="background-color: #003366; color: white; padding: 11px 26px; border: none; border-radius: 5px; font-size: 0.95rem; cursor: pointer; font-weight: bold; transition: background 0.3s; display: inline-flex; align-items: center; gap: 8px;">
            Ver siguientes alumnos <i class="fas fa-arrow-right" style="font-size: 0.85rem;"></i>
        </button>
        <div id="paginacionTexto" style="margin-top: 10px; font-size: 0.85rem; color: #777; font-style: italic;"></div>
    </div>

</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const alumnosPorPagina = 6; 
        const alumnos = Array.from(document.querySelectorAll('#alumnosGrid .alumno-item'));
        const boton = document.getElementById('btnSiguientesAlumnos');
        const textoPagina = document.getElementById('paginacionTexto');
        
        let indiceInicial = 0;

        function mostrarBloque() {
            alumnos.forEach((alumno, index) => {
                if (index >= indiceInicial && index < (indiceInicial + alumnosPorPagina)) {
                    alumno.style.setProperty('display', 'flex', 'important'); 
                } else {
                    alumno.style.setProperty('display', 'none', 'important'); 
                }
            });

            const totalPaginas = Math.ceil(alumnos.length / alumnosPorPagina);
            const paginaActual = Math.floor(indiceInicial / alumnosPorPagina) + 1;
            
            if (textoPagina && totalPaginas > 0) {
                textoPagina.textContent = `Mostrando grupo ${paginaActual} de ${totalPaginas}`;
            }

            if (indiceInicial + alumnosPorPagina >= alumnos.length) {
                boton.innerHTML = '<i class="fas fa-undo" style="font-size: 0.85rem;"></i> Volver al inicio';
            } else {
                boton.innerHTML = 'Ver siguientes alumnos <i class="fas fa-arrow-right" style="font-size: 0.85rem;"></i>';
            }
        }

        if (alumnos.length > 0) {
            mostrarBloque();
            if (alumnos.length <= alumnosPorPagina) {
                boton.style.display = 'none';
                if (textoPagina) textoPagina.style.display = 'none';
            }
        } else {
            boton.style.display = 'none';
        }

        boton.addEventListener('click', function() {
            indiceInicial += alumnosPorPagina;

            if (indiceInicial >= alumnos.length) {
                indiceInicial = 0;
            }
            
            mostrarBloque();
            document.querySelector('.equipo-section-header:last-of-type').scrollIntoView({ behavior: 'smooth' });
        });
    });
</script>