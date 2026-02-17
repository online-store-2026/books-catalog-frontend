import { useState } from 'react';

type Props = {
  images: string[];
};

export const ItemCardGallery: React.FC<Props> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse sm:flex-row items-start w-full gap-4">
      <div className="w-full sm:w-20 flex flex-wrap sm:flex-col gap-2 sm:gap-2 justify-center sm:justify-start">
        {images.map((src, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`w-20 h-20 flex items-center justify-center rounded-lg border shrink-0 transition-colors ${
              activeIndex === index ? 'border-foreground' : (
                'border-border hover:border-foreground'
              )
            }`}
          >
            <img
              src={src}
              alt={`thumb ${index}`}
              className="w-16 h-16 object-contain rounded-md pointer-events-none"
            />
          </button>
        ))}
      </div>

      <div className="w-full aspect-[4/5] sm:h-130 flex-1 min-w-0 flex items-center justify-center rounded-md overflow-hidden bg-muted/30">
        <img
          src={images[activeIndex]}
          alt={`image ${activeIndex}`}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};
