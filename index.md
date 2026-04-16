---
layout: default
title: Inicio
---

<style>
:root {
    --azul-degradado: linear-gradient(135deg, #0a2e61 0%, #15468a 100%);
    --azul-primario: #0d6efd;
    --azul-oscuro: #0a2e61;
    --gris-fondo: #f8f9fa;
    --blanco: #ffffff;
}

/* RESET PARA ELIMINAR HUECOS BLANCOS */
.main-content, #main, .container-lg { 
    max-width: 100% !important; 
    padding: 0 !important; 
    margin: 0 !important; 
}

/* HERO ESTILO PREMIUM */
.hero {
    background: var(--azul-degradado);
    color: white;
    padding: 80px 10% 100px;
    text-align: center;
    margin: 0;
}

.badge-tech { 
    background: rgba(255,255,255,0.2); 
    border: 1px solid rgba(255,255,255,0.4); 
    color: white; 
    padding: 6px 20px; 
    border-radius: 20px; 
    font-size: 0.85rem;
    font-weight: bold;
    display: inline-block;
}

/* BUSCADOR FLOTANTE */
.search-container {
    background: white; 
    padding: 15px; 
    border-radius: 12px; 
    box-shadow: 0 8px 30px rgba(0,0,0,0.15); 
    margin: -45px auto 50px; 
    display: flex; 
    gap: 10px;
    max-width: 700px;
    position: relative;
    z-index: 20;
}

/* CONTENEDOR GENERAL */
.container { 
    max-width: 1100px; 
    margin: auto; 
    padding: 0 20px; 
}

.grid { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
    gap: 30px; 
}

.card {
    background: var(--blanco); 
    padding: 25px; 
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05); 
    border-top: 4px solid var(--azul-primario);
    transition: transform 0.3s;
}

.card:hover { transform: translateY(-5px); }

/* FOTO CIRCULAR INVESTIGADORES */
.photo-circle { 
    width: 100px; height: 100px; border-radius: 50%; 
    margin: -60px auto 15px; 
    border: 4px solid var(--blanco); 
    overflow: hidden; 
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    background: white;
}
.photo-circle img { width: 100%; height: 100%; object-fit: cover; }

@media (max-width: 600px) {
    .hero h1 { font-size: 2rem !important; }
    .search-container { margin-top: -30px; flex-direction: column; }
}
</style>

<header class="hero">
    <div class="badge-tech">Ingeniería y Tecnología</div>
    <h1 style="font-size: 3.2rem; font-weight: 800; margin: 20px 0 10px; letter-spacing: -1px;">
        Dispositivos Biomédicos Inteligentes
    </h1>
    <p style="font-size: 1.3rem; opacity: 0.9; max-width: 800px; margin: 0 auto;">
        Innovación en algoritmos de IA y sistemas embebidos aplicados a la salud humana y veterinaria.
    </p>
</header>

<div class="container">
    
    <div class="search-container">
        <input type="text" id="inputBusquedaHero" placeholder="Buscar tesis, artículos, autores..." 
               style="flex: 1; border: 1px solid #eee; padding: 12px 20px; border-radius: 8px; outline: none; font-size: 1rem;">
        <button onclick="ejecutarBusqueda()" style="background: #2563eb; color: white; border: none; padding: 12px 30px; border-radius: 8px; font-weight: bold; cursor: pointer;">
            Buscar
        </button>
    </div>

    <div style="text-align: center; margin-bottom: 60px;">
        <h2 style="color: var(--azul-oscuro); font-size: 2rem;">Líneas de Investigación</h2>
        <div style="width: 50px; height: 3px; background: var(--azul-primario); margin: 10px auto 40px;"></div>
        
        <div class="grid">
            <div class="card" style="border-top-color: #2563eb;">
                <i class="fas fa-microchip" style="font-size: 2rem; color: #2563eb; margin-bottom: 15px;"></i>
                <h3>Sistemas Embebidos</h3>
                <p style="color: #666; font-size: 0.9rem;">Hardware médico de bajo consumo y alta precisión para entornos clínicos.</p>
            </div>
            <div class="card" style="border-top-color: #10b981;">
                <i class="fas fa-brain" style="font-size: 2rem; color: #10b981; margin-bottom: 15px;"></i>
                <h3>Inteligencia Artificial</h3>
                <p style="color: #666; font-size: 0.9rem;">Modelos de visión artificial y Deep Learning para diagnóstico médico.</p>
            </div>
            <div class="card" style="border-top-color: #f59e0b;">
                <i class="fas fa-heartbeat" style="font-size: 2rem; color: #f59e0b; margin-bottom: 15px;"></i>
                <h3>Monitoreo IoT</h3>
                <p style="color: #666; font-size: 0.9rem;">Telemetría y redes de sensores inalámbricos para salud remota.</p>
            </div>
        </div>
    </div>

    <div style="margin-top: 100px; text-align: center;">
        <h2 style="color: var(--azul-oscuro); font-size: 2rem;">Investigadores Principales</h2>
        <div style="width: 50px; height: 3px; background: var(--azul-primario); margin: 10px auto 80px;"></div>
        
        <div class="grid">
            {% for miembro in site.data.equipo.investigadores limit:3 %}
            <div class="card" style="margin-top: 40px;">
                <div class="photo-circle">
                    <img src="{{ miembro.foto | relative_url }}" alt="{{ miembro.nombre }}">
                </div>
                <h3 style="font-size: 1.2rem; margin-bottom: 5px;">{{ miembro.nombre }}</h3>
                <p style="color: var(--azul-primario); font-weight: bold; font-size: 0.85rem; text-transform: uppercase;">{{ miembro.rol }}</p>
                <p style="color: #777; font-size: 0.8rem; line-height: 1.4;">{{ miembro.institucion }}</p>
            </div>
            {% endfor %}
        </div>
    </div>

    <div style="margin-top: 80px; margin-bottom: 80px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px;">
            <h2 style="color: var(--azul-oscuro); margin: 0;">Producción Reciente</h2>
            <a href="{{ '/catalogo.html' | relative_url }}" style="color: var(--azul-primario); font-weight: bold; text-decoration: none;">Ver Catálogo →</a>
        </div>

        <div class="grid">
            {% for proyecto in site.data.proyectos limit:2 %}
            <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <span style="font-size: 0.7rem; color: #2563eb; background: #eef4ff; padding: 4px 10px; border-radius: 10px; font-weight: bold;">
                        {{ proyecto.anio }} | {{ proyecto.nivel }}
                    </span>
                    <h3 style="margin-top: 15px; font-size: 1.15rem;">{{ proyecto.titulo }}</h3>
                    <p style="font-size: 0.85rem; color: #666;"><strong>Autor:</strong> {{ proyecto.autor }}</p>
                </div>
                <a href="{{ proyecto.link | relative_url }}" style="margin-top: 20px; color: var(--azul-primario); font-weight: bold; text-decoration: none; font-size: 0.9rem;">Leer más →</a>
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
