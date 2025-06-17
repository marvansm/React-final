import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import {
  ArrowDownRight,
  BadgeCheck,
  MoveLeft,
  MoveRight,
  Star,
} from "lucide-react";
import styles from "./style.module.scss";
import { clsx } from "clsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ReviewSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <div>
      <div className="container mx-auto max-w-[1440px]  mt-[140px] mb-[100px]">
        <div className=" mb-[50px] flex items-center justify-between">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="900"
              className="text-[40px] font-bold text-[#2d2d2d] pb-[15px]"
            >
              Product's Reviews
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1300"
              className="text-[16px] text-[#666666]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              lectus cursus libero <br /> cursus. Venenatis aenean volutpat
              vitae sed porttitor venenatis.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1300"
            className="flex items-center gap-3"
          >
            <button className="custom-prev w-15 h-15 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition">
              <MoveLeft size={17} />
            </button>
            <button className="custom-next w-15 h-15 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition">
              <MoveRight size={17} />
            </button>
          </div>
        </div>
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          slidesPerView={4}
          spaceBetween={30}
          data-aos="zoom-in"
          data-aos-duration="1300"
          modules={[Scrollbar, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="pt-[20px] pb-[120px] px-1">
            <div className={clsx(styles.box, " shadow-lg py-[70px] px-[25px]")}>
              <div className="flex items-center justify-center flex-col">
                <div className="flex items-center gap-1 pb-[20px]">
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                </div>
                <p className="pb-[28px] text-[16px] font-normal text-center">
                  “I have been using the Harmony <br /> Sound Pro+ Elite Series
                  headphones <br /> for a few months now, and I am <br /> blown
                  away by the audio quality. <br /> The sound is incredibly
                  detailed and <br /> balanced, allowing me.”
                </p>
                <h2 className="pb-[19px] text-[16px] text-[#1c1c1f] font-bold">
                  Nancy Kern
                </h2>
                <ul className="pb-[25px] flex items-center gap-1.5 text-[#2d6fde]">
                  <li>
                    <BadgeCheck size={20} />
                  </li>
                  <li>Verified Purchase</li>
                </ul>
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/avatar-9-1_380x380_crop_center.png?v=1713415828"
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-[20px] pb-[120px] px-1">
            <div className={clsx(styles.box, " shadow-lg py-[70px] px-[25px]")}>
              <div className="flex items-center justify-center flex-col">
                <div className="flex items-center gap-1 pb-[20px]">
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                </div>
                <p className="pb-[28px] text-[16px] font-normal text-center">
                  “I have been using the Harmony <br /> Sound Pro+ Elite Series
                  headphones <br /> for a few months now, and I am <br /> blown
                  away by the audio quality. <br /> The sound is incredibly
                  detailed and <br /> balanced, allowing me.”
                </p>
                <h2 className="pb-[19px] text-[16px] text-[#1c1c1f] font-bold">
                  Nancy Kern
                </h2>
                <ul className="pb-[25px] flex items-center gap-1.5 text-[#2d6fde]">
                  <li>
                    <BadgeCheck size={20} />
                  </li>
                  <li>Verified Purchase</li>
                </ul>
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/avatar-9-1_380x380_crop_center.png?v=1713415828"
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-[20px] pb-[120px] px-1">
            <div className={clsx(styles.box, " shadow-lg py-[70px] px-[25px]")}>
              <div className="flex items-center justify-center flex-col">
                <div className="flex items-center gap-1 pb-[20px]">
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                </div>
                <p className="pb-[28px] text-[16px] font-normal text-center">
                  “I have been using the Harmony <br /> Sound Pro+ Elite Series
                  headphones <br /> for a few months now, and I am <br /> blown
                  away by the audio quality. <br /> The sound is incredibly
                  detailed and <br /> balanced, allowing me.”
                </p>
                <h2 className="pb-[19px] text-[16px] text-[#1c1c1f] font-bold">
                  Nancy Kern
                </h2>
                <ul className="pb-[25px] flex items-center gap-1.5 text-[#2d6fde]">
                  <li>
                    <BadgeCheck size={20} />
                  </li>
                  <li>Verified Purchase</li>
                </ul>
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/avatar-9-1_380x380_crop_center.png?v=1713415828"
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-[20px] pb-[120px] px-1">
            <div className={clsx(styles.box, " shadow-lg py-[70px] px-[25px]")}>
              <div className="flex items-center justify-center flex-col">
                <div className="flex items-center gap-1 pb-[20px]">
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                </div>
                <p className="pb-[28px] text-[16px] font-normal text-center">
                  “I have been using the Harmony <br /> Sound Pro+ Elite Series
                  headphones <br /> for a few months now, and I am <br /> blown
                  away by the audio quality. <br /> The sound is incredibly
                  detailed and <br /> balanced, allowing me.”
                </p>
                <h2 className="pb-[19px] text-[16px] text-[#1c1c1f] font-bold">
                  Nancy Kern
                </h2>
                <ul className="pb-[25px] flex items-center gap-1.5 text-[#2d6fde]">
                  <li>
                    <BadgeCheck size={20} />
                  </li>
                  <li>Verified Purchase</li>
                </ul>
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/avatar-9-1_380x380_crop_center.png?v=1713415828"
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-[20px] pb-[120px] px-1">
            <div className={clsx(styles.box, " shadow-lg py-[70px] px-[25px]")}>
              <div className="flex items-center justify-center flex-col">
                <div className="flex items-center gap-1 pb-[20px]">
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                </div>
                <p className="pb-[28px] text-[16px] font-normal text-center">
                  “I have been using the Harmony <br /> Sound Pro+ Elite Series
                  headphones <br /> for a few months now, and I am <br /> blown
                  away by the audio quality. <br /> The sound is incredibly
                  detailed and <br /> balanced, allowing me.”
                </p>
                <h2 className="pb-[19px] text-[16px] text-[#1c1c1f] font-bold">
                  Nancy Kern
                </h2>
                <ul className="pb-[25px] flex items-center gap-1.5 text-[#2d6fde]">
                  <li>
                    <BadgeCheck size={20} />
                  </li>
                  <li>Verified Purchase</li>
                </ul>
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/avatar-9-1_380x380_crop_center.png?v=1713415828"
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-[20px] pb-[120px] px-1">
            <div className={clsx(styles.box, " shadow-lg py-[70px] px-[25px]")}>
              <div className="flex items-center justify-center flex-col">
                <div className="flex items-center gap-1 pb-[20px]">
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                  <Star size={16} color="blue" />
                </div>
                <p className="pb-[28px] text-[16px] font-normal text-center">
                  “I have been using the Harmony <br /> Sound Pro+ Elite Series
                  headphones <br /> for a few months now, and I am <br /> blown
                  away by the audio quality. <br /> The sound is incredibly
                  detailed and <br /> balanced, allowing me.”
                </p>
                <h2 className="pb-[19px] text-[16px] text-[#1c1c1f] font-bold">
                  Nancy Kern
                </h2>
                <ul className="pb-[25px] flex items-center gap-1.5 text-[#2d6fde]">
                  <li>
                    <BadgeCheck size={20} />
                  </li>
                  <li>Verified Purchase</li>
                </ul>
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/avatar-9-1_380x380_crop_center.png?v=1713415828"
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-full"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="1600"
            className="bg-[url(https://nov-one.myshopify.com/cdn/shop/files/img-9-8.jpg?v=1713416591)] bg-cover bg-center bg-no-repeat py-[173px] px-[80px]"
          >
            <h1 className="text-[40px] font-bold text-white">
              We also make emails
            </h1>
            <h2 className="text-[16px] text-white font-normal mb-[35px] mt-[10px]">
              Receive email updates on stuff you’ll probably want to know about,
              including <br /> products, launches, and events. Unsubscribe
              anytime
            </h2>
            <div className="h-[54px] flex items-center justify-between bg-white text-[12px] pl-[25px] px-1 w-[500px]">
              <input
                type="email"
                placeholder="Send email"
                className="bg-white h-[53px] outline-none"
              />
              <button className="h-[46px] bg-[#2d6fde] text-white flex items-center justify-center text-[16px] font-bold gap-1 pl-[15px] pr-[20px]">
                Send mail <ArrowDownRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
