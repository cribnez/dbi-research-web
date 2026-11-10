---
layout: proyecto-detalle
title: "Real-Time ExoMonitor: Biomechanical Tracking for Rehabilitation"
anio: "2026"
nivel: "Ingeniería"
tipo: ["Prototipo", "Congreso"]
resumen: "Las lesiones articulares en rodilla y tobillo constituyen una de las principales causas de atención fisioterapéutica. Sin embargo, la evaluación del rango de movimiento durante la rehabilitación suele depender de la observación visual del especialista y de instrumentos analógicos como el goniómetro, lo que introduce variabilidad y limita la objetividad en el seguimiento clínico. El presente trabajo propone Real-Time ExoMonitor: Biomechanical Tracking for Rehabilitation, que integra sensores inerciales, comunicación inalámbrica, visualización tridimensional e inteligencia artificial para evaluar de manera objetiva el progreso del paciente. El sistema emplea tres sensores MPU6050 ubicados en cadera, rodilla y tobillo, que transmiten datos a 20 Hz vía WiFi hacia un servidor en Python. Los ángulos articulares se calculan mediante un filtro de Kalman, mientras que un avatar tridimensional en Unity3D replica el movimiento del paciente como interfaz de biofeedback visual para el fisioterapeuta. Al término de cada sesión, un pipeline de aprendizaje automático estima el rango articular, identifica tendencias de progreso mediante regresión lineal y clasifica el desempeño del paciente en niveles bajo, medio y alto utilizando K-Means. Los resultados se consolidan en un reporte PDF automático con gráficas de evolución clínica, facilitando la documentación y el seguimiento longitudinal del tratamiento. Las pruebas preliminares evidencian una latencia inferior a 500 ms, registro continuo de hasta 600 datos biomecánicos por sesión y estabilidad del servidor, lo que confirma la viabilidad del sistema. Esta propuesta constituye una herramienta accesible que complementa el criterio clínico con mediciones objetivas y documentación automatizada, contribuyendo a la incorporación de tecnologías de bajo costo en la rehabilitación articular."
director:
  - "Dr. Christian Roberto Ibáñez Nangüelú"
  - "Dr. Roberto Ibáñez Córdova"
autores_lista: 
  - "Ana Paola Antonio Espinosa"
  - "Óscar Eduardo Nájera Trujillo"
escuela: "Universidad Politécnica de Chiapas / Tecnológico Nacional de México"
doi_link: "https://doi.org/10.37811/cli_w1336"
imagen: "https://img.youtube.com/vi/3pWVFgDtZDE/maxresdefault.jpg"
youtube: "https://www.youtube.com/watch?v=3pWVFgDtZDE"
palabras_clave:
  - "Exoesqueleto"
  - "Sensores inerciales"
  - "Rehabilitación física"
  - "Rango de movimiento"
  - "Monitoreo biomecánico"
  - "Filtro de Kalman"
  - "Unity3D y Biofeedback"
  - "Machine Learning (K-Means)"
resultados_lista:
  - "Adquisición cinemática multi-articular con tres sensores inerciales MPU6050 en cadera, rodilla y tobillo a 20 Hz vía WiFi hacia servidor en Python."
  - "Estimación precisa de ángulos articulares en tiempo real mediante filtrado adaptativo de Kalman."
  - "Interfaz de biofeedback visual interactiva con avatar tridimensional en Unity3D que replica el movimiento del paciente en tiempo real."
  - "Pipeline de Machine Learning integrado: cálculo de rango articular, análisis de tendencias con regresión lineal y clasificación de desempeño con K-Means (bajo, medio y alto)."
  - "Generación automatizada de reportes clínicos consolidados en formato PDF con curvas de evolución y métricas longitudinales."
  - "Rendimiento óptimo con latencia inferior a 500 ms y registro continuo de hasta 600 datos biomecánicos por sesión de terapia."
  - "Ponencia en el IV Congreso Internacional Multidisciplinario 'Tecnología y educación en sociedades del conocimiento migrantes, plurales y con movilidad humana' (Universidad de Huelva / Alianza Red, junio 2026)."
---
