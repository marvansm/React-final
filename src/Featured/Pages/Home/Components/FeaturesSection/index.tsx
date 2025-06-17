import { ArrowDownLeft } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <div>
      <div className="container mx-auto max-w-[1440px]">
        <div>
          <ul className="flex items-center justify-between">
            <li className="text-[40px] font-bold">Core Features</li>
            <li>
              <button className="min-w-[120px] h-[50px] font-bold border border-gray-200 text-[16px] text-[#6f6f72] px-[20px] flex items-center gap-2.5 hover:text-black duration-300 cursor-pointer group">
                <ArrowDownLeft className="group-hover:rotate-90 duration-300" />{" "}
                Explore the awesome
              </button>
            </li>
          </ul>
          <p className="text-[#666666] text-[16px] max-w-[670px] mt-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            lectus cursus libero cursus. Venenatis aenean volutpat vitae sed
            porttitor venenatis.
          </p>
        </div>
        <div className="flex items-start justify-between overflow-hidden">
          <div className="left mt-[160px]">
            <ul
              data-aos="fade-right"
              data-aos-duration="1000"
              className="flex flex-col items-center gap-[10px]"
            >
              <li className="mb-[10px]">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/icon-9-5_40x.png?v=1713176185"
                  alt=""
                  className="w-[40px] h-[40px] object-cover"
                />
              </li>
              <li className="text-[16px] font-semibold">USB CABLE</li>
              <li className="text-[14px] text-[#2d2d2d]">
                Standard USB 3.0 cable
              </li>
            </ul>
            <ul
              data-aos="fade-right"
              data-aos-duration="1300"
              className="flex flex-col items-center gap-[10px] mt-[95px]"
            >
              <li className="mb-[10px]">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/icon-9-6_40x.png?v=1713176184"
                  alt=""
                  className="w-[40px] h-[40px] object-cover"
                />
              </li>
              <li className="text-[16px] font-semibold">24HR BATTERY LIFE</li>
              <li className="text-[14px] text-[#2d2d2d]">
                Battery life last up to 24 hours
              </li>
            </ul>
            <ul
              data-aos="fade-right"
              data-aos-duration="1500"
              className="flex flex-col items-center gap-[10px] mt-[95px]"
            >
              <li className="mb-[10px]">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/icon-9-5_40x.png?v=1713176185"
                  alt=""
                  className="w-[40px] h-[40px] object-cover"
                />
              </li>
              <li className="text-[16px] font-semibold">
                TYPE-C CHARGING PORT
              </li>
              <li className="text-[14px] text-[#2d2d2d]">
                Super fast charging with type-c port
              </li>
            </ul>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1300"
            className="mid w-[690px] h-[810px] mt-[42px]"
          >
            <img
              src="https://nov-one.myshopify.com/cdn/shop/files/img-9-1_768x.jpg?v=1713175576"
              alt=""
              className="w-full h-full object-cover hover:scale-[1.1] duration-700 transition:ease-in-out"
            />
          </div>
          <div className="right mt-[160px]">
            <ul
              data-aos="fade-left"
              data-aos-duration="1000"
              className="flex flex-col items-center gap-[10px]"
            >
              <li className="mb-[10px]">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/icon-9-8_40x.png?v=1713176185"
                  alt=""
                  className="w-[40px] h-[40px] object-cover"
                />
              </li>
              <li className="text-[16px] font-semibold">BLUETOOTH 7.1</li>
              <li className="text-[14px] text-[#2d2d2d]">
                Super fast connection
              </li>
            </ul>
            <ul
              data-aos="fade-left"
              data-aos-duration="1300"
              className="flex flex-col items-center gap-[10px] mt-[95px]"
            >
              <li className="mb-[10px]">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/icon-9-9_40x.png?v=1713176185"
                  alt=""
                  className="w-[40px] h-[40px] object-cover"
                />
              </li>
              <li className="text-[16px] font-semibold">HIGH QUALITY AUDIO</li>
              <li className="text-[14px] text-[#2d2d2d]">
                Guaranteed excellent sound quality
              </li>
            </ul>
            <ul
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex flex-col items-center gap-[10px] mt-[95px]"
            >
              <li className="mb-[10px]">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/icon-9-10_40x.png?v=1713176185"
                  alt=""
                  className="w-[40px] h-[40px] object-cover"
                />
              </li>
              <li className="text-[16px] font-semibold">MICROPHONE</li>
              <li className="text-[14px] text-[#2d2d2d]">
                Communicate with built-in microphone
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
