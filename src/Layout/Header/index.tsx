import { useQuery } from "@tanstack/react-query";
import { ChevronDown, Heart, Search, ShoppingBag, User2 } from "lucide-react";
import { GetApiData } from "../../Services/api";

const Header = () => {
  const { data } = useQuery({
    queryKey: ["navbar"],
    queryFn: () => GetApiData("navbars"),
  });
  return (
    <div className="bg-[#1C1C1E]">
      <div className="container mx-auto px-[20px] py-[21px]">
        <div className="nav flex items-center justify-between">
          <div className="left flex items-center ">
            <div className="w-[127px] ">
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
                          {item.subitems.map((subitem: any, idx: number) => (
                            <li
                              key={idx}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              {subitem?.name}
                            </li>
                          ))}
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
              <li className="flex items-center gap-1.5 hover:text-white duration-300 cursor-pointer">
                <User2 size={20} /> Account
              </li>
              <li className="flex items-center gap-1.5 hover:text-white duration-300 cursor-pointer">
                <Heart size={20} /> Wishlist
                <span className="bg-[#2D6FDE] w-[18px] h-[18px] text-[13px] flex items-center justify-center text-white font-normal rounded-full">
                  0
                </span>
              </li>
              <li className="flex items-center gap-1.5 hover:text-white duration-300 cursor-pointer">
                <ShoppingBag size={20} /> Cart
                <span className="bg-[#2D6FDE] w-[18px] h-[18px] text-[13px] flex items-center justify-center text-white font-normal rounded-full">
                  0
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
