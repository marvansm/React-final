import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const NewsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <div>
      <div className="container mx-auto max-w-[1440px] mt-[140px] mb-[100px]">
        <div className=" mb-[50px]">
          <h1
            data-aos="fade-up"
            data-aos-duration="900"
            className="text-[40px] font-bold text-[#2d2d2d] pb-[15px]"
          >
            Latest News
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1300"
            className="text-[16px] text-[#666666]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            lectus cursus libero <br /> cursus. Venenatis aenean volutpat vitae
            sed porttitor venenatis.
          </p>
        </div>
        <Swiper
          data-aos="zoom-in"
          data-aos-duration="1300"
          slidesPerView={3}
          spaceBetween={70}
          modules={[Scrollbar]}
          className="mySwiper "
        >
          <SwiperSlide className="">
            <div className="box w-[480px] h-auto overflow-hidden group">
              <div className="img w-full h-[441px] overflow-hidden relative">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/articles/b16_580x.jpg?v=1713428255"
                  alt=""
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="body">
                <h2 className="font-bold text-[24px] text-[#1c1c1f] mt-[15px] flex items-center gap-3 hover:text-[#2D6FDE] duration-300 cursor-pointer">
                  Wireless Headphones <ArrowUpRight />
                </h2>
                <p className="text-[16px] text-[#5b5b5f] mt-[15px]">
                  Valentine’s Day 2021 has no choice but to unfold rather
                  differently than usual, so we alread...
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="box w-[480px] h-auto overflow-hidden  group">
              <div className="img w-full h-[441px] overflow-hidden relative">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/articles/b14_1080x.jpg?v=1713428223"
                  alt=""
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="body">
                <h2 className="font-bold text-[24px] text-[#1c1c1f] mt-[15px] flex items-center gap-3 hover:text-[#2D6FDE] duration-300 cursor-pointer">
                  Wireless earbuds
                  <ArrowUpRight />
                </h2>
                <p className="text-[16px] text-[#5b5b5f] mt-[15px]">
                  Valentine’s Day 2021 has no choice but to unfold rather
                  differently than usual, so we alread...
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="box w-[480px] h-auto overflow-hidden group">
              <div className="img w-full h-[441px] overflow-hidden relative">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/articles/b13_580x.jpg?v=1713428102"
                  alt=""
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="body">
                <h2 className="font-bold text-[24px] text-[#1c1c1f] mt-[15px] flex items-center gap-3 hover:text-[#2D6FDE] duration-300 cursor-pointer">
                  Wireless
                  <ArrowUpRight />
                </h2>
                <p className="text-[16px] text-[#5b5b5f] mt-[15px]">
                  Valentine’s Day 2021 has no choice but to unfold rather
                  differently than usual, so we alread...
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="box w-[480px] h-auto overflow-hidden group">
              <div className="img w-full h-[441px] overflow-hidden relative">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/articles/b15_580x.jpg?v=1713428029"
                  alt=""
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="body">
                <h2 className="font-bold text-[24px] text-[#1c1c1f] mt-[15px] flex items-center gap-3 hover:text-[#2D6FDE] duration-300 cursor-pointer">
                  Speakers
                  <ArrowUpRight />
                </h2>
                <p className="text-[16px] text-[#5b5b5f] mt-[15px]">
                  Valentine’s Day 2021 has no choice but to unfold rather
                  differently than usual, so we alread...
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="box w-[480px] h-auto overflow-hidden group">
              <div className="img w-full h-[441px] overflow-hidden relative">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/articles/b12_580x.jpg?v=1713427988"
                  alt=""
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="body">
                <h2 className="font-bold text-[24px] text-[#1c1c1f] mt-[15px] flex items-center gap-3 hover:text-[#2D6FDE] duration-300 cursor-pointer">
                  Earphones
                  <ArrowUpRight />
                </h2>
                <p className="text-[16px] text-[#5b5b5f] mt-[15px]">
                  Valentine’s Day 2021 has no choice but to unfold rather
                  differently than usual, so we alread...
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="box w-[480px] h-auto overflow-hidden group">
              <div className="img w-full h-[441px] overflow-hidden relative">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/articles/b11_580x.jpg?v=1713427967"
                  alt=""
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="body">
                <h2 className="font-bold text-[24px] text-[#1c1c1f] mt-[15px] flex items-center gap-3 hover:text-[#2D6FDE] duration-300 cursor-pointer">
                  Headphones
                  <ArrowUpRight />
                </h2>
                <p className="text-[16px] text-[#5b5b5f] mt-[15px]">
                  Valentine’s Day 2021 has no choice but to unfold rather
                  differently than usual, so we alread...
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewsSection;
