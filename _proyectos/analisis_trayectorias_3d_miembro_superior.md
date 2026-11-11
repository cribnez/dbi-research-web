---
layout: proyecto-detalle
title: "Análisis Exploratorio de Trayectorias Tridimensionales en el Espacio de Señales durante Ejercicios del Miembro Superior"
anio: "2026"
nivel: "Ingeniería"
tipo: ["Congreso"]

resumen: "Se presenta un análisis exploratorio de trayectorias construidas mediante tres sensores MPU-6050 y un ESP32 durante ejercicios de flexo-extensión del codo, abducción del hombro y flexión del hombro. Se analizaron 15 repeticiones correspondientes a tres sesiones completas registradas con dos voluntarios utilizando el brazo derecho. Para cada repetición se calcularon amplitudes de señal utilizando la diferencia entre los percentiles 95 y 5 de los canales filtrados y tarados. Posteriormente, las cinco repeticiones de cada ejercicio se resumieron mediante mediana e intervalo intercuartílico. Las trayectorias multicanal obtenidas constituyen una base piloto para explorar técnicas de agrupamiento y alineación temporal utilizando señales derivadas del acelerómetro. El sistema integra un ESP32 y tres sensores MPU-6050 ubicados en hombro, codo y muñeca, permitiendo la adquisición, filtrado, segmentación automática y visualización tridimensional de señales asociadas al movimiento del miembro superior. Los resultados muestran patrones consistentes entre repeticiones de una misma sesión y proporcionan una plataforma experimental para futuras aplicaciones en rehabilitación y análisis biomecánico. Debido al número limitado de participantes y sesiones, los resultados no constituyen una validación clínica ni representan mediciones directas del rango de movimiento articular."

director:
  - "Dr. Christian Roberto Ibáñez Nangüelú"
  - "Dr. Roberto Ibáñez Córdova"
  - "Dra. Diana Paulina Martínez Cancino"
  - "Dr. José Octavio Vázquez Buenos Aires"

autores_lista:
  - "Metzli Belen Cancino Juárez"
  - "Erick Daniel Pérez Ramos"

escuela: "Universidad Politécnica de Chiapas / Tecnológico Nacional de México"

palabras_clave:
  - "MPU-6050"
  - "Sensores Inerciales"
  - "Adquisición de Datos"
  - "Trayectorias Tridimensionales"
  - "Ejercicios del Miembro Superior"
  - "Rehabilitación"
  - "ESP32"

imagen: "https://img.youtube.com/vi/zTUrN62HUNo/maxresdefault.jpg"

github:

youtube: "https://youtube.com/watch?v=zTUrN62HUNo"

drive:

doi_link:

resultados_lista:
  - "Desarrollo de un sistema de captura basado en ESP32 y tres sensores MPU-6050 para el monitoreo de movimientos del miembro superior."
  - "Implementación de algoritmos de tara, filtrado por mediana móvil y filtro de Kalman adaptativo."
  - "Diseño de un segmentador automático para la identificación y almacenamiento de repeticiones de ejercicios."
  - "Obtención de trayectorias tridimensionales utilizando señales provenientes de hombro, codo y muñeca."
  - "Registro estructurado de datos mediante archivos NPZ, auditorías JSON e índice local en MongoDB."
  - "Visualización tridimensional interactiva de trayectorias de movimiento para análisis exploratorio."
  - "Generación de un conjunto piloto de datos para futuras aplicaciones de agrupamiento mediante K-Means, DTW y DBA."
  - "Caracterización de patrones de variación de señal durante ejercicios de flexo-extensión de codo, abducción y flexión de hombro."
  - "Base experimental para el desarrollo de herramientas inteligentes de análisis biomecánico y rehabilitación."
  - "Proyecto presentado en el E-Congreso Internacional Multidisciplinario de Ciencia y Tecnología 2026, celebrado en modalidad virtual los días 11 y 12 de noviembre de 2026."
---