import { ShoppingBag } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const TrendProductSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <div className="mt-[119px]">
      <div className="bg-black ">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="h-full w-full">
              <img
                src="https://nov-one.myshopify.com/cdn/shop/files/img-9-2.jpg?v=1713234690"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-6 ">
            <div className="container mx-auto max-w-[1440px]">
              <div className="flex items-center justify-center py-[173px]">
                <div className="text-white flex flex-col items-start justify-center">
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="text-[40px] leading-[1.2] font-bold pb-[30px]"
                  >
                    One QuietComfort® <br /> Speaker
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1100"
                    className="text-[#b7b7bb] text-[16px] leading-[1.5] font-normal pb-[25px]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br />
                    Elementum lectus cursus libero cursus. Venenatis aenean{" "}
                    <br />
                    volutpat vitae sed porttitor venenatis. In a diam praesent{" "}
                    <br />
                    tortor, enim pellentesque dolor, gravida cras. At tempus{" "}
                    <br />
                    pretium mauris netus eget nec pulvinar lobortis.
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1300"
                    className="price flex items-center gap-2.5 pb-[50px]"
                  >
                    <span className="text-[40px] leading-[1.5] font-bold underline">
                      $199.00
                    </span>
                    <span className="text-[#b7b7bb] text-[16px] leading-[1.5]">
                      $259.00
                    </span>
                  </div>
                  <button
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="bg-[#266ff6] text-[18px] min-w-[290px] h-[78px] flex items-center gap-2 justify-center font-bold w-full hover:bg-white hover:text-[#266ff6] duration-300 cursor-pointer"
                  >
                    <ShoppingBag size={18} /> Add to card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9FD]">
        <div className="flex items-center justify-center flex-col text-center pt-[100px]">
          <h2
            data-aos="fade-up"
            data-aos-duration="1300"
            className="text-[40px] font-bold mb-[15px]"
          >
            Get connected. Stay connected
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1300"
            className="text-[16px] text-[#5b5b5f]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            lectus cursus libero <br /> cursus. Venenatis aenean volutpat vitae
            sed porttitor venenatis.
          </p>
        </div>
        <div className="bg-[#F9F9FD] pt-[50px] pb-[100px]">
          <div className="container mx-auto max-w-[1440px]">
            <ul className="flex items-center justify-between">
              <li data-aos="fade-right" data-aos-duration="1300" className="bg-white p-[20px] rounded-full w-[210px] h-[210px] flex items-center justify-center">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/img-9-3.png?v=1713241341"
                  alt=""
                  className="w-[97px] h-[87px] object-cover"
                />
              </li>

              <li data-aos="fade-up" data-aos-duration="1600">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/img-9-4.png?v=1713242477"
                  alt=""
                  className="w-[450px] h-[256px] object-cover"
                />
              </li>
              <li data-aos="fade-left" data-aos-duration="1300" className="bg-white p-[20px] rounded-full w-[210px] h-[210px] flex items-center justify-center">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/img-9-5.png?v=1713241340"
                  alt=""
                  className="w-[97px] h-[87px] object-cover"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendProductSection;
