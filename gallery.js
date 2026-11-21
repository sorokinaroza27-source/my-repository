   const galleryImages = document.querySelectorAll('.gallery img');
   const lightbox = document.getElementById('lightbox');
   const lightboxImg = document.querySelector('.lightbox__img');
   const closeBtn = document.querySelector('.lightbox__close');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
        });

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});