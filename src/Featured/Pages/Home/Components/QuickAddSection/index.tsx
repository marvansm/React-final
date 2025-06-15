import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../../../Common/ProductCards";
import { GetApiData } from "../../../../../Services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const QuickAddSection = () => {
  const { data } = useQuery({
    queryKey: ["Product"],
    queryFn: () => GetApiData("products?populate=*"),
  });
  return (
    <div>
      <div className="container mx-auto max-w-[1440px] mt-[140px] mb-[100px]">
        <div className=" mb-[50px]">
          <h1 className="text-[40px] font-bold text-[#2d2d2d] pb-[15px]">
            You May Also Like
          </h1>
          <p className="text-[16px] text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            lectus cursus libero <br /> cursus. Venenatis aenean volutpat vitae
            sed porttitor venenatis.
          </p>
        </div>
        <Swiper
          scrollbar={{
            hide: true,
            draggable: true,
          }}
          slidesPerView={4}
         
          modules={[Scrollbar]}
          className="mySwiper my-6 items-stretch"
        >
          {data?.data?.map((item: any, idx: number) => (
            <SwiperSlide className="pt-[20px] pb-[120px]">
              <ProductCard
                key={idx}
                title={item?.title}
                oldprice={item?.oldprice}
                discountprice={item?.discountprice}
                hoverimg={item?.hoverimg.url}
                image={item?.image.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default QuickAddSection;
