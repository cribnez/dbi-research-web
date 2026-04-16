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
        <input type="text" placeholder="Buscar tesis, artículos..." 
               style="flex: 1; background: transparent; border: 1px solid rgba(255,255,255,0.4); padding: 12px 20px; border-radius: 8px; color: white; outline: none;">
        <button style="background: #2563eb; color: white; border: none; padding: 12px 30px; border-radius: 8px; font-weight: bold; cursor: pointer;">
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
                <p style="font-size: 0.9rem; color: #666;">Diseño de hardware médico de bajo consumo y alta precisión.</p>
            </div>
            <div class="card" style="padding: 30px; border-bottom: 4px solid #10b981;">
                <i class="fas fa-brain" style="font-size: 2rem; color: #10b981; margin-bottom: 15px;"></i>
                <h3 style="font-size: 1.1rem;">Inteligencia Artificial</h3>
                <p style="font-size: 0.9rem; color: #666;">Algoritmos de Deep Learning para diagnóstico por imagen.</p>
            </div>
            <div class="card" style="padding: 30px; border-bottom: 4px solid #f59e0b;">
                <i class="fas fa-heartbeat" style="font-size: 2rem; color: #f59e0b; margin-bottom: 15px;"></i>
                <h3 style="font-size: 1.1rem;">Monitoreo Remoto</h3>
                <p style="font-size: 0.9rem; color: #666;">Telemetría médica e IoT aplicada a pacientes críticos.</p>
            </div>
        </div>
    </div>

    <div style="margin-top: 100px; margin-bottom: 80px;">
        <div style="text-align: center; margin-bottom: 70px;">
            <h2 style="color: var(--azul-oscuro); font-size: 2rem;">Investigadores Principales</h2>
            <p style="color: #666; margin-top: 10px;">Líderes académicos del grupo de investigación.</p>
        </div>

        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 50px 30px;">
            {% for miembro in site.data.equipo.investigadores limit:3 %}
            <div class="card" style="text-align: center; padding: 25px; position: relative; border-top: 5px solid var(--azul-primario);">
                <div style="width: 100px; height: 100px; border-radius: 50%; overflow: hidden; border: 4px solid #eef4ff; position: absolute; top: -50px; left: 50%; transform: translateX(-50%); background: white; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    <img src="{{ miembro.foto | relative_url }}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="margin-top: 50px;">
                    <h3 style="font-size: 1.2rem; color: var(--azul-oscuro);">{{ miembro.nombre }}</h3>
                    <p style="color: #0d6efd; font-weight: bold; font-size: 0.85rem; text-transform: uppercase;">{{ miembro.rol }}</p>
                    <p style="color: #777; font-size: 0.75rem; line-height: 1.4; margin-bottom: 15px;">{{ miembro.institucion }}</p>
                    <div style="border-top: 1px solid #eee; padding-top: 10px; font-size: 0.8rem; color: #888;">
                        <i class="far fa-envelope"></i> {{ miembro.email }}
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>

</div>
