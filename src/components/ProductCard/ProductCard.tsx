import type { Book } from '@/types/Book';
import { Button } from '../ui/button';

interface Props {
  book: Book;
}

export const ProductCard = ({ book }: Props) => {
  const { name, author, priceRegular, priceDiscount, images } = book;

  const mainImage = images && images.length > 0 ? images[0] : '';
  const displayPrice = priceDiscount ? priceDiscount : priceRegular;
  const oldPrice = priceDiscount ? priceRegular : null;

  return (
    <div
      className="
      flex flex-col
      flex-shrink-0
      w-[214px]
      h-[400px]
      p-[20px]
      md:w-[272px]
      md:h-[506px]
      md:p-[32px]
      lg:w-[272px]
      lg:h-[506px]
      lg:p-[32px]
      rounded-xl
      border border-border
      gap-[16px]
      bg-card
      box-border
    "
    >
      <div
        className="
          relative
          w-[174px]
          h-[185px]
          lg:w-[208px]
          lg:h-[263px]
          flex-shrink-0
          overflow-hidden
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
        w-[174px]
        h-[103px]
        lg:w-[208px]
        lg:h-[107px]
        gap-[8px]
      "
      >
        <div className="flex flex-col w-[174px]">
          <div className="w-[174px] h-[24px] lg:w-[208px] lg:h-[45px] flex items-center">
            <h5 className="font-bold text-[16px] leading-[24px] text-foreground truncate">
              {name}
            </h5>
          </div>

          <div
            className="
      w-[87px]
      h-[21px]
      flex items-center
    "
          >
            <p className="text-[14px] leading-[21px] text-muted-foreground truncate">
              {author}
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full lg:h-[54px] gap-[2px]">
          <div className="flex flex-row items-baseline gap-2">
            <div className="flex items-center">
              <span className="font-manrope font-semibold text-[20px] lg:text-[22px] leading-[100%] text-foreground">
                ₴{displayPrice}
              </span>
            </div>
            {oldPrice !== null && (
              <div className="flex items-center">
                <span className="font-manrope font-semibold text-[16px] lg:text-[20px] leading-[100%] line-through text-muted-foreground">
                  ₴{oldPrice}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-row items-center gap-[4px] h-[21px]">
            <div className="w-[16px] h-[16px] flex items-center justify-center">
              <div className="w-[12px] h-[12px] rounded-full bg-[#27AE60]" />
            </div>
            <span className="font-bold text-[14px] leading-[21px] text-[#27AE60]">
              In stock
            </span>
          </div>
        </div>
      </div>
      <div
        className="
        flex flex-row
        w-[174px]
        lg:w-[208px]
        h-[40px]
        gap-[8px]
        mt-[16px]
      "
      >
        <Button
          variant="default"
          className="
      w-[126px]
      lg:w-[160px]
      h-[40px]
      rounded-[8px]
      text-[14px]
      font-bold
      bg-primary
      text-primary-foreground
    "
        >
          Add to cart
        </Button>

        <div className="w-[40px] h-[40px] flex items-center justify-center border border-border rounded-[8px]">
          {/* Іконка серця */}
        </div>
      </div>
    </div>
  );
};
