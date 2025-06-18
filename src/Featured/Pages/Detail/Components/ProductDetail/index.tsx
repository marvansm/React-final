import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { GetApiData } from "../../../../../Services/api";
import { Minus, Plus, Star } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => GetApiData(`products?populate=*&filters[id][$eq]=${id}`),
  });

  const item = data?.data?.[0];
  return (
    <div className="container mx-auto max-w-[1440px] my-[100px]">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-6">
          <div className="w-full h-full">
            <div className="border border-gray-200">
              <img
                src={item?.image.url}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <ul className="mt-4 flex items-center gap-2.5 justify-between">
              <li className="w-[150px] h-[150px] border border-gray-200">
                <img src={item?.image.url} alt="" />
              </li>
              <li className="w-[150px] h-[150px] border border-gray-200">
                <img src={item?.image.url} alt="" />
              </li>
              <li className="w-[150px] h-[150px] border border-gray-200">
                <img src={item?.image.url} alt="" />
              </li>
              <li className="w-[150px] h-[150px] border border-gray-200">
                <img src={item?.image.url} alt="" />
              </li>
              <li className="w-[150px] h-[150px] border border-gray-200">
                <img src={item?.image.url} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-6">
          <h1
            className="text-[18px] font-bold text-[#1c1c1f
]"
          >
            {item.title}
          </h1>
          <div className="flex items-center mt-3">
            <Star size={18} />
            <Star size={18} />
            <Star size={18} />
            <Star size={18} />
            <Star size={18} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            ipsum amet quas nisi fugiat nulla neque iure, obcaecati illum
            impedit!
          </p>
          <h3 className="text-[24px] font-bold text-[#1c1c1f] mt-3">
            {" "}
            $ {item.discountprice}
          </h3>

          <div className="mt-4">
            <h2 className="text-[11px] font-bold uppercase mb-2">Quantity:</h2>
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
    </div>
  );
};

export default ProductDetail;
