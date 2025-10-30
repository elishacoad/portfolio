export function openLightbox(modalId: string): void {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  modal.setAttribute('aria-hidden', 'false');

  const handleKeydown = (e: KeyboardEvent) => {
    if (modal.style.display === 'block') {
      if (e.key === 'Escape') {
        closeLightbox(modalId);
        document.removeEventListener('keydown', handleKeydown);
      }
      if (e.key === 'ArrowLeft') changeSlide(modalId, -1);
      if (e.key === 'ArrowRight') changeSlide(modalId, 1);
    }
  };

  document.addEventListener('keydown', handleKeydown);
}

export function closeLightbox(modalId: string): void {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  modal.setAttribute('aria-hidden', 'true');
}

export function changeSlide(modalId: string, n: number): void {
  const currentIndex = getCurrentSlideIndex(modalId);
  showSlide(modalId, currentIndex + n);
}

export function currentSlide(modalId: string, n: number): void {
  showSlide(modalId, n);
}

function getCurrentSlideIndex(modalId: string): number {
  const modal = document.getElementById(modalId);
  if (!modal) return 0;

  const slides = modal.querySelectorAll<HTMLElement>('.lightbox-slide');
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].style.display === 'block') {
      return i;
    }
  }
  return 0;
}

function showSlide(modalId: string, n: number): void {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const slides = modal.querySelectorAll<HTMLElement>('.lightbox-slide');
  const thumbs = modal.querySelectorAll<HTMLElement>('.lightbox-thumb');

  if (slides.length === 0) return;

  const totalSlides = slides.length;
  const slideIndex = ((n % totalSlides) + totalSlides) % totalSlides;

  slides.forEach((slide) => {
    slide.style.display = 'none';
    slide.setAttribute('aria-hidden', 'true');
  });

  thumbs.forEach((thumb) => {
    thumb.classList.remove('lightbox-thumb-active');
  });

  if (slides[slideIndex] && thumbs[slideIndex]) {
    slides[slideIndex].style.display = 'block';
    slides[slideIndex].setAttribute('aria-hidden', 'false');
    thumbs[slideIndex].classList.add('lightbox-thumb-active');
  }
}

export function initLightbox(modalId: string): void {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const closeBtn = modal.querySelector<HTMLElement>('.lightbox-close');
  const prevBtn = modal.querySelector<HTMLElement>('.lightbox-prev');
  const nextBtn = modal.querySelector<HTMLElement>('.lightbox-next');
  const thumbs = modal.querySelectorAll<HTMLElement>('.lightbox-thumb');

  closeBtn?.addEventListener('click', () => closeLightbox(modalId));
  prevBtn?.addEventListener('click', () => changeSlide(modalId, -1));
  nextBtn?.addEventListener('click', () => changeSlide(modalId, 1));

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => currentSlide(modalId, index));
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLightbox(modalId);
    }
  });
}

export function initGalleryTriggers(): void {
  const triggers = document.querySelectorAll<HTMLElement>('.gallery-trigger');
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const galleryId = trigger.getAttribute('data-gallery-id');
      if (galleryId) {
        openLightbox(`lightbox-${galleryId}`);
      }
    });
  });
}

