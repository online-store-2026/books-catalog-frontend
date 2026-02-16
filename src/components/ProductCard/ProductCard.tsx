import { Button } from '../ui/button';
//import type { Product } from '../../types/Product';
import bookCover from '../../../public/img/book.image.png';
import './ProductCard.css';

export const ProductCard = () => {
  return (
    <div className="product-card rounded-xl border border-border bg-card">
      <div className="product-card-image">
        <img
          src={bookCover}
          alt="Book-cover"
          className="absolute top-0 left-0 w-full h-full object-cover px-[13.84px]"
        />
      </div>

      <div className="product-info">
        <div className="author-box">
          <div className="title-wrapper">
            <h5 className="font-bold text-[16px] leading-[24px] text-foreground truncate">
              Fahrenheit 451
            </h5>
          </div>
          <div className="author-wrapper">
            <p className="text-[14px] leading-[21px] text-muted-foreground truncate">
              Ray Bradbury
            </p>
          </div>
        </div>

        <div className="price-section">
          <div className="price-row">
            <div className="current-price-box">
              <span className="font-manrope font-semibold text-[20px] lg:text-[22px] leading-[100%] text-foreground">
                ₴541
              </span>
            </div>
            <div className="old-price-box">
              <span className="font-manrope font-semibold text-[16px] lg:text-[20px] leading-[100%] line-through text-muted-foreground">
                ₴600
              </span>
            </div>
          </div>

          <div className="flex flex-row w-[80px] h-[21px] gap-[1px] items-center">
            <div className="w-[20px] h-[20px] flex-shrink-0 flex items-center justify-center">
              <div className="w-[12px] h-[12px] rounded-full bg-[#27AE60]" />
            </div>
            <span className="font-bold text-[14px] leading-[21px] text-[#27AE60]">
              In stock
            </span>
          </div>
        </div>
      </div>

      <div className="actions-row">
        <Button
          variant="default"
          className="add-button rounded-[8px] text-[14px] font-bold text-white"
          style={{ backgroundColor: 'rgba(49, 50, 55, 1)' }}
        >
          Add to cart
        </Button>
        <div className="w-[40px] h-[40px] flex-shrink-0 flex items-center justify-center border border-border rounded-[8px]">
          {/* Серце */}
        </div>
      </div>
    </div>
  );
};
