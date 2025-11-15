/**
 * Constantes globales de la aplicación
 */

// Colores de marca
export const BRAND_COLORS = {
  PRIMARY_GREEN: '#F2ECC8',
  PRIMARY_GREEN_HOVER: '#aca686',
  PRIMARY_DARK: '#454731',
  PRIMARY_MEDIUM: '#6B7160',
  PRIMARY_LIGHT: '#F2ECC8',
} as const;

// Configuración de la colección NFT
export const NFT_COLLECTION = {
  TOTAL_SUPPLY: 45,
  DEFAULT_FALLBACK_COUNT: 45,
  NAME: 'Power Grinders',
} as const;

// Tiempos de animación (en milisegundos)
export const ANIMATION_DURATIONS = {
  LOADING_SCREEN: 1500,
  LOADING_SCREEN_APPLY: 800,
  FORM_SUBMIT: 2000,
  REDIRECT_DELAY: 3000,
} as const;

// Breakpoints responsive (compatibles con Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Configuración de imágenes
export const IMAGE_CONFIG = {
  NFT_FULL_SIZE: { width: 1000, height: 1000 },
  NFT_THUMBNAIL: { width: 400, height: 400 },
  HERO_IMAGE: { width: 1920, height: 1080 },
} as const;

// URLs de redes sociales
export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/powergrinders',
  DISCORD: 'https://discord.gg/powergrinders',
  TELEGRAM: 'https://t.me/powergrinders',
} as const;

// Validación de formularios
export const FORM_VALIDATION = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 100,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 1000,
} as const;
