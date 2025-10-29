import PhotoSwipe from 'photoswipe';

// Centralized lightbox manager
class LightboxManager {
  private static instance: LightboxManager;

  static getInstance(): LightboxManager {
    if (!LightboxManager.instance) {
      LightboxManager.instance = new LightboxManager();
    }
    return LightboxManager.instance;
  }

  openGallery(images: Array<{src: string, alt: string, width?: number, height?: number}>) {
    // Convert images to PhotoSwipe format
    // PhotoSwipe will automatically detect dimensions if width/height are not provided
    const items = images.map(img => {
      const item: any = {
        src: img.src,
        alt: img.alt
      };
      
      // Only include width/height if they're provided
      if (img.width) item.width = img.width;
      if (img.height) item.height = img.height;
      
      return item;
    });

    // PhotoSwipe options
    const options = {
      index: 0,
      bgOpacity: 0.9,
      showHideOpacity: true,
      closeOnVerticalDrag: true,
      closeOnScroll: true,
      padding: { top: 20, bottom: 20, left: 20, right: 20 }
    };

    // Initialize PhotoSwipe
    const gallery = new PhotoSwipe({
      dataSource: items,
      ...options
    });

    // Initialize and open
    gallery.init();
  }
}

// Global instance
(window as any).lightboxManager = LightboxManager.getInstance();
