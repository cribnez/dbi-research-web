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

    <div class="recent-production">
        <div class="flex-header">
            <h2 class="section-title">Producción Reciente</h2>
            <a href="{{ '/catalogo.html' | relative_url }}" class="project-link">Ver Catálogo →</a>
        </div>

        <div class="grid">
            {% for proyecto in site.data.proyectos limit:2 %}
            <div class="card card-project" style="display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <span class="project-tag">
                        {{ proyecto.anio }} | {{ proyecto.nivel }}
                    </span>
                    <h3 class="project-title">{{ proyecto.titulo }}</h3>
                    <p class="project-author" style="margin-top: 10px; font-size: 0.9rem; color: #555;">
                        <strong>Por:</strong> 
                        {% comment %} 
                        Esta lógica permite usar el formato viejo (autor) o el nuevo (autores_lista) 
                        {% endcomment %}
                        {% if proyecto.autor %}
                            {{ proyecto.autor }}
                        {% elsif proyecto.autores_lista %}
                            {{ proyecto.autores_lista | first }} et al.
                        {% endif %}
                    </p>
                </div>
                
                <a href="{{ proyecto.link | relative_url }}" class="project-link" style="margin-top: 20px;">Leer más →</a>
            </div>
            {% endfor %}
        </div>
    </div>
</div>

<script>
function ejecutarBusqueda() {
    const terminobusqueda = document.getElementById('inputBusquedaHero').value;
    if (terminobusqueda.trim() !== "") {
        window.location.href = "{{ '/catalogo.html' | relative_url }}?search=" + encodeURIComponent(terminobusqueda);
    }
}
document.getElementById('inputBusquedaHero').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') ejecutarBusqueda();
});
</script>