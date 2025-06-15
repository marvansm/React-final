import { Heart, Images, ShoppingBag, Star } from "lucide-react";
import styles from "./style.module.scss";
import { clsx } from "clsx";

interface Card {
  title: string;
  image: string;
  hoverimg: string;
  discount: string;
  oldprice: number;
  discountprice: number;
  color: any;
}

const ProductCard: React.FC<Card> = ({
  title,
  image,
  hoverimg,
  discount,
  oldprice,
  discountprice,
  color,
}) => {
  return (
    <div>
      <div className="">
        <div className={clsx(styles.box, "box  p-[15px]")}>
          <div className="boxContent  cursor-pointer ">
            <div className="boximg relative">
              <img
                src={image}
                alt=""
                className="w-full h-[330px] object-cover"
              />
              <div
                className={clsx(
                  styles.icon,
                  "absolute flex items-center gap-3.5 bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2"
                )}
              >
                <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#5858d9] hover:bg-[#515192] duration-300 text-white rounded-full">
                  <Heart size={23} />
                </div>
                <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#5858d9]  hover:bg-[#515192] duration-300 text-white rounded-full">
                  <Images size={23} />
                </div>
              </div>
              <div className={clsx(styles.hoverimg)}>
                <img
                  src={hoverimg}
                  alt=""
                  className="w-full h-[330px] object-cover"
                />
              </div>
              <div className="absolute top-[15px] left-[15px]">
                {discount && (
                  <button className="bg-[#db0000] h-[22px] px-[8px] text-white font-normal text-[12px] rounded-[100px] flex items-center justify-center">
                    {discount}
                  </button>
                )}
              </div>
            </div>
            <div className="boxbody pt-[23px]">
              <h2 className="text-[16px] font-semibold">{title}</h2>
              <div className="price flex items-center gap-2">
                <h3 className="text-[24px] font-bold my-[13px]">
                  ${discountprice}
                </h3>
                {oldprice && (
                  <h3 className="text-[#b7b7bb] text-[14px]">$ {oldprice}</h3>
                )}
              </div>
              <div className="price flex items-center gap-0.5">
                <Star size={15} strokeWidth={3} />
                <Star size={15} strokeWidth={3} />
                <Star size={15} strokeWidth={3} />
                <Star size={15} strokeWidth={3} />
                <Star size={15} strokeWidth={3} />
              </div>
              <ul className="flex items-center gap-1 mt-[25px]">
                <li className="border border-gray-300 rounded-full p-0.5">
                  <div className="w-[26px] h-[26px] bg-gray-600 rounded-full"></div>
                </li>
                <li className="border  rounded-full border-gray-300  hover:p-0.5">
                  <div className="w-[26px] h-[26px] bg-black rounded-full "></div>
                </li>
              </ul>
              <button
                className={clsx(
                  styles.btn,
                  "bg-[#5858d9] text-white h-[50px] mt-[17px]  justify-center w-full hover:bg-[#734baf] flex items-center gap-2.5 duration-300 cursor-pointer"
                )}
              >
                <ShoppingBag color="white" size={18} /> Quick Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
