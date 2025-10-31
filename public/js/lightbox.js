(function() {
  'use strict';

  const Lightbox = {
    close(modalId) {
      const modal = document.getElementById(modalId);
      if (!modal) return;
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
      modal.setAttribute('aria-hidden', 'true');
    },

    getCurrentSlideIndex(modalId) {
      const modal = document.getElementById(modalId);
      if (!modal) return 0;
      const slides = modal.querySelectorAll('.lightbox-slide');
      for (let i = 0; i < slides.length; i++) {
        if (slides[i].style.display === 'flex') return i;
      }
      return 0;
    },

    showSlide(modalId, n) {
      const modal = document.getElementById(modalId);
      if (!modal) return;
      const slides = modal.querySelectorAll('.lightbox-slide');
      const thumbs = modal.querySelectorAll('.lightbox-thumb');
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
        slides[slideIndex].style.display = 'flex';
        slides[slideIndex].setAttribute('aria-hidden', 'false');
        thumbs[slideIndex].classList.add('lightbox-thumb-active');
      }
    },

    changeSlide(modalId, n) {
      const currentIndex = this.getCurrentSlideIndex(modalId);
      this.showSlide(modalId, currentIndex + n);
    },

    open(modalId) {
      const modal = document.getElementById(modalId);
      if (!modal) return;
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      modal.setAttribute('aria-hidden', 'false');

      const handleKeydown = (e) => {
        if (modal.style.display === 'block') {
          if (e.key === 'Escape') {
            Lightbox.close(modalId);
            document.removeEventListener('keydown', handleKeydown);
          }
          if (e.key === 'ArrowLeft') Lightbox.changeSlide(modalId, -1);
          if (e.key === 'ArrowRight') Lightbox.changeSlide(modalId, 1);
        }
      };

      document.addEventListener('keydown', handleKeydown);
    },

    init(modalId) {
      const modal = document.getElementById(modalId);
      if (!modal) return;

      const closeBtn = modal.querySelector('.lightbox-close');
      const prevBtn = modal.querySelector('.lightbox-prev');
      const nextBtn = modal.querySelector('.lightbox-next');
      const thumbs = modal.querySelectorAll('.lightbox-thumb');

      closeBtn?.addEventListener('click', () => this.close(modalId));
      prevBtn?.addEventListener('click', () => this.changeSlide(modalId, -1));
      nextBtn?.addEventListener('click', () => this.changeSlide(modalId, 1));

      thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => this.showSlide(modalId, index));
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.close(modalId);
      });
    },

    initAll() {
      document.querySelectorAll('.lightbox-modal').forEach((modal) => {
        this.init(modal.id);
      });
    },

    initGalleryTriggers() {
      document.querySelectorAll('.gallery-trigger').forEach((trigger) => {
        trigger.addEventListener('click', () => {
          const galleryId = trigger.getAttribute('data-gallery-id');
          if (galleryId) {
            this.open(`lightbox-${galleryId}`);
          }
        });
      });
    }
  };

  if (typeof window !== 'undefined') {
    window.Lightbox = Lightbox;
    document.addEventListener('DOMContentLoaded', () => {
      Lightbox.initAll();
      Lightbox.initGalleryTriggers();
    });
  }
})();

