import { Button } from '../components/ui/button';

//--success: oklch(0.627 0.194 149.214);

//product.quantity > 0 ? 'In stock' : 'Out of stock'

export const ProductCard = () => {
  return (
    <div
      className="
      flex flex-col
      w-[214px]
      h-[400px]
      p-[20px]
      lg:w-[272px]
      lg:h-[506px]
      lg:p-[32px]
      rounded-xl
      border border-border
      gap-[16px]
      bg-card
      box-sizing-border-box 
    "
    >
      <div
        className="
        w-[174px]
        h-[185px]
        lg:w-[208px]
        lg:h-[263px]
        flex-shrink-0 
        bg-pink-200
      "
      >
        <img
          //src={defaultImage}
          alt="Обкладинка книги"
          className="
            absolute
            top-0 left-0
            w-full h-full
            object-cover
            px-[13.84px]
            py-0
          "
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
              Fahrenheit 451
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
              Ray Bradbury
            </p>
          </div>
        </div>

        <div
          className="
    flex flex-col
    w-[94px]
    h-[50px]
    lg:w-[108px]
    lg:h-[54px]
    gap-[2px]
  "
        >
          <div
            className="
    flex flex-row 
    items-baseline
    gap-[2.5px]
    lg:gap-[8px]
  "
          >
            <div
              className="
      w-[45px] 
      h-[27px] 
      lg:w-[49px]
      lg:h-[31px]
      flex items-center
    "
            >
              <span
                className="
        font-manrope 
        font-semibold 
        text-[20px] 
        lg:text-[22px] 
        leading-[100%] 
        tracking-[0%] 
        text-foreground
      "
              >
                ₴{541}
              </span>
            </div>

            <div
              className="
      w-[41px] 
      h-[22px] 
      lg:w-[51px]
      lg:h-[27px]
      flex items-center
    "
            >
              <span
                className="
        font-manrope 
        font-semibold 
        text-[16px] 
        lg:text-[20px] 
        leading-[100%] 
        tracking-[0%] 
        line-through
        text-muted-foreground
      "
              >
                ₴{600}
              </span>
            </div>
          </div>
          <div
            className="
  flex flex-row
  w-[80px]
  h-[21px]
  gap-[1px]
  items-center
"
          >
            <div
              className="
    w-[20px] 
    h-[20px] 
    flex-shrink-0 
    flex items-center 
    justify-center
  "
            >
              <div className="w-[12px] h-[12px] rounded-full bg-[#27AE60]" />
            </div>
            <span
              className="
    font-bold
    text-[14px]
    leading-[21px]
    tracking-normal
    text-[#27AE60]
  "
            >
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
        mt-auto
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
