---
layout: default
title: Inicio
---

<div style="background: var(--azul-degradado); padding: 100px 10%; text-align: center; color: white;">
    <span style="background: rgba(255,255,255,0.2); padding: 5px 20px; border-radius: 20px; font-size: 0.9rem; font-weight: bold; border: 1px solid rgba(255,255,255,0.3);">
        Ingeniería y Tecnología
    </span>
    <h1 style="font-size: 3.5rem; margin: 20px 0 10px; font-weight: 800; letter-spacing: -1px;">
        Dispositivos Biomédicos Inteligentes
    </h1>
    <p style="font-size: 1.4rem; opacity: 0.9; max-width: 800px; margin: 0 auto 40px; line-height: 1.5;">
        Innovación en algoritmos de IA y sistemas embebidos aplicados a la salud humana y veterinaria.
    </p>
    
    <div style="max-width: 700px; margin: 0 auto; display: flex; gap: 10px; background: rgba(255,255,255,0.1); padding: 10px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);">
        <input type="text" id="inputBusquedaHero" placeholder="Buscar tesis, artículos..." 
               style="flex: 1; background: transparent; border: 1px solid rgba(255,255,255,0.4); padding: 12px 20px; border-radius: 8px; color: white; outline: none;">
        <button onclick="ejecutarBusqueda()" style="background: #2563eb; color: white; border: none; padding: 12px 30px; border-radius: 8px; font-weight: bold; cursor: pointer;">
            Buscar
        </button>
    </div>
</div>

<div class="container">

    <div style="margin-top: 80px; text-align: center;">
        <h2 style="color: var(--azul-oscuro); font-size: 2.2rem; margin-bottom: 10px;">Líneas de Investigación</h2>
        <div style="width: 50px; height: 3px; background: var(--azul-primario); margin: 10px auto 50px;"></div>
        
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px;">
            <div class="card" style="padding: 30px; border-bottom: 4px solid #2563eb;">
                <i class="fas fa-microchip" style="font-size: 2rem; color: #2563eb; margin-bottom: 15px;"></i>
                <h3 style="font-size: 1.1rem;">Sistemas Embebidos</h3>
                <p style="font-size: 0.9rem; color: #666;">Hardware médico de bajo consumo.</p>
            </div>
            <div class="card" style="padding: 30px; border-bottom: 4px solid #10b981;">
                <i class="fas fa-brain" style="font-size: 2rem; color: #10b981; margin-bottom: 15px;"></i>
                <h3 style="font-size: 1.1rem;">Inteligencia Artificial</h3>
                <p style="font-size: 0.9rem; color: #666;">Deep Learning para diagnóstico.</p>
            </div>
            <div class="card" style="padding: 30px; border-bottom: 4px solid #f59e0b;">
                <i class="fas fa-heartbeat" style="font-size: 2rem; color: #f59e0b; margin-bottom: 15px;"></i>
                <h3 style="font-size: 1.1rem;">Monitoreo Remoto</h3>
                <p style="font-size: 0.9rem; color: #666;">Telemetría médica e IoT.</p>
            </div>
        </div>
    </div>

    <div style="margin-top: 100px;">
        <div style="text-align: center; margin-bottom: 70px;">
            <h2 style="color: var(--azul-oscuro); font-size: 2rem;">Investigadores Principales</h2>
            <div style="width: 40px; height: 3px; background: var(--azul-primario); margin: 10px auto;"></div>
        </div>
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 50px 30px;">
            {% for miembro in site.data.equipo.investigadores limit:3 %}
            <div class="card" style="text-align: center; padding: 25px; position: relative; border-top: 5px solid var(--azul-primario);">
                <div style="width: 100px; height: 100px; border-radius: 50%; overflow: hidden; border: 4px solid #eef4ff; position: absolute; top: -50px; left: 50%; transform: translateX(-50%); background: white;">
                    <img src="{{ miembro.foto | relative_url }}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="margin-top: 50px;">
                    <h3 style="font-size: 1.2rem; color: var(--azul-oscuro);">{{ miembro.nombre }}</h3>
                    <p style="color: #0d6efd; font-weight: bold; font-size: 0.85rem;">{{ miembro.rol }}</p>
                    <p style="color: #777; font-size: 0.75rem;">{{ miembro.institucion }}</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>

    <div style="margin-top: 100px; margin-bottom: 60px;">
        <h2 style="color: var(--azul-oscuro); font-size: 2rem;">Producción Reciente</h2>
        <p style="color: #666;">Últimos proyectos y tesis desarrolladas.</p>
        <div style="width: 50px; height: 3px; background: var(--azul-primario); margin: 15px 0 40px;"></div>

        <div class="grid">
            {% for proyecto in site.data.proyectos limit:2 %}
            <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <span style="font-size: 0.75rem; color: var(--azul-primario); font-weight: bold; background: #eef4ff; padding: 4px 10px; border-radius: 10px;">
                        {{ proyecto.anio }} | {{ proyecto.nivel }}
                    </span>
                    <h3 style="margin-top: 15px; color: var(--azul-oscuro); font-size: 1.2rem;">{{ proyecto.titulo }}</h3>
                    <p style="font-size: 0.9rem; color: #666;"><strong>Por:</strong> {{ proyecto.autor }}</p>
                    <p style="color: #444; line-height: 1.6; font-size: 0.9rem;">{{ proyecto.resumen | truncate: 150 }}</p>
                </div>
                <div style="margin-top: 20px;">
                    <a href="{{ proyecto.link | relative_url }}" style="color: var(--azul-primario); font-weight: bold; text-decoration: none;">Ver detalles →</a>
                </div>
            </div>
            {% endfor %}
        </div>

        <div style="text-align: center; margin-top: 50px; margin-bottom: 80px;">
            <a href="{{ '/catalogo.html' | relative_url }}" class="btn">Explorar catálogo completo</a>
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
