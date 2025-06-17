import { useQuery } from "@tanstack/react-query";
import { GetApiData } from "../../../../../Services/api";
import ProductCard from "../../../../Common/ProductCards";

const RecentlyProducts = () => {
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: () => GetApiData("products?populate=*"),
  });
  return (
    <div>
      <div className="py-[70px] border-b border-b-gray-300">
        <div className="container mx-auto max-w-[1440px]">
          <div className="grid grid-cols-3 ">
            <div className="flex items-center justify-center gap-4">
              <div className="bg-[#dbdada] w-[90px] h-[90px] rounded-full flex items-center justify-center">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/pn-1_200x.png?v=1704249869"
                  alt=""
                  className="w-[41px] h-[34px] object-contain"
                />
              </div>
              <div>
                <h1 className="text-[16px] font-semibold">FREE US DELIVERY</h1>
                <p className="text-[14px] text-[#5b5b5f] mt-[5px]">
                  Free shipping on all order above $200
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-[#dbdada] w-[90px] h-[90px] rounded-full flex items-center justify-center">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/pn-2_200x.png?v=1704249869"
                  alt=""
                  className="w-[41px] h-[34px] object-contain"
                />
              </div>
              <div>
                <h1 className="text-[16px] font-semibold">FREE US DELIVERY</h1>
                <p className="text-[14px] text-[#5b5b5f] mt-[5px]">
                  Free shipping on all order above $200
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-[#dbdada] w-[90px] h-[90px] rounded-full flex items-center justify-center">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/pn-3_200x.png?v=1704249869"
                  alt=""
                  className="w-[41px] h-[34px] object-contain"
                />
              </div>
              <div>
                <h1 className="text-[16px] font-semibold">FREE US DELIVERY</h1>
                <p className="text-[14px] text-[#5b5b5f] mt-[5px]">
                  Free shipping on all order above $200
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-[1440px] my-[75px]">
        <div className="flex items-center justify-center">
          <h1 className="font-extrabold text-[#222222] text-[26px]">
            Recently Viewed Products
          </h1>
        </div>
        <div className="grid grid-cols-4 mt-5.5">
          {data?.data?.slice(0,4).map((item: any, idx: number) => (
            <ProductCard
              key={idx}
              title={item?.title}
              oldprice={item?.oldprice}
              discountprice={item?.discountprice}
              hoverimg={item?.hoverimg.url}
              image={item?.image.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyProducts;
