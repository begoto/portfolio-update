import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fetchPriority?: 'high' | 'low' | 'auto';
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  /** Responsive sizes for srcSet (e.g., [(400, 'w400'), (800, 'w800'), (1400, 'w1400')])  */
  sizes?: string;
}

/**
 * OptimizedImage Component
 * Automatically generates responsive srcSet with WebP support and lazy loading.
 * 
 * @example
 * <OptimizedImage 
 *   src="/assets/images/profil.jpg" 
 *   alt="Profile"
 *   width={384}
 *   height={384}
 *   fetchPriority="high"
 *   loading="eager"
 * />
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  fetchPriority = 'auto',
  loading = 'lazy',
  decoding = 'async',
  sizes = '100vw',
  ...props
}: OptimizedImageProps) {
  // Extract base name without extension
  const baseName = src.substring(0, src.lastIndexOf('.'));
  const extension = src.substring(src.lastIndexOf('.'));

  // Generate WebP variants for responsive srcSet
  // Default breakpoints: 400w, 800w, 1400w (covers all device sizes)
  const webpSrcSet = `
    ${baseName}.w400.webp 400w,
    ${baseName}.w800.webp 800w,
    ${baseName}.w1400.webp 1400w
  `.trim().replace(/\n\s+/g, ' ');

  // Fallback JPEG variants
  const jpegSrcSet = `
    ${baseName}.w400.jpg 400w,
    ${baseName}.w800.jpg 800w,
    ${baseName}.w1400.jpg 1400w
  `.trim().replace(/\n\s+/g, ' ');

  return (
    <picture>
      {/* WebP format for modern browsers */}
      <source
        srcSet={webpSrcSet}
        sizes={sizes}
        type="image/webp"
      />
      {/* JPEG fallback for older browsers */}
      <source
        srcSet={jpegSrcSet}
        sizes={sizes}
        type="image/jpeg"
      />
      {/* IMG element with fallback */}
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        fetchPriority={fetchPriority}
        loading={loading}
        decoding={decoding}
        {...props}
      />
    </picture>
  );
}
