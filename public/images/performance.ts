// Performance optimization utilities
export const preloadResources = async (resources: string[]): Promise<void> => {
  const preloadPromises = resources.map(resource => {
    if (resource.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
      return preloadImage(resource);
    }
    return Promise.resolve();
  });

  await Promise.all(preloadPromises);
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const optimizeImageUrl = (url: string, width: number = 1200, quality: number = 75): string => {
  try {
    if (url.includes('images.unsplash.com')) {
      const urlObj = new URL(url);
      urlObj.searchParams.set('auto', 'format,compress');
      urlObj.searchParams.set('q', quality.toString());
      urlObj.searchParams.set('w', width.toString());
      urlObj.searchParams.set('fit', 'max');
      return urlObj.toString();
    }
    return url;
  } catch {
    return url;
  }
};

export const lazyLoadImage = (target: HTMLElement, callback: () => void): void => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback();
        observer.disconnect();
      }
    });
  }, { rootMargin: '50px' });

  observer.observe(target);
};