---
layout: default
title: Inicio
---

<header class="hero hero-tech">
    <div class="hero-badges">
        <span class="badge-tech">Ingeniería y Tecnología</span>
        <span class="badge-inst"><i class="fas fa-university"></i> Universidad Politécnica de Chiapas</span>
    </div>

    <h1 class="hero-title">
        Dispositivos Biomédicos Inteligentes
    </h1>

    <p class="hero-subtitle">
        Innovación en algoritmos de IA y sistemas embebidos aplicados a la salud humana y veterinaria.
    </p>
</header>

<div class="container">

    <div class="search-wrapper">
        <div class="search-container">
            <input
                type="text"
                id="inputBusquedaHero"
                placeholder="Buscar tesis, artículos, autores..."
                class="search-input">

            <button onclick="ejecutarBusqueda()" class="btn-search">
                <i class="fas fa-search"></i> Buscar
            </button>
        </div>

        <div class="quick-tags">
            <span class="quick-tags-label">Explorar:</span>
            <a href="{{ '/catalogo' | relative_url }}?search=IA" class="quick-tag">Inteligencia Artificial</a>
            <a href="{{ '/catalogo' | relative_url }}?search=IoT" class="quick-tag">Monitoreo IoT</a>
            <a href="{{ '/catalogo' | relative_url }}?search=Rehabilitacion" class="quick-tag">Rehabilitación</a>
            <a href="{{ '/catalogo' | relative_url }}?search=ECG" class="quick-tag">Señales ECG</a>
        </div>
    </div>

    {% comment %}
    <!-- Cintillo de Impacto y Métricas (oculto temporalmente) -->
    {% assign total_proyectos = site.proyectos | size %}
    {% assign total_equipo = site.data.equipo.investigadores.size | plus: site.data.equipo.alumnos.size %}
    <div class="impact-strip">
        <div class="impact-item">
            <div class="impact-number">{{ total_proyectos }}+</div>
            <div class="impact-label">Desarrollos y Prototipos</div>
        </div>
        <div class="impact-item">
            <div class="impact-number">{{ total_equipo }}</div>
            <div class="impact-label">Investigadores y Estudiantes</div>
        </div>
        <div class="impact-item">
            <div class="impact-number">2</div>
            <div class="impact-label">Miembros SNII (Secihti) y SEI</div>
        </div>
        <div class="impact-item">
            <div class="impact-number">TRL 7–9</div>
            <div class="impact-label">Validación en Entornos Clínicos</div>
        </div>
    </div>
    {% endcomment %}

    <div class="section-header">

        <h2 class="section-title">Líneas de Investigación</h2>

        <div class="divider"></div>

        <div class="grid">

            <div class="card line-embebidos">
                <i class="fas fa-microchip icon-line"></i>
                <h3>Sistemas Embebidos</h3>
                <p class="card-text">
                    Hardware médico de bajo consumo y alta precisión para entornos clínicos.
                </p>
            </div>

            <div class="card line-ia">
                <i class="fas fa-brain icon-line"></i>
                <h3>Inteligencia Artificial</h3>
                <p class="card-text">
                    Modelos de visión artificial y Deep Learning para diagnóstico médico.
                </p>
            </div>

            <div class="card line-iot">
                <i class="fas fa-heartbeat icon-line"></i>
                <h3>Monitoreo IoT</h3>
                <p class="card-text">
                    Telemetría y redes de sensores inalámbricos para salud remota.
                </p>
            </div>

        </div>

    </div>

    <div class="section-header investigadores-section">

        <h2 class="section-title">Investigadores Principales</h2>

        <div class="divider"></div>

        <div class="grid grid-investigadores">

            {% for miembro in site.data.equipo.investigadores limit:2 %}

            <div class="card card-member">

                <div class="photo-circle">
                    <img src="{{ miembro.foto | relative_url }}" alt="{{ miembro.nombre }}">
                </div>

                <h3 class="member-name">
                    {{ miembro.nombre }}
                </h3>

                <p class="member-role">
                    {{ miembro.rol }}
                </p>

                <p class="member-inst">
                    {{ miembro.institucion }}
                </p>

            </div>

            {% endfor %}

        </div>

    </div>

    <div class="noticias-seccion">

        <div class="flex-header">

            <h2 class="section-title">
                Última Noticia
            </h2>

            <a href="{{ '/noticias' | relative_url }}" class="project-link">
                Ver todas las noticias &rarr;
            </a>

        </div>

        {% assign noticias_ordenadas = site.noticias | sort: "date" | reverse %}

        {% for noticia in noticias_ordenadas limit:1 %}

        <div class="card-noticia">

            {% if noticia.imagen_noticia and noticia.imagen_noticia != "" %}

            <div
                class="noticia-imagen"
                style="background-image: url('{{ noticia.imagen_noticia }}');">
            </div>

            {% endif %}

            <div class="noticia-contenido">

                <div class="noticia-meta">

                    <span class="noticia-categoria">
                        {{ noticia.categoria_tag }}
                    </span>

                    <i class="far fa-calendar-alt"></i>
                    {{ noticia.fecha_texto }}

                </div>

                <h3 class="noticia-titulo">
                    {{ noticia.title }}
                </h3>

                <div class="noticia-texto">
                    {{ noticia.content | markdownify }}
                </div>

            </div>

        </div>

        {% else %}

        <p class="sin-noticias">
            No hay noticias publicadas por el momento.
        </p>

        {% endfor %}

    </div>

    <div class="recent-production">

        <div class="flex-header">

            <h2 class="section-title">
                Producción Reciente
            </h2>

            <a href="{{ '/catalogo' | relative_url }}" class="project-link">
                Ver Catálogo &rarr;
            </a>

        </div>

        <div class="grid grid-production">

            {% assign proyectos_ordenados = site.proyectos | sort: 'anio' | reverse %}

            {% for proyecto in proyectos_ordenados limit:3 %}

            <div class="card card-project">

                <div>

                    <span class="project-tag">
                        {{ proyecto.anio }} | {{ proyecto.nivel }}
                    </span>

                    <h3 class="project-title">

                        {% if proyecto.titulo_proyecto %}
                            {{ proyecto.titulo_proyecto }}
                        {% elsif proyecto.titulo %}
                            {{ proyecto.titulo }}
                        {% else %}
                            {{ proyecto.title }}
                        {% endif %}

                    </h3>

                    {% if proyecto.resumen and proyecto.resumen != "" %}
                    <p class="project-excerpt">
                        {{ proyecto.resumen | strip_html | truncate: 115 }}
                    </p>
                    {% endif %}

                    <p class="project-author">

                        <strong>Por:</strong>

                        {% if proyecto.autor %}
                            {{ proyecto.autor }}
                        {% elsif proyecto.autores_lista %}
                            {{ proyecto.autores_lista | first }}
                        {% endif %}

                    </p>

                </div>

                <a href="{{ proyecto.url | relative_url }}" class="project-link project-link-bottom">
                    Leer más &rarr;
                </a>

            </div>

            {% endfor %}

        </div>

    </div>

</div>

<script>
    const URL_CATALOGO = "{{ '/catalogo' | relative_url }}";
</script>

<script src="{{ '/assets/js/inicio.js' | relative_url }}"></script>
