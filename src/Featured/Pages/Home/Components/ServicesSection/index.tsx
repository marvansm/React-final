import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import CountUp from "react-countup";

const ServicesSection = () => {
  return (
    <div>
      <div className="container mx-auto max-w-[1440px]">
        <div className="mt-[140px]">
          <h1 className="text-[#222222] text-[40px] tracking-[0px] leading-[1.5] font-bold pb-[20px]">
            Why buy direct form <span className="text-[#266ff6]">One</span> ?
          </h1>
          <p className="text-[16px] text-[#5b5b5f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            lectus cursus libero <br /> cursus. Venenatis aenean volutpat vitae
            sed porttitor venenatis.
          </p>
        </div>
        <div className="mt-[60px]">
          <Swiper
            scrollbar={{
              hide: true,
              draggable: true,
            }}
            slidesPerView={3.5}
            spaceBetween={30}
            modules={[Scrollbar]}
            className="mySwiper my-6 items-stretch"
          >
            <SwiperSlide className="w-[480px]">
              <div className="p-[25px] min-h-[250px]  border border-gray-200 ">
                <div className="">
                  <img
                    src="https://nov-one.myshopify.com/cdn/shop/files/icon-9-1_180x.png?v=1713166520"
                    alt=""
                    className="w-[64px] h-[64px] object-contain"
                  />
                  <h3 className="text-[#222222] leading-[1.5] tracking-[0px] font-semibold text-[18px] mt-[28px]">
                    Free 2-day shipping and returns
                  </h3>
                  <p className="mt-[13px] text-[#5b5b5f] max-w-[340px]">
                    On in-stock orders of $50 or more. Every day. Free return
                    shipping, too.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[480px] h-full">
              <div className="p-[25px] min-h-[250px]  border border-gray-200 ">
                <div className="">
                  <img
                    src="https://nov-one.myshopify.com/cdn/shop/files/icon-9-2_180x.png?v=1713166520"
                    alt=""
                    className="w-[64px] h-[64px] object-contain"
                  />
                  <h3 className="text-[#222222] leading-[1.5] tracking-[0px] font-semibold text-[18px] mt-[28px]">
                    90-day risk-free trial
                  </h3>
                  <p className="mt-[13px] text-[#5b5b5f] max-w-[340px]">
                    Take some time, make sure it’s the right product for you.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[480px]">
              <div className="p-[25px] min-h-[250px]  border border-gray-200 ">
                <div className="">
                  <img
                    src="https://nov-one.myshopify.com/cdn/shop/files/icon-9-3_180x.png?v=1713166520"
                    alt=""
                    className="w-[64px] h-[64px] object-contain"
                  />
                  <h3 className="text-[#222222] leading-[1.5] tracking-[0px] font-semibold text-[18px] mt-[28px]">
                    World class customer service
                  </h3>
                  <p className="mt-[13px] text-[#5b5b5f] max-w-[340px]">
                    Free technical support is available for all One products —
                    even older or retired models
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[480px]">
              <div className="p-[25px] min-h-[250px]  border border-gray-200 ">
                <div className="">
                  <img
                    src="https://nov-one.myshopify.com/cdn/shop/files/icon-9-4_180x.png?v=1713166520"
                    alt=""
                    className="w-[64px] h-[64px] object-contain"
                  />
                  <h3 className="text-[#222222] leading-[1.5] tracking-[0px] font-semibold text-[18px] mt-[28px]">
                    My account management
                  </h3>
                  <p className="mt-[13px] text-[#5b5b5f] max-w-[340px]">
                    On in-stock orders of $50 or more. Every day. Free return
                    shipping, too.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="my-[110px] border border-t-gray-200 border-b-gray-300">
        <div className="container mx-auto max-w-[1440px]">
          <div className="flex items-center justify-between py-[50px] ">
            <div>
              <ul>
                <li className="text-[#5b5b5f] text-[16px] mb-[15px]">
                  More than
                </li>
                <li className="text-[40px] text-[#1c1c1f] font-bold mb-[15px]">
                  <CountUp end={24} duration={2.75}></CountUp>
                  hr
                </li>
                <li className="text-[#5b5b5f] text-[16px] ">
                  of battery life with charging case
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-[#5b5b5f] text-[16px] mb-[15px]">Up to</li>
                <li className="text-[40px] text-[#1c1c1f] font-bold mb-[15px]">
                  <CountUp end={5} duration={1.75} enableScrollSpy ></CountUp>
                  hr
                </li>
                <li className="text-[#5b5b5f] text-[16px] ">
                  of battery life on one charge
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-[#5b5b5f] text-[16px] mb-[15px]">Better</li>
                <li className="text-[40px] text-[#1c1c1f] font-bold mb-[15px]">
                  <CountUp end={15} duration={2.75} enableScrollSpy></CountUp>
                  min
                </li>
                <li className="text-[#5b5b5f] text-[16px] ">
                  of charging equals 3 hours of battery life
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
