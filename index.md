---
layout: default
title: Inicio
---

<header class="hero">
    <div class="badge-tech">Ingeniería y Tecnología</div>
    <h1 class="hero-title">
        Dispositivos Biomédicos Inteligentes
    </h1>
    <p class="hero-subtitle">
        Innovación en algoritmos de IA y sistemas embebidos aplicados a la salud humana y veterinaria.
    </p>
</header>

<div class="container">
    
    <div class="search-container">
        <input type="text" id="inputBusquedaHero" placeholder="Buscar tesis, artículos, autores..." class="search-input">
        <button onclick="ejecutarBusqueda()" class="btn-search">
            Buscar
        </button>
    </div>

    <div class="section-header">
        <h2 class="section-title">Líneas de Investigación</h2>
        <div class="divider"></div>
        
        <div class="grid">
            <div class="card line-embebidos">
                <i class="fas fa-microchip icon-line"></i>
                <h3>Sistemas Embebidos</h3>
                <p class="card-text">Hardware médico de bajo consumo y alta precisión para entornos clínicos.</p>
            </div>
            <div class="card line-ia">
                <i class="fas fa-brain icon-line"></i>
                <h3>Inteligencia Artificial</h3>
                <p class="card-text">Modelos de visión artificial y Deep Learning para diagnóstico médico.</p>
            </div>
            <div class="card line-iot">
                <i class="fas fa-heartbeat icon-line"></i>
                <h3>Monitoreo IoT</h3>
                <p class="card-text">Telemetría y redes de sensores inalámbricos para salud remota.</p>
            </div>
        </div>
    </div>

    <div class="section-header" style="margin-top: 100px;">
        <h2 class="section-title">Investigadores Principales</h2>
        <div class="divider"></div>
        
        <div class="grid">
            {% for miembro in site.data.equipo.investigadores limit:3 %}
            <div class="card card-member">
                <div class="photo-circle">
                    <img src="{{ miembro.foto | relative_url }}" alt="{{ miembro.nombre }}">
                </div>
                <h3 class="member-name">{{ miembro.nombre }}</h3>
                <p class="member-role">{{ miembro.rol }}</p>
                <p class="member-inst">{{ miembro.institucion }}</p>
            </div>
            {% endfor %}
        </div>
    </div>

    <div class="noticias-seccion" style="margin-top: 80px; margin-bottom: 40px;">
        <div class="flex-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #003366; padding-bottom: 10px; margin-bottom: 25px;">
            <h2 class="section-title" style="margin: 0; border: none; padding: 0;">
                <i class="fas fa-newspaper" style="margin-right: 10px;"></i> Últimas Noticias
            </h2>
        </div>

        {% assign noticias_ordenadas = site.noticias | reverse %}
        {% for noticia in noticias_ordenadas limit:3 %}
        <div class="card-noticia" style="display: flex; flex-wrap: wrap; background: #fff; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.06); overflow: hidden; border-left: 5px solid #003366; margin-bottom: 20px; max-width: 850px; margin-left: auto; margin-right: auto;">
            
            {% if noticia.imagen_noticia %}
            <div class="noticia-imagen" style="flex: 0 0 280px; min-height: 220px; background-image: url('{{ noticia.imagen_noticia }}'); background-size: cover; background-position: center;">
            </div>
            {% endif %}
            
            <div class="noticia-contenido" style="flex: 1; min-width: 300px; padding: 20px; display: flex; flex-direction: column; justify-content: center;">
                <div class="noticia-meta" style="font-size: 0.8rem; color: #888; margin-bottom: 8px;">
                    <span style="background: #e6f0fa; color: #003366; padding: 3px 6px; border-radius: 4px; font-weight: bold; margin-right: 8px;">
                        {{ noticia.categoria_tag }}
                    </span>
                    <i class="far fa-calendar-alt"></i> {{ noticia.fecha_texto }}
                </div>
                
                <h3 style="margin: 0 0 10px 0; color: #333; font-size: 1.25rem; font-weight: bold;">
                    {{ noticia.title }}
                </h3>
                
                <div style="color: #555; line-height: 1.5; margin: 0; font-size: 0.85rem; text-align: justify;">
                    {{ noticia.content | markdownify }}
                </div>
            </div>
        </div>
        {% else %}
        <p style="font-style: italic; color: #777;">No hay noticias publicadas por el momento.</p>
        {% endfor %}
    </div>

    <div class="recent-production" style="margin-top: 80px;">
        <div class="flex-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #003366; padding-bottom: 10px; margin-bottom: 30px;">
            <h2 class="section-title" style="margin: 0; border: none; padding: 0;">Producción Reciente</h2>
            <a href="{{ '/catalogo' | relative_url }}" class="project-link">Ver Catálogo →</a>
        </div>

        <div class="grid">
            {% assign proyectos_ordenados = site.proyectos | sort: 'anio' | reverse %}
            {% for proyecto in proyectos_ordenados limit:2 %}
            <div class="card card-project" style="display: flex; flex-direction: column; justify-content: space-between; min-height: 220px;">
                <div>
                    <span class="project-tag">
                        {{ proyecto.anio }} | {{ proyecto.nivel }}
                    </span>
                    
                    <h3 class="project-title" style="margin-top: 12px; margin-bottom: 8px; font-size: 1.2rem; color: #003366; font-weight: bold; line-height: 1.4; display: block !important; visibility: visible !important;">
                        {% if proyecto.titulo_proyecto %}
                            {{ proyecto.titulo_proyecto }}
                        {% elsif proyecto.titulo %}
                            {{ proyecto.titulo }}
                        {% else %}
                            {{ proyecto.title }}
                        {% endif %}
                    </h3>
                    
                    <p class="project-author" style="margin-top: 5px; font-size: 0.9rem; color: #555;">
                        <strong>Por:</strong> 
                        {% if proyecto.autor %}
                            {{ proyecto.autor }}
                        {% elsif proyecto.autores_lista %}
                            {{ proyecto.autores_lista | first }}
                        {% endif %}
                    </p>
                </div>
                
                <a href="{{ proyecto.url | relative_url }}" class="project-link" style="margin-top: auto; padding-top: 15px;">Leer más →</a>
            </div>
            {% endfor %}
        </div>
    </div>

</div>

<script>
    // Variable global con la ruta del catálogo para que el JS externo la pueda usar
    const URL_CATALOGO = "{{ '/catalogo' | relative_url }}";
</script>
<script src="{{ '/assets/js/inicio.js' | relative_url }}"></script>