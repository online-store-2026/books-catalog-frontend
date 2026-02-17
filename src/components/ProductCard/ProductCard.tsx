import { useState } from 'react';
import type { Book } from '@/types/Book';
import { Button } from '../ui/button';
import { Icon } from '../ui/icons';

interface Props {
  book: Book;
}

export const ProductCard = ({ book }: Props) => {
  const { name, author, priceRegular, priceDiscount, images } = book;

  const mainImage = images && images.length > 0 ? images[0] : '';
  const displayPrice = priceDiscount ? priceDiscount : priceRegular;
  const oldPrice = priceDiscount ? priceRegular : null;

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className="
    relative
    flex flex-col
    gap-[16px]
    flex-shrink-0
    w-[214px] h-[400px] p-[20px]
    min-[640px]:w-[272px] min-[640px]:h-[506px] min-[640px]:p-[32px]
    rounded-xl border border-border bg-card box-border
  "
    >
      <div
        className="
      absolute 
      top-[32px] 
      right-[24px] 
      w-[40px] 
      h-[40px] 
      flex items-center justify-center 
      bg-primary
      rounded-full 
      z-10
    "
      >
        <Icon
          name="headphones"
          className="text-white"
          style={{ width: '24px', height: '24px' }}
        />
      </div>

      <div
        className="
      relative flex-shrink-0 overflow-hidden flex items-center justify-center
      w-[174px] h-[185px]
      min-[640px]:w-[208px] min-[640px]:h-[263px]
    "
      >
        <img
          src={mainImage}
          alt="Book-cover"
          className="w-full h-full object-contain"
        />
      </div>

      <div
        className="
      flex flex-col
      w-[174px] h-[103px]
      min-[640px]:w-[208px] min-[640px]:h-[107px]
      gap-[8px]
    "
      >
        <div className="flex flex-col w-full h-[45px]">
          <div className="w-full h-[24px] min-[640px]:h-[45px] flex items-center">
            <h5 className="font-bold text-[16px] leading-[24px] text-foreground truncate m-0">
              {name}
            </h5>
          </div>

          <div className="w-full h-[21px] flex items-center">
            <p className="text-[14px] leading-[21px] text-muted-foreground truncate m-0">
              {author}
            </p>
          </div>
        </div>

        <div
          className="
        flex flex-col gap-[2px]
        w-[94px] h-[50px]
        min-[640px]:w-[108px] min-[640px]:h-[54px]
      "
        >
          <div className="flex flex-row items-baseline gap-[2.5px] min-[640px]:gap-[8px]">
            <span className="font-manrope font-semibold text-[20px] min-[640px]:text-[22px] leading-none text-foreground">
              ₴{displayPrice}
            </span>
            {oldPrice && (
              <span className="font-manrope font-semibold text-[16px] min-[640px]:text-[20px] leading-none line-through text-muted-foreground">
                ₴{oldPrice}
              </span>
            )}
          </div>
          <div className="flex flex-row items-center gap-[4px] h-[21px]">
            <Icon
              name="truck"
              className="text-[#27AE60]"
              style={{ width: '16px', height: '16px' }}
            />
            <span className="font-bold text-[14px] leading-[21px] text-[#27AE60]">
              In stock
            </span>
          </div>
        </div>
      </div>

      <div
        className="
      mt-auto flex flex-row gap-[8px]
      w-[174px] h-[40px]
      min-[640px]:w-[208px]
    "
      >
        <Button
          className="
        bg-foreground text-white font-bold rounded-[8px]
        w-[126px] h-[40px]
        min-[640px]:w-[160px]
      "
        >
          Add to cart
        </Button>

        <div
          onClick={toggleFavorite}
          className="w-[40px] h-[40px] flex items-center justify-center border border-border rounded-[8px] cursor-pointer flex-shrink-0"
        >
          <Icon
            name="heart"
            size="md"
            state={isFavorite ? 'selected' : 'default'}
          />
        </div>
      </div>
    </div>
  );
};
