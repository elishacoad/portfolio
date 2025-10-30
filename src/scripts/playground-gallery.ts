import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

function initGalleries() {
  console.log('🔵 Initializing galleries...');
  
  // Store gallery instances
  const galleryInstances = new Map();
  
  // Get all gallery IDs
  const triggers = document.querySelectorAll('.lg-trigger');
  console.log('🔵 Found triggers:', triggers.length);
  
  if (triggers.length === 0) {
    console.warn('⚠️ No triggers found, retrying in 500ms...');
    setTimeout(initGalleries, 500);
    return;
  }
  
  const galleryIds = [...new Set(
    Array.from(triggers)
      .map(trigger => trigger.getAttribute('data-lg-id'))
      .filter(id => id)
  )];
  
  console.log('🔵 Gallery IDs:', galleryIds);

  galleryIds.forEach(galleryId => {
    const galleryEl = document.getElementById(galleryId);
    const trigger = document.querySelector(`.lg-trigger[data-lg-id="${galleryId}"]`);
    
    console.log(`🔵 Gallery ${galleryId}:`, { galleryEl, trigger });
    
    if (galleryEl && trigger) {
      console.log(`✅ Initializing gallery: ${galleryId}`);
      
      // Initialize lightGallery for this gallery
      try {
        const lg = lightGallery(galleryEl, {
          plugins: [lgThumbnail],
          selector: 'a',
          thumbnail: true,
          showThumbByDefault: true,
          animateThumb: true,
          thumbWidth: 80,
          thumbHeight: 80,
          thumbMargin: 5,
          mode: 'lg-fade',
          speed: 500,
          closable: true,
          loop: true,
          escKey: true,
          keyPress: true,
          controls: true,
          mousewheel: true,
          getCaptionFromTitleOrAlt: true,
          download: true,
          counter: true,
        });

        // Store instance
        galleryInstances.set(galleryId, lg);
        console.log(`✅ Gallery ${galleryId} initialized successfully`);

        // Make trigger open the gallery
        trigger.addEventListener('click', (e) => {
          console.log(`🟢 Click detected on gallery: ${galleryId}`);
          e.preventDefault();
          e.stopPropagation();
          
          // Click the first link in the gallery to open it
          const firstLink = galleryEl.querySelector('a');
          console.log('🟢 First link:', firstLink);
          
          if (firstLink) {
            console.log('🟢 Clicking first link...');
            firstLink.click();
          } else {
            console.error('❌ No first link found in gallery');
          }
        });
      } catch (error) {
        console.error(`❌ Error initializing gallery ${galleryId}:`, error);
      }
    } else {
      console.warn(`⚠️ Missing gallery element or trigger for: ${galleryId}`, { galleryEl, trigger });
    }
  });
  
  console.log('🔵 Gallery initialization complete');
}

// Wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initGalleries, 100);
  });
} else {
  setTimeout(initGalleries, 100);
}

