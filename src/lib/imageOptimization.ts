/**
 * Utilidades para optimización de imágenes
 */

// Configuración de tamaños de imagen según el dispositivo
export const IMAGE_SIZES = {
  thumbnail: { width: 400, height: 400 },
  card: { width: 600, height: 600 },
  detail: { width: 1000, height: 1000 },
  hero: { width: 1920, height: 1080 },
} as const;

// BlurDataURL para placeholders (base64 1x1 pixel negro)
export const BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzAwMDAwMCIvPjwvc3ZnPg==';

// Configuración de prioridad de carga de imágenes
export const getImagePriority = (index: number): boolean => {
  // Solo las primeras 4 imágenes tienen prioridad
  return index < 4;
};

// Configuración de loading según posición
export const getImageLoading = (index: number): 'eager' | 'lazy' => {
  // Las primeras 6 imágenes se cargan eager, el resto lazy
  return index < 6 ? 'eager' : 'lazy';
};

// Generar srcset dinámicamente
export const generateSrcSet = (baseUrl: string, sizes: number[]): string => {
  return sizes.map((size) => `${baseUrl}?w=${size} ${size}w`).join(', ');
};

// Obtener el tamaño de imagen apropiado según el viewport
export const getResponsiveSizes = (type: 'gallery' | 'detail' | 'preview'): string => {
  switch (type) {
    case 'gallery':
      return '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw';
    case 'detail':
      return '(max-width: 768px) 100vw, 50vw';
    case 'preview':
      return '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw';
    default:
      return '100vw';
  }
};
