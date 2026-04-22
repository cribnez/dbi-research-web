let currentAlbum = [];
let currentIndex = 0;

function filterGallery(anio, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        item.style.display = (anio === 'todos' || item.getAttribute('data-anio') === anio) ? 'block' : 'none';
    });
}

// Usa la variable global GLOBAL_BASE_URL que definiremos en tu HTML
function formatUrl(url) {
    url = url.trim();
    return url.startsWith('http') ? url : GLOBAL_BASE_URL + url;
}

function openModal(titulo, descripcion, imagenesString) {
    // Usamos el punto y coma como separador que arreglamos antes
    currentAlbum = imagenesString.split(';');
    currentIndex = 0;
    
    document.getElementById('modalTitle').innerText = titulo;
    document.getElementById('modalDesc').innerText = descripcion;
    
    updateModalImage();
    
    document.getElementById('galleryModal').style.display = "flex";
    document.body.style.overflow = "hidden";
}

function updateModalImage() {
    const url = formatUrl(currentAlbum[currentIndex]);
    document.getElementById('modalImg').src = url;
    
    const total = currentAlbum.length;
    document.getElementById('imgCounter').innerText = total > 1 ? `Imagen ${currentIndex + 1} de ${total}` : '';
    
    document.getElementById('prevBtn').style.display = total > 1 ? 'block' : 'none';
    document.getElementById('nextBtn').style.display = total > 1 ? 'block' : 'none';
}

function nextImg(event) {
    if(event) event.stopPropagation();
    currentIndex = (currentIndex + 1) % currentAlbum.length;
    updateModalImage();
}

function prevImg(event) {
    if(event) event.stopPropagation();
    currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
    updateModalImage();
}

function closeModal() {
    document.getElementById('galleryModal').style.display = "none";
    document.body.style.overflow = "auto";
}

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (document.getElementById('galleryModal').style.display === "flex") {
        if (e.key === "ArrowRight" && currentAlbum.length > 1) nextImg(new Event(''));
        if (e.key === "ArrowLeft" && currentAlbum.length > 1) prevImg(new Event(''));
        if (e.key === "Escape") closeModal();
    }
});