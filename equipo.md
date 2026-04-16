<div class="container" style="margin-top: 80px; margin-bottom: 80px;">
    <div style="text-align: center; margin-bottom: 70px;">
        <h2 style="color: var(--azul-oscuro); font-size: 2.2rem; margin-bottom: 10px;">Investigadores Principales</h2>
        <div style="width: 60px; height: 4px; background: var(--azul-primario); margin: 0 auto;"></div>
    </div>

    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 50px 30px;">
        {% for miembro in site.data.equipo.investigadores limit:3 %}
        <div class="card" style="text-align: center; padding: 35px 25px 20px; position: relative; display: flex; flex-direction: column; align-items: center; min-height: 340px; border-top: 5px solid var(--azul-primario);">
            
            <div style="width: 110px; height: 110px; border-radius: 50%; overflow: hidden; border: 4px solid #eef4ff; position: absolute; top: -55px; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.12);">
                <img src="{{ miembro.foto | relative_url }}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>

            <div style="margin-top: 60px; flex-grow: 1; width: 100%;">
                <h3 style="color: var(--azul-oscuro); margin-bottom: 8px; font-size: 1.35rem;">{{ miembro.nombre }}</h3>
                <p style="color: #0d6efd; font-weight: bold; margin-bottom: 8px; font-size: 0.95rem; text-transform: uppercase;">{{ miembro.rol }}</p>
                
                <p style="color: #777; font-size: 0.85rem; line-height: 1.4; margin: 0 auto; padding: 0 10px; 
          white-space: normal !important; 
          overflow: visible !important; 
          text-overflow: clip !important; 
          max-width: 250px; 
          display: block;">
    {{ miembro.institucion }}
</p>
            </div>

            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #f0f0f0; width: 100%; color: #888; font-size: 0.8rem; display: flex; justify-content: center; align-items: center; gap: 7px;">
                <i class="far fa-envelope"></i> <span>{{ miembro.email }}</span>
            </div>
        </div>
        {% endfor %}
    </div>
</div>
