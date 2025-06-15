import { Check, Clock3, Heart, Minus, Plus, ShoppingBag, Star, Truck } from "lucide-react";

const AddtoCardSection = () => {
  return (
    <div className="container mx-auto max-w-[1440px] mt-[141px]">
      <div className="grid grid-cols-12 gap-24">
        <div className="col-span-6 ">
          <div className="flex flex-col gap-4">
            <div className="border border-gray-200 h-full w-full rounded-2xl overflow-hidden">
              <img
                src="https://nov-one.myshopify.com/cdn/shop/files/1_960x.jpg?v=1713250732"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <ul className="flex items-center gap-4">
              <li className="border border-gray-200 rounded-2xl overflow-hidden w-full h-[120px] flex items-center hover:shadow-lg duration-300 justify-center p-4">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/1_180x.jpg?v=1713250732"
                  alt=""
                  className="w-full h-full object-cover "
                />
              </li>
              <li className="border border-gray-200 rounded-2xl overflow-hidden w-full h-[120px] flex items-center hover:shadow-lg duration-300 justify-center p-4">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/img-9-4.png?v=1713242477"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </li>
              <li className="border border-gray-200 rounded-2xl overflow-hidden w-full h-[120px] flex items-center hover:shadow-lg duration-300 justify-center p-4">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/3_960x.jpg?v=1713250732"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </li>
              <li className="border border-gray-200 rounded-2xl overflow-hidden w-full h-[120px] flex items-center hover:shadow-lg duration-300 justify-center p-4">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/4_180x.jpg?v=1713250732"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </li>
              <li className="border border-gray-200 rounded-2xl overflow-hidden w-full h-[120px] flex items-center hover:shadow-lg duration-300 justify-center p-4">
                <img
                  src="https://nov-one.myshopify.com/cdn/shop/files/5_180x.jpg?v=1713250732"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-6 mt-[65px]">
          <div>
            <div className="flex items-center gap-3">
              <div className="rating flex items-center gap-0.5">
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
              </div>
              <p className="flex items-center text-[#2d6fde] font-bold text-[14px] uppercase">
                <Check size={15} /> In stock
              </p>
            </div>
            <div className="py-[24px]">
              <h1 className="text-[24px] font-bold mb-[15px] w-[550px] hover:text-[#0000FF] cursor-pointer duration-300">
                One Harmony Sound Pro+ Elite Series Studio-Quality Headphones
              </h1>
              <span className="text-[#2d6fde] text-[24px] font-extrabold">
                $25.00
              </span>
              <p className="text-[16px] text-[#5b5b5f] font-normal mt-[15px]">
                IronCaptivate with this shirt’s versatile urban look that works
                as well at happy <br /> hour as it does in the back yard. The
                real mother of pearl buttons and <br /> embroidered crocodile
                complete its elegant appeal.Lorem ipsum...
              </p>
            </div>
            <div>
              <span className="text-[14px] font-bold capitalize ">
                Color: Black
              </span>
              <ul className="flex items-center gap-2 mt-[10px] mb-[30px]">
                <li className="bg-[#000] w-[25px] h-[25px] rounded-full"></li>
                <li className="bg-[#0000FF] w-[25px] h-[25px] rounded-full"></li>
                <li className="bg-[#FFA500] w-[25px] h-[25px] rounded-full "></li>
              </ul>
            </div>
            <div>
              <h2>Quantity:</h2>
              <div className="flex items-center justify-between">
                <ul className="border border-gray-300 flex items-center w-[103px] justify-between h-[42px]  min-w-[105px] text-[12px] rounded-[3px] mt-[10px]">
                  <li className="w-[24px] hover:text-[#0000FF] cursor-pointer px-1 duration-200">
                    <Minus size={15} />
                  </li>
                  <li className="bg-[#F5F6FC] h-full w-full flex items-center justify-center">
                    1
                  </li>
                  <li className="w-[24px] px-1 hover:text-[#0000FF] cursor-pointer duration-200">
                    <Plus size={15} />
                  </li>
                </ul>
                <p className="flex items-center gap-1.5 text-[14px] hover:text-[#0000FF] cursor-pointer duration-200">
                  <Heart size={20} /> Add To Wishlist
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2.5 mt-[31px]">
              <button className="bg-[#2d6fde] text-white h-[50px]  justify-center w-full hover:bg-[#734baf] flex items-center gap-2.5 duration-300 cursor-pointer">
             <ShoppingBag  color="white" size={18}/>   
              </button>
              <button className="bg-[#000] text-white h-[50px] flex items-center justify-center w-full hover:bg-white hover:text-[#2d6fde] border duration-300">
                Buy It Now
              </button>
            </div>
            <div className="mt-[46px]">
              <p className="flex items-center gap-1.5 text-[12px] text-[#5b5b5f]">
                <Clock3 size={19} /> Orders ship within 5 to 10 business days.
              </p>
              <p className="flex items-center gap-1.5 text-[12px] text-[#5b5b5f] mt-[22px]">
                <Truck size={19} />
                Hoorey ! This item ships free to the US
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoCardSection;
