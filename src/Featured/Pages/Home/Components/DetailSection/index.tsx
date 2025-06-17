import MotionImage from "../../../../Common/MotionImages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const DetailSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <div className="bg-[url(https://nov-one.myshopify.com/cdn/shop/files/img-9-7_1920x.jpg?v=1713501204)] h-[750px] bg-cover bg-center bg-no-repeat flex items-end justify-center">
      <div className="container mx-auto max-w-[1440px] mt-[130px] ">
        <div className="grid grid-cols-2 items-center gap-[194px]">
          <div className="flex items-center justify-center ">
            <MotionImage
              image={
                "https://nov-one.myshopify.com/cdn/shop/files/img-9-7-img_580x.png?v=1713501790"
              }
              className={"w-[500px] h-[690px] object-contain"}
            />
          </div>
          <div className="mb-30">
            <h1
              data-aos="fade-up"
              data-aos-duration="900"
              className="text-[#1c1c1f] text-[40px] font-bold leading-[1.2] mb-[10px]"
            >
              Easily control your <br /> smartphone
            </h1>
            <p data-aos="fade-up"
              data-aos-duration="1200" className="text-[16px] leading-[1.5] font-normal text-[#5b5b5f]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Elementum lectus cursus libero cursus. Venenatis aenean <br />{" "}
              volutpat vitae sed porttitor venenatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
