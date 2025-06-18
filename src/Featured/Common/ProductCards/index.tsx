import {
  Heart,
  Images,
  Minus,
  Plus,
  ShoppingBag,
  Star,
  Trash,
  X,
} from "lucide-react";
import styles from "./style.module.scss";
import { clsx } from "clsx";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetApiData } from "../../../Services/api";
import { motion, AnimatePresence } from "framer-motion";
import { useCard } from "../../../Provider/AddToCart";
import { toast } from "sonner";

interface Card {
  title: string;
  image: string;
  hoverimg: string;
  oldprice: number;
  discountprice: number;
  color: string[];
  className: any;
  desc: string;
  addtocard: any;
}

const ProductCard: React.FC<Card> = ({
  title,
  image,
  hoverimg,
  oldprice,
  discountprice,
  color,
  className,
  desc,
  addtocard,
}) => {
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: () => GetApiData("products?populate=*"),
  });
  const [OpenBasketModal, SetOpenBasketModal] = useState(false);
  const [DetailData, SetDetailData] = useState<Card | null>(null);

  const GetDataOnClick = (product: any) => {
    SetDetailData(product);
  };

  console.log(DetailData);
  const BgColorsSetter = (name: any) => {
    switch (name) {
      case "black":
        return "bg-black";
      case "blue":
        return "bg-[#0000FF]";
      case "bluegrey":
        return "bg-gray-400";
      case "red":
        return "bg-red-500";
      case "green":
        return "bg-green-500";
      case "darkblue":
        return "bg-[#00008B]";
      case "gold":
        return "bg-[#FFD700]";
      case "gray":
        return "bg-[#808080]";
      case "greyred":
        return "bg-[#000000]";
      case "orange":
        return "bg-[#FFA500]";
      case "orangered":
        return "bg-[#FF4500]";
      case "skyblue":
        return "bg-[#4682B4]";
      case "yellow":
        return "bg-[#FFFF00]";
      case "yellowblue":
        return "bg-[#F1A40E]";
      default:
        break;
    }
  };
  const { Card, RemoveProduct, IncreaseProduct, TotalPrice, DeleteProduct } =
    useCard();
  return (
    <div>
      <div className="">
        <div className={clsx(styles.box, "box  p-[15px]")}>
          <div className={`boxContent ${className}  cursor-pointer `}>
            <div className="boximg relative">
              <img
                src={image}
                alt=""
                className={`w-full ${className} object-cover`}
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
                <div
                  onClick={() => {
                    GetDataOnClick({
                      title,
                      image,
                      hoverimg,
                      oldprice,
                      discountprice,
                      color,
                      className,
                      desc,
                      addtocard,
                    });
                  }}
                  className="w-[50px] h-[50px] flex items-center justify-center bg-[#5858d9]  hover:bg-[#515192] duration-300 text-white rounded-full"
                >
                  <Images size={23} />
                </div>
              </div>
              <div className={clsx(styles.hoverimg)}>
                <img
                  src={hoverimg}
                  alt=""
                  className={`w-full ${className} object-cover`}
                />
              </div>
            </div>
            <div className="boxbody pt-[23px]">
              <h2 className="text-[16px] font-semibold hover:text-[#0D53C9] duration-300">
                {title}
              </h2>
              <div className="price flex items-center gap-2">
                {discountprice && (
                  <h3 className="text-[24px] font-bold my-[13px]">
                    ${discountprice}
                  </h3>
                )}
                {oldprice && (
                  <h3 className="text-[#b7b7bb] text-[14px]">$ {oldprice}</h3>
                )}
              </div>
              <div>
                <p className="w-[600px]">{desc}</p>
              </div>
              <div className="price flex items-center gap-0.5">
                <Star size={15} strokeWidth={3} />
                <Star size={15} strokeWidth={3} />
                <Star size={15} strokeWidth={3} />
                <Star size={15} strokeWidth={3} />
                <Star size={15} strokeWidth={3} />
              </div>
              <ul className="flex items-center gap-1 mt-[25px]">
                {color &&
                  color.map((name: any, idx: number) => (
                    <li
                      key={idx}
                      className="border border-gray-300 rounded-full p-0.5"
                    >
                      <div
                        className={clsx(
                          "w-[26px] h-[26px] rounded-full",
                          BgColorsSetter(name?.name)
                        )}
                      ></div>
                    </li>
                  ))}
              </ul>
              <button
                onClick={() => {
                  SetOpenBasketModal(true);
                  addtocard();
                  toast.success("Your product added");
                }}
                className={clsx(
                  styles.btn,
                  "bg-[#5858d9] text-white h-[50px] mt-[17px]  justify-center w-full hover:bg-[#734baf] flex items-center gap-2.5 duration-300 cursor-pointer"
                )}
              >
                <ShoppingBag color="white" size={18} /> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {DetailData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#ffffff7f] backdrop-blur-[3px] z-[7777]"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg rounded-2xl w-[900px] h-[500px] absolute top-1/2 left-1/2 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 z-[9999] p-8"
          >
            <div className="grid grid-cols-12">
              <div className="col-span-6">
                <div className="w-full h-full">
                  <img
                    src={DetailData.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-span-6">
                <h1
                  className="text-[18px] font-bold text-[#1c1c1f
]"
                >
                  {DetailData.title}
                </h1>
                <div className="flex items-center mt-3">
                  <Star size={18} />
                  <Star size={18} />
                  <Star size={18} />
                  <Star size={18} />
                  <Star size={18} />
                </div>
                <h3 className="text-[24px] font-bold text-[#1c1c1f] mt-3">
                  {" "}
                  $ {DetailData.discountprice}
                </h3>
                <div className="mt-4">
                  <h3 className="text-[11px] font-bold uppercase">
                    Color: Orchid
                  </h3>
                  <ul className="flex items-center gap-1 mt-[25px]">
                    <li className="border border-gray-300 rounded-full p-0.5">
                      <div
                        className={clsx(
                          "w-[26px] h-[26px] rounded-full",
                          BgColorsSetter(DetailData?.color?.name)
                        )}
                      ></div>
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h2 className="text-[11px] font-bold uppercase mb-2">
                    Quantity:
                  </h2>
                  <div className="flex items-center gap-2">
                    <ul className="flex items-center justify-between gap-5  border border-gray-300 w-[140px] h-[50px] px-1">
                      <li className="hover:text-blue-500 cursor-pointer">
                        <Minus size={13} strokeWidth={1} />
                      </li>
                      <li>1</li>
                      <li className="hover:text-blue-500 cursor-pointer">
                        <Plus size={13} strokeWidth={1} />
                      </li>
                    </ul>
                    <button className="h-[50px] bg-[#EFEFEF] font-bold text-[#222]  text-[11px] w-full hover:bg-[#0D53C9] duration-300 hover:text-white  uppercase shadow-sm">
                      pre-order
                    </button>
                  </div>
                  <button className="h-[50px] mt-4 border border-gray-200 bg-[#fff] shadow-md font-bold text-[#222]  text-[11px]  hover:bg-[#0D53C9] duration-300 hover:text-white  uppercase w-full">
                    Buy it now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      <AnimatePresence>
        {OpenBasketModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#ffffff7f] backdrop-blur-[3px] z-[7777]"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-lg rounded-2xl w-[1100px] h-[700px] absolute top-1/2 left-1/2 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 z-[9999] p-8"
            >
              <div className="flex items-center justify-between">
                <ul className="flex items-center gap-8 uppercase">
                  <li className="text-[18px] font-extrabold">Your order</li>
                  <li className="text-[11px] font-bold">
                    There are 7 item(s) in your cart
                  </li>
                </ul>
                <div
                  onClick={() => {
                    SetOpenBasketModal(false);
                  }}
                  className="shadow-lg w-[40px] h-[40px] rounded-full hover:bg-blue-600 hover:text-white duration-300 flex items-center justify-center"
                >
                  <X size={20} />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="col-span-8  ">
                  <div className="flex flex-col gap-4 h-[300px] overflow-y-scroll ">
                    {Card &&
                      Card.map((item: any, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between border border-gray-200 rounded-[6px] p-2.5 relative"
                        >
                          <div className="flex items-start gap-1.5">
                            <div
                              onClick={() => {
                                DeleteProduct(item);
                              }}
                              className="absolute -bottom-3 transform -translate-x-1/2 left-1/2 w-[25px] h-[25px] flex items-center justify-center bg-[#e4e4e4] rounded-full text-gray-500 p-1 hover:bg-blue-500 hover:text-white duration-300 cursor-pointer"
                            >
                              <Trash size={15} />
                            </div>
                            <div>
                              <img
                                src={item?.image.url}
                                alt=""
                                className="w-[110px] h-[110px] object-cover"
                              />
                            </div>
                            <div className="body mt-3">
                              <h2 className="text-[12px] font-bold hover:text-blue-500 duration-300 w-[120px]">
                                {item?.title}
                              </h2>
                              <h3 className="text-[10px] font-semibold">
                                Orange / 38mm{" "}
                              </h3>
                            </div>
                          </div>
                          <div className="flex items-center gap-8">
                            <div className="price ">
                              <h3 className="text-[13px] font-extrabold">
                                ${item?.discountprice}
                              </h3>
                            </div>
                            <ul className="flex items-center gap-5 ">
                              <li
                                onClick={() => {
                                  RemoveProduct(item.id);
                                }}
                                className="hover:text-blue-500 cursor-pointer"
                              >
                                <Minus size={13} strokeWidth={1} />
                              </li>
                              <li>{item?.quantity}</li>
                              <li
                                onClick={() => {
                                  IncreaseProduct(item.id);
                                }}
                                className="hover:text-blue-500 cursor-pointer"
                              >
                                <Plus size={13} strokeWidth={1} />
                              </li>
                            </ul>
                            <div className="price ">
                              <h3 className="text-[16px] font-extrabold">
                                $
                                {(item.discountprice * item.quantity).toFixed(
                                  2
                                )}
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="text-[12px] font-bold text-[#5b5b5f] flex items-center gap-2">
                    {" "}
                    Congratulations! You've got free shipping!
                    <img
                      src="https://nov-one.myshopify.com/cdn/shop/files/pn-1_200x.png?v=1704249869"
                      alt=""
                      className="w-[21px] h-[24px] object-contain"
                    />
                  </div>
                </div>
                <div className="col-span-4">
                  <div>
                    <ul className="flex items-center justify-between pb-2.5">
                      <li className="text-[12px] font-extrabold uppercase">
                        Total:
                      </li>
                      <li className="text-[16px] font-extrabold uppercase">
                        ${TotalPrice()}
                      </li>
                    </ul>
                    <div className="flex items-center flex-col gap-2.5 mt-[20px] ">
                      <button className="h-[50px] font-bold text-[#222] border border-gray-300 text-[11px] w-full rounded-full hover:bg-[#0D53C9] hover:text-white duration-300 uppercase shadow-sm">
                        View Cart
                      </button>
                      <button className="h-[50px] font-bold text-[#222] border border-gray-300 text-[11px] w-full hover:bg-[#0D53C9] duration-300 hover:text-white rounded-full uppercase shadow-sm">
                        Continue shopping
                      </button>

                      <div className="flex items-center gap-2 mt-">
                        <input type="checkbox" name="terms" />
                        <label htmlFor="terms">
                          I agree with the{" "}
                          <span className="font-bold">Terms & conditions</span>
                        </label>
                      </div>
                      <button className="h-[50px] mt-3 font-bold bg-[#222] text-white border border-gray-300 text-[11px] w-full hover:bg-[#0D53C9] duration-300 hover:text-white rounded-full uppercase shadow-sm">
                        Proceed to checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h2 className="text-[14px] font-bold">
                  You may also like these products
                </h2>

                <div className="grid grid-cols-5 gap-4 mt-5">
                  {data?.data?.map((item: any, idx: number) => (
                    <ProductCard
                      key={idx}
                      hoverimg={item?.hoverimg.url}
                      image={item?.image.url}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductCard;
