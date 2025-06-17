import { CirclePlay } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import MotionImage from "../../../../Common/MotionImages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const BannerSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <div className="bg-[url(https://nov-one.myshopify.com/cdn/shop/files/s-9-bg_1920x.png?v=1713147206)] bg-cover bg-center bg-no-repeat h-[910px] flex items-center justify-center pt-10">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-full "
      >
        <SwiperSlide>
          <div className="container mx-auto max-w-[1440px]">
            <div data-aos="fade-out"
              data-aos-duration="1300" className="grid grid-cols-2  items-center justify-center">
              <div className="">
                <div className="">
                  <h2
                    data-aos="fade-right"
                    className="font-bold text-[72px] leading-[1.3] tracking-[0px] capitalize text-white mb-[40px]"
                  >
                    Buy Headphones <br />
                    And Style Them
                    <br />
                    Acttractively
                  </h2>
                  <p
                    data-aos="fade-left"
                    className="text-[16px] text-[#dadadf] mb-[40px]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elementum lectus cursus libero <br /> cursus. Venenatis
                    aenean volutpat vitae sed porttitor venenatis. In a diam
                    praesent tortora <br /> enim pellentesque dolor, gravida
                    cras. At tempus pretium.
                  </p>
                  <div data-aos="fade-left" className="flex items-center gap-9">
                    <button className="text-[18px] w-[290px] h-[78px] bg-[#2d6fde] hover:text-[#2d6fde] hover:bg-white duration-300 cursor-pointer text-white font-bold">
                      Buy Now! Discount 30%
                    </button>
                    <span className="flex items-center text-[#6f6f72] text-[16px] font-bold ml-[3px] hover:text-white cursor-pointer duration-300 gap-2">
                      Watch video <CirclePlay size={20} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-[739px] w-full">
                  <MotionImage
                    image={
                      "https://nov-one.myshopify.com/cdn/shop/files/s-9-img_375x.png?v=1713151818"
                    }
                    className={"w-full h-full object-contain"}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-2  items-center justify-center">
              <div className="">
                <div className="">
                  <h2
                    data-aos="fade-right"
                    className="font-bold text-[72px] leading-[1.3] tracking-[0px] capitalize text-white mb-[40px]"
                  >
                    Buy Headphones <br />
                    And Style Them
                    <br />
                    Acttractively
                  </h2>
                  <p
                    data-aos="fade-left"
                    className="text-[16px] text-[#dadadf] mb-[40px]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elementum lectus cursus libero <br /> cursus. Venenatis
                    aenean volutpat vitae sed porttitor venenatis. In a diam
                    praesent tortora <br /> enim pellentesque dolor, gravida
                    cras. At tempus pretium.
                  </p>
                  <div data-aos="fade-left" className="flex items-center gap-9">
                    <button className="text-[18px] w-[290px] h-[78px] bg-[#2d6fde] hover:text-[#2d6fde] hover:bg-white duration-300 cursor-pointer text-white font-bold">
                      Buy Now! Discount 30%
                    </button>
                    <span className="flex items-center text-[#6f6f72] text-[16px] font-bold ml-[3px] hover:text-white cursor-pointer duration-300 gap-2">
                      Watch video <CirclePlay size={20} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-[739.016px] w-full">
                  <MotionImage
                    image={
                      "https://nov-one.myshopify.com/cdn/shop/files/s-9-2-img_375x.png?v=1713498031"
                    }
                    className={"w-full h-full object-contain"}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSection;
