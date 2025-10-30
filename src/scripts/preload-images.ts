// Preload images to get their dimensions for PhotoSwipe
export function preloadImageDimensions(images: Array<{src: string}>): Promise<Array<{src: string, width: number, height: number}>> {
  return Promise.all(
    images.map(img => {
      return new Promise<{src: string, width: number, height: number}>((resolve) => {
        const imgEl = new Image();
        imgEl.onload = () => {
          resolve({
            src: img.src,
            width: imgEl.naturalWidth,
            height: imgEl.naturalHeight
          });
        };
        imgEl.onerror = () => {
          // Fallback dimensions if image fails to load
          resolve({
            src: img.src,
            width: 1200,
            height: 800
          });
        };
        imgEl.src = img.src;
      });
    })
  );
}

