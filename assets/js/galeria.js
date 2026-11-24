let currentAlbum = [];
let currentIndex = 0;

function filterGallery(anio, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const items = document.querySelectorAll('.gallery-item');
    let visibles = 0;

    items.forEach(item => {
        if (anio === 'todos' || item.getAttribute('data-anio') === anio) {
            item.style.display = 'block';
            visibles++;
        } else {
            item.style.display = 'none';
        }
    });

    const vacio = document.getElementById('galeriaVacio');
    if (vacio) {
        vacio.style.display = visibles === 0 ? 'block' : 'none';
    }
}

// Usa la variable global GLOBAL_BASE_URL definida en el HTML
function formatUrl(url) {
    url = url.trim();
    return url.startsWith('http') ? url : GLOBAL_BASE_URL + url;
}

// Apertura segura leyendo atributos data-* (evita errores por comillas o saltos de línea)
function openModalFromCard(cardEl) {
    const titulo = cardEl.getAttribute('data-titulo') || '';
    const descripcion = cardEl.getAttribute('data-desc') || '';
    const imagenesString = cardEl.getAttribute('data-imagenes') || '';
    openModal(titulo, descripcion, imagenesString);
}

function openModal(titulo, descripcion, imagenesString) {
    currentAlbum = (imagenesString || '')
        .split(';')
        .map(s => s.trim())
        .filter(Boolean);
    currentIndex = 0;

    if (currentAlbum.length === 0) return;

    document.getElementById('modalTitle').innerText = titulo;
    document.getElementById('modalDesc').innerText = descripcion;

    renderModalThumbnails();
    updateModalImage();

    document.getElementById('galleryModal').style.display = "flex";
    document.body.style.overflow = "hidden";
}

function renderModalThumbnails() {
    const container = document.getElementById('modalThumbnails');
    if (!container) return;

    container.innerHTML = '';

    if (currentAlbum.length <= 1) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'flex';
    currentAlbum.forEach((rawUrl, idx) => {
        const thumb = document.createElement('img');
        thumb.src = formatUrl(rawUrl);
        thumb.alt = `Miniatura ${idx + 1}`;
        thumb.className = 'gallery-modal-thumb' + (idx === currentIndex ? ' active' : '');
        thumb.loading = 'lazy';
        thumb.addEventListener('click', function (e) {
            e.stopPropagation();
            currentIndex = idx;
            updateModalImage();
        });
        container.appendChild(thumb);
    });
}

function updateModalImage() {
    const url = formatUrl(currentAlbum[currentIndex]);
    document.getElementById('modalImg').src = url;

    const origLink = document.getElementById('modalOriginalLink');
    if (origLink) {
        origLink.href = url;
    }

    const total = currentAlbum.length;
    document.getElementById('imgCounter').innerText = total > 1 ? `Imagen ${currentIndex + 1} de ${total}` : '';

    document.getElementById('prevBtn').style.display = total > 1 ? 'block' : 'none';
    document.getElementById('nextBtn').style.display = total > 1 ? 'block' : 'none';

    // Resaltar miniatura activa en la tira inferior
    const thumbs = document.querySelectorAll('#modalThumbnails .gallery-modal-thumb');
    thumbs.forEach((thumb, idx) => {
        if (idx === currentIndex) {
            thumb.classList.add('active');
            thumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else {
            thumb.classList.remove('active');
        }
    });
}

function nextImg(event) {
    if (event) event.stopPropagation();
    currentIndex = (currentIndex + 1) % currentAlbum.length;
    updateModalImage();
}

function prevImg(event) {
    if (event) event.stopPropagation();
    currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
    updateModalImage();
}

function closeModal() {
    document.getElementById('galleryModal').style.display = "none";
    document.body.style.overflow = "auto";
}

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('galleryModal');
    if (modal && modal.style.display === "flex") {
        if (e.key === "ArrowRight" && currentAlbum.length > 1) nextImg(new Event(''));
        if (e.key === "ArrowLeft" && currentAlbum.length > 1) prevImg(new Event(''));
        if (e.key === "Escape") closeModal();
    }
});

// Soporte táctil (swipe) para móviles dentro del modal
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.gallery-modal-image-wrapper');
    if (!wrapper) return;

    let touchStartX = 0;
    let touchEndX = 0;

    wrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
        if (currentAlbum.length <= 1) return;
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
            if (diff > 0) {
                nextImg();
            } else {
                prevImg();
            }
        }
    }, { passive: true });
});
