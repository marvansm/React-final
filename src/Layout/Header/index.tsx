import { useQuery } from "@tanstack/react-query";
import {
  ChevronDown,
  Heart,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  ShoppingCart,
  Trash,
  User2,
  X,
} from "lucide-react";
import { GetApiData } from "../../Services/api";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCard } from "../../Provider/AddToCart";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { Card, RemoveProduct, IncreaseProduct, TotalPrice, DeleteProduct } =
    useCard();
  const navigate = useNavigate();
  const [OpenBasket, SetOpenBasket] = useState(false);
  const [OpenLogin, SetOpenLogin] = useState(false);
  const { data } = useQuery({
    queryKey: ["navbar"],
    queryFn: () => GetApiData("navbars"),
  });
  return (
    <div>
      {isHome ? (
        <div className="bg-[#1C1C1E]">
          <div className="container mx-auto px-[20px] py-[21px]">
            <div className="nav flex items-center justify-between">
              <div className="left flex items-center  ">
                <div
                  onClick={() => {
                    navigate("/");
                  }}
                  className="w-[127px] cursor-pointer"
                >
                  <img
                    src="https://nov-one.myshopify.com/cdn/shop/files/logo_5.png?v=1713147219&width=50x"
                    alt=""
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
                <div className="menu">
                  <ul className="flex items-center gap-[50px] text-[#6f6f72] capitalize text-[16px] font-semibold">
                    {data?.data?.map((item: any, idx: number) => (
                      <li
                        key={idx}
                        className="group relative flex items-center gap-1.5 hover:text-white duration-300 cursor-pointer"
                      >
                        {item?.name}
                        {item.subitems?.length > 0 && (
                          <ChevronDown size={15} strokeWidth={4} />
                        )}

                        {item.subitems?.length > 0 && (
                          <div className="absolute left-0 top-10 mt-1 bg-white shadow-lg w-[100%] rounded-md min-w-[200px] z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <ul className="flex flex-col text-black text-[14px] font-normal py-2">
                              {item.subitems.map(
                                (subitem: any, idx: number) => (
                                  <li
                                    onClick={() => {
                                      navigate(subitem?.path);
                                    }}
                                    key={idx}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                  >
                                    {subitem?.name}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="right">
                <ul className="flex items-center gap-[40px] text-[#6f6f72] capitalize text-[16px] font-semibold">
                  <li className="flex items-center gap-1.5 hover:text-white duration-300 cursor-pointer">
                    <Search size={20} /> Search
                  </li>
                  <li
                    onClick={() => {
                      SetOpenLogin(true);
                    }}
                    className="flex items-center gap-1.5 hover:text-white duration-300 cursor-pointer"
                  >
                    <User2 size={20} /> Account
                  </li>
                  <li className="flex items-center gap-1.5 hover:text-white duration-300 cursor-pointer">
                    <Heart size={20} /> Wishlist
                    <span className="bg-[#2D6FDE] w-[18px] h-[18px] text-[13px] flex items-center justify-center text-white font-normal rounded-full">
                      0
                    </span>
                  </li>
                  <li
                    onClick={() => {
                      SetOpenBasket(true);
                    }}
                    className="flex items-center gap-1.5 hover:text-white duration-300 cursor-pointer"
                  >
                    <ShoppingBag size={20} /> Cart
                    <span className="bg-[#2D6FDE] w-[18px] h-[18px] text-[13px] flex items-center justify-center text-white font-normal rounded-full">
                      {Card.length > 0 ? Card.length : 0}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {OpenBasket && (
              <div className="fixed inset-0 bg-[#ffffff4f] backdrop-blur-[4px] w-full h-full z-[999]">
                <motion.div
                  initial={{ opacity: 0, x: 500 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 500 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-[380px] h-full right-0 bg-white z-[9999]"
                >
                  <div className="mt-5 border-b border-b-gray-300 pb-3 px-2.5">
                    <ul className="flex items-center justify-between">
                      <li className="flex items-center gap-1.5 text-[14px] font-extrabold uppercase">
                        <ShoppingCart size={20} /> Cart
                      </li>
                      <li onClick={() => SetOpenBasket(false)}>
                        <X />
                      </li>
                    </ul>
                  </div>
                  <div className="mt-[25px] flex flex-col gap-5 shadow-xl h-[600px] overflow-y-scroll">
                    {Card &&
                      Card.map((item: any, idx: number) => (
                        <div key={idx} className="box flex items-start gap-4">
                          <div className="boxImg">
                            <img
                              src={item?.image.url}
                              alt=""
                              className="w-[110px] h-[110px] object-cover "
                            />
                          </div>
                          <div className="boxbody">
                            <h2 className="text-[12px] font-bold text-[#1c1c1f] mb-[8px]">
                              {item?.title}
                            </h2>
                            <h3 className="text-[10px] font-semibold text-[#5b5b5f] mb-[8px]">
                              Apple /42mm
                            </h3>
                            <h4 className="text-[12px] font-extrabold text-[#1c1c1f] mb-[8px]">
                              $ {item?.discountprice}
                            </h4>
                            <div className="flex items-center gap-5">
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
                              <div
                                onClick={() => {
                                  DeleteProduct(item);
                                }}
                                className="w-[25px] h-[25px] flex items-center justify-center bg-[#e4e4e4] rounded-full p-1 hover:bg-blue-500 hover:text-white duration-300 cursor-pointer"
                              >
                                <Trash size={12} />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="px-2.5 mt-[30px]">
                    <ul className="flex items-center justify-between border-b border-b-gray-300 pb-2.5">
                      <li className="text-[12px] font-extrabold uppercase">
                        Total:
                      </li>
                      <li className="text-[16px] font-extrabold uppercase">
                        $ {TotalPrice()}
                      </li>
                    </ul>
                    <div className="flex items-center flex-col gap-2.5 mt-[20px] ">
                      <button className="h-[50px] font-bold text-[#222] border border-gray-300 text-[11px] w-full rounded-full hover:bg-[#0D53C9] hover:text-white duration-300 uppercase shadow-sm">
                        View Cart
                      </button>
                      <button className="h-[50px] font-bold text-[#222] border border-gray-300 text-[11px] w-full hover:bg-[#0D53C9] duration-300 hover:text-white rounded-full uppercase shadow-sm">
                        Check out
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
             <AnimatePresence>
            {OpenLogin && (
              <div className="fixed inset-0 bg-[#ffffff4f] backdrop-blur-[4px] w-full h-full z-[999]">
                <motion.div
                  initial={{ opacity: 0, x: 500 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 500 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-[380px] h-full right-0 bg-white z-[9999]"
                >
                  <div
                    onClick={() => {
                      SetOpenLogin(false);
                    }}
                    className="mt-5  pb-3 px-2.5"
                  >
                    <X />
                  </div>
                  <div className="border-b border-b-gray-200 pb-9 px-4.5 mt-10">
                    <ul className="flex flex-col gap-[45px] text-[18px] text-[#222222]">
                      <li
                        onClick={() => {
                          navigate("/login");
                          SetOpenLogin(false);
                        }}
                        className="hover:text-blue-500 duration-300 cursor-pointer"
                      >
                        Login
                      </li>
                      <li className="hover:text-blue-500 duration-300 cursor-pointer">
                        Register
                      </li>
                      <li className="hover:text-blue-500 duration-300 cursor-pointer">
                        Wishlist
                      </li>
                      <li className="hover:text-blue-500 duration-300 cursor-pointer">
                        Check out
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className="bg-[#ffff]">
          <div className="container mx-auto px-[20px] py-[21px]">
            <div className="nav flex items-center justify-between">
              <div className="left flex items-center  ">
                <div
                  onClick={() => {
                    navigate("/");
                  }}
                  className="w-[127px] cursor-pointer"
                >
                  <img
                    src="https://nov-one.myshopify.com/cdn/shop/files/logo_5.png?v=1713147219&width=50x"
                    alt=""
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
                <div className="menu">
                  <ul className="flex items-center gap-[50px] text-[#000] capitalize text-[16px] font-semibold">
                    {data?.data?.map((item: any, idx: number) => (
                      <li
                        key={idx}
                        className="group relative flex items-center gap-1.5 hover:text-black duration-300 cursor-pointer"
                      >
                        {item?.name}
                        {item.subitems?.length > 0 && (
                          <ChevronDown size={15} strokeWidth={4} />
                        )}

                        {item.subitems?.length > 0 && (
                          <div className="absolute left-0 top-10 mt-1 bg-white shadow-lg w-[100%] rounded-md min-w-[200px] z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <ul className="flex flex-col text-black text-[14px] font-normal py-2">
                              {item.subitems.map(
                                (subitem: any, idx: number) => (
                                  <li
                                    onClick={() => {
                                      navigate(subitem?.path);
                                    }}
                                    key={idx}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                  >
                                    {subitem?.name}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="right">
                <ul className="flex items-center gap-[40px] text-[#black] capitalize text-[16px] font-semibold">
                  <li className="flex items-center gap-1.5 hover:text-black duration-300 cursor-pointer">
                    <Search size={20} /> Search
                  </li>
                  <li
                    onClick={() => {
                      SetOpenLogin(true);
                    }}
                    className="flex items-center gap-1.5 hover:text-black duration-300 cursor-pointer"
                  >
                    <User2 size={20} /> Account
                  </li>
                  <li className="flex items-center gap-1.5 hover:text-black duration-300 cursor-pointer">
                    <Heart size={20} /> Wishlist
                    <span className="bg-[#2D6FDE] w-[18px] h-[18px] text-[13px] flex items-center justify-center text-white font-normal rounded-full">
                      0
                    </span>
                  </li>
                  <li
                    onClick={() => {
                      SetOpenBasket(true);
                    }}
                    className="flex items-center gap-1.5 hover:text-black duration-300 cursor-pointer"
                  >
                    <ShoppingBag size={20} /> Cart
                    <span className="bg-[#2D6FDE] w-[18px] h-[18px] text-[13px] flex items-center justify-center text-white font-normal rounded-full">
                      {Card.length > 0 ? Card.length : 0}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {OpenBasket && (
              <div className="fixed inset-0 bg-[#ffffff4f] backdrop-blur-[4px] w-full h-full z-[999]">
                <motion.div
                  initial={{ opacity: 0, x: 500 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 500 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-[380px] h-full right-0 bg-white z-[9999]"
                >
                  <div className="mt-5 border-b border-b-gray-300 pb-3 px-2.5">
                    <ul className="flex items-center justify-between">
                      <li className="flex items-center gap-1.5 text-[14px] font-extrabold uppercase">
                        <ShoppingCart size={20} /> Cart
                      </li>
                      <li onClick={() => SetOpenBasket(false)}>
                        <X />
                      </li>
                    </ul>
                  </div>
                  <div className="mt-[25px] flex flex-col gap-5 shadow-xl h-[600px] overflow-y-scroll">
                    {Card &&
                      Card.map((item: any, idx: number) => (
                        <div key={idx} className="box flex items-start gap-4">
                          <div className="boxImg">
                            <img
                              src={item?.image.url}
                              alt=""
                              className="w-[110px] h-[110px] object-cover "
                            />
                          </div>
                          <div className="boxbody">
                            <h2 className="text-[12px] font-bold text-[#1c1c1f] mb-[8px]">
                              {item?.title}
                            </h2>
                            <h3 className="text-[10px] font-semibold text-[#5b5b5f] mb-[8px]">
                              Apple /42mm
                            </h3>
                            <h4 className="text-[12px] font-extrabold text-[#1c1c1f] mb-[8px]">
                              $ {item?.discountprice}
                            </h4>
                            <div className="flex items-center gap-5">
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
                              <div
                                onClick={() => {
                                  DeleteProduct(item);
                                }}
                                className="w-[25px] h-[25px] flex items-center justify-center bg-[#e4e4e4] rounded-full p-1 hover:bg-blue-500 hover:text-white duration-300 cursor-pointer"
                              >
                                <Trash size={12} />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="px-2.5 mt-[30px]">
                    <ul className="flex items-center justify-between border-b border-b-gray-300 pb-2.5">
                      <li className="text-[12px] font-extrabold uppercase">
                        Total:
                      </li>
                      <li className="text-[16px] font-extrabold uppercase">
                        $ {TotalPrice()}
                      </li>
                    </ul>
                    <div className="flex items-center flex-col gap-2.5 mt-[20px] ">
                      <button className="h-[50px] font-bold text-[#222] border border-gray-300 text-[11px] w-full rounded-full hover:bg-[#0D53C9] hover:text-white duration-300 uppercase shadow-sm">
                        View Cart
                      </button>
                      <button className="h-[50px] font-bold text-[#222] border border-gray-300 text-[11px] w-full hover:bg-[#0D53C9] duration-300 hover:text-white rounded-full uppercase shadow-sm">
                        Check out
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {OpenLogin && (
              <div className="fixed inset-0 bg-[#ffffff4f] backdrop-blur-[4px] w-full h-full z-[999]">
                <motion.div
                  initial={{ opacity: 0, x: 500 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 500 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-[380px] h-full right-0 bg-white z-[9999]"
                >
                  <div
                    onClick={() => {
                      SetOpenLogin(false);
                    }}
                    className="mt-5  pb-3 px-2.5"
                  >
                    <X />
                  </div>
                  <div className="border-b border-b-gray-200 pb-9 px-4.5 mt-10">
                    <ul className="flex flex-col gap-[45px] text-[18px] text-[#222222]">
                      <li
                        onClick={() => {
                          navigate("/login");
                          SetOpenLogin(false);
                        }}
                        className="hover:text-blue-500 duration-300 cursor-pointer"
                      >
                        Login
                      </li>
                      <li className="hover:text-blue-500 duration-300 cursor-pointer">
                        Register
                      </li>
                      <li className="hover:text-blue-500 duration-300 cursor-pointer">
                        Wishlist
                      </li>
                      <li className="hover:text-blue-500 duration-300 cursor-pointer">
                        Check out
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Header;
