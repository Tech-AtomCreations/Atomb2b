'use client';

interface ClientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export default function ClientImage({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = '/d40778b465d9694b0254aa11cf3949f80782e3b6.jpg' 
}: ClientImageProps) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('Image failed to load:', src);
    e.currentTarget.src = fallbackSrc;
  };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}