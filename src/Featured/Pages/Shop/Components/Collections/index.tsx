import {
  ChevronUp,
  Grid3x3,
  LayoutGrid,
  Menu,
  SlidersHorizontal,
  TableProperties,
  Tag,
  Trash2,
} from "lucide-react";
import ShopBreadCrumb from "../ShopBreadCrumb";
import ProductCard from "../../../../Common/ProductCards";
import { useQuery } from "@tanstack/react-query";
import { GetApiData } from "../../../../../Services/api";
import { clsx } from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";
const Collections = () => {
  const [ProductCategories, SetProductCategory] = useState("");
  const [InStock, SetInStock] = useState("");
  const [ProductTypes, SetProductTypes] = useState("");
  const [ProductColor, SetProductColor] = useState("");
  const [ProductBrand, SetProductBrand] = useState("");
  const [ProductSize, SetProductSize] = useState("");
  const [LayoutTwo, SetLayoutTwo] = useState(false);
  const [LayoutOne, SetLayoutOne] = useState(true);
  const [LayoutThird, SetLayoutThird] = useState(false);
  const [LoadMoreOne, SetLoadMoreOne] = useState(6);
  const [LoadMoreTwo, SetLoadMoreTwo] = useState(4);
  const [LoadMoreThird, SetLoadMoreThird] = useState(3);
  const [showMore, setShowMore] = useState(false);
  const { data: productData } = useQuery({
    queryKey: [
      "products",
      ProductCategories,
      InStock,
      ProductTypes,
      ProductBrand,
      ProductColor,
      ProductSize,
    ],
    queryFn: () =>
      GetApiData(
        `products?populate=*${
          ProductCategories
            ? `&filters[categories][name][$contains]=${ProductCategories}`
            : ""
        }${InStock ? `&filters[stock][name][$contains]=${InStock}` : ""}${
          ProductTypes
            ? `&filters[product_types][name][$contains]=${ProductTypes}`
            : ""
        }${
          ProductBrand
            ? `&filters[brands][name][$contains]=${ProductBrand}`
            : ""
        }${
          ProductColor
            ? `&filters[colors][name][$contains]=${ProductColor}`
            : ""
        }${
          ProductSize ? `&filters[sizes][name][$contains]=${ProductSize}` : ""
        }`
      ),
  });
  const { data: productCategory } = useQuery({
    queryKey: ["categories"],
    queryFn: () => GetApiData("categories?populate=*"),
  });
  const { data: productStock } = useQuery({
    queryKey: ["stocks"],
    queryFn: () => GetApiData("stocks?populate=*"),
  });
  const { data: productTypes } = useQuery({
    queryKey: ["producttype"],
    queryFn: () => GetApiData("product-types?populate=*"),
  });
  const { data: productBrand } = useQuery({
    queryKey: ["productBrand"],
    queryFn: () => GetApiData("brands?populate=*"),
  });
  const { data: productColor } = useQuery({
    queryKey: ["productColor"],
    queryFn: () => GetApiData("colors?populate=*"),
  });
  const { data: productSizes } = useQuery({
    queryKey: ["productSizes"],
    queryFn: () => GetApiData("sizes?populate=*"),
  });

  const ClearAll = () => {
    SetProductCategory("");
    SetInStock("");
    SetProductTypes("");
    SetProductColor("");
    SetProductBrand("");
    SetProductSize("");
  };

  const BgColorsSetter = (name: any) => {
    switch (name) {
      case "black":
        return "bg-black";
      case "blue":
        return "bg-[#0000FF]";
      case "bluegrey":
        return "bg-gray-400";
      case "red":
        return "bg-red-500";
      case "green":
        return "bg-green-500";
      case "darkblue":
        return "bg-[#00008B]";
      case "gold":
        return "bg-[#FFD700]";
      case "gray":
        return "bg-[#808080]";
      case "greyred":
        return "bg-[#000000]";
      case "orange":
        return "bg-[#FFA500]";
      case "orangered":
        return "bg-[#FF4500]";
      case "skyblue":
        return "bg-[#4682B4]";
      case "yellow":
        return "bg-[#FFFF00]";
      case "yellowblue":
        return "bg-[#F1A40E]";
      default:
        break;
    }
  };

  return (
    <div>
      <ShopBreadCrumb />.
      <div className="container mx-auto max-w-[1440px] ">
        <div>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-3">
              <div>
                <h2 className="text-[20px] text-[#1c1c1f] font-extrabold flex items-center gap-1 mb-[20px] uppercase">
                  <Menu size={20} /> Categories
                </h2>
                <ul className="flex items-start flex-col gap-0.5">
                  {productCategory?.data?.map((item: any, idx: number) => (
                    <li
                      onClick={() => {
                        SetProductCategory(item?.name);
                      }}
                      key={idx}
                      className="text-[14px] hover:bg-[#ebeaea] hover:text-[15px] duration-300 cursor-pointer w-full font-medium text-[#5b5b5f] bg-[#efefef] h-[44px] leading-[44px] rounded-[5px] px-[30px]"
                    >
                      {item?.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mt-[35px] border-b border-b-gray-300">
                  <h2 className="text-[20px] text-[#1c1c1f] font-extrabold flex items-center gap-1 mb-[20px] uppercase">
                    <SlidersHorizontal size={20} />
                    Filter by
                  </h2>
                </div>
                <div className="mt-[25px]">
                  <button
                    onClick={ClearAll}
                    className="bg-[#2d6fde] min-w-[120px] h-[50px] px-[20px] flex items-center gap-1 hover:bg-[#0D53C9] duration-300 justify-center text-[12px] font-bold text-white w-full "
                  >
                    <Trash2 size={18} />
                    Clear all
                  </button>
                </div>
              </div>
              <div className="mt-[26px] border-b border-b-gray-300 pb-[30px]">
                <ul className="flex items-center justify-between">
                  <li className="text-[14px] text-[#1c1c1f] font-extrabold flex items-center gap-1 uppercase">
                    <ChevronUp size={20} strokeWidth={1} /> Availability
                  </li>
                  <li
                    onClick={() => SetInStock("")}
                    className="text-[10px] uppercase font-semibold text-[#bcbcbc] cursor-pointer duration-300 hover:text-black"
                  >
                    reset
                  </li>
                </ul>

                <ul className="mt-[20px] flex items-start flex-col gap-2.5">
                  {productStock?.data?.map((item: any, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex items-center gap-2">
                        <label
                          onClick={() => SetInStock(item?.name)}
                          htmlFor={item?.name}
                          id={item?.name}
                          className="text-[#5b5b5f] font-normal flex items-center gap-3"
                        >
                          <input
                            type="checkbox"
                            checked={InStock === item?.name}
                            name="check"
                            id={item?.name}
                          />
                          {item?.name}
                        </label>
                      </div>
                      <span className="text-[11px] text-[#1c1c1f]">
                        ({item.products.length})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-[26px] border-b border-b-gray-300 pb-[30px]">
                <ul className="flex items-center justify-between">
                  <li className="text-[14px] text-[#1c1c1f] font-extrabold flex items-center gap-1 uppercase">
                    <ChevronUp size={20} strokeWidth={1} /> Product Type
                  </li>
                  <li
                    onClick={() => SetProductTypes("")}
                    className="text-[10px] uppercase font-semibold text-[#bcbcbc] cursor-pointer duration-300 hover:text-black"
                  >
                    reset
                  </li>
                </ul>

                <ul className="mt-[20px] flex items-start flex-col gap-2.5 h-[200px] overflow-y-scroll">
                  {productTypes?.data?.map((item: any, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex items-center gap-2">
                        <label
                          onClick={() => {
                            SetProductTypes(item?.name);
                          }}
                          htmlFor={item?.name}
                          id={item?.name}
                          className="text-[#5b5b5f] font-normal flex items-center gap-3"
                        >
                          <input
                            type="checkbox"
                            name={item?.name}
                            id={item?.name}
                            checked={ProductTypes === item?.name}
                          />
                          {item?.name}
                        </label>
                      </div>
                      <span className="text-[11px] text-[#1c1c1f]">
                        ({item.products.length})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-[26px] border-b border-b-gray-300 pb-[30px]">
                <ul className="flex items-center justify-between">
                  <li className="text-[14px] text-[#1c1c1f] font-extrabold flex items-center gap-1 uppercase">
                    <ChevronUp size={20} strokeWidth={1} /> Brand
                  </li>
                  <li
                    onClick={() => SetProductBrand("")}
                    className="text-[10px] uppercase font-semibold text-[#bcbcbc] cursor-pointer duration-300 hover:text-black"
                  >
                    reset
                  </li>
                </ul>

                <ul className="mt-[20px] flex items-start flex-col gap-2.5 h-[200px] overflow-y-scroll">
                  {productBrand?.data?.map((item: any, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex items-center gap-2">
                        <label
                          onClick={() => {
                            SetProductBrand(item?.name);
                          }}
                          htmlFor={item?.name}
                          id={item?.name}
                          className="text-[#5b5b5f] font-normal flex items-center gap-3"
                        >
                          <input
                            type="checkbox"
                            name="check"
                            id={item?.name}
                            checked={ProductBrand === item?.name}
                          />
                          {item?.name}
                        </label>
                      </div>
                      <span className="text-[11px] text-[#1c1c1f]">
                        ({item.products.length})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-[26px] border-b border-b-gray-300 pb-[30px]">
                <ul className="flex items-center justify-between">
                  <li className="text-[14px] text-[#1c1c1f] font-extrabold flex items-center gap-1 uppercase">
                    <ChevronUp size={20} strokeWidth={1} /> Color
                  </li>
                  <li
                    onClick={() => SetProductColor("")}
                    className="text-[10px] uppercase font-semibold text-[#bcbcbc] cursor-pointer duration-300 hover:text-black"
                  >
                    reset
                  </li>
                </ul>

                <div className="mt-[20px] ">
                  <div className="flex flex-wrap gap-2">
                    {productColor?.data?.map((item: any, idx: number) => (
                      <button
                        onClick={() => {
                          SetProductColor(item?.name);
                        }}
                        key={idx}
                        className={clsx(
                          "w-[30px] h-[30px] rounded-full border border-gray-300 hover:scale-105 transition-transform duration-200",
                          BgColorsSetter(item?.name)
                        )}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-[26px] border-b border-b-gray-300 pb-[30px]">
                <ul className="flex items-center justify-between">
                  <li className="text-[14px] text-[#1c1c1f] font-extrabold flex items-center gap-1 uppercase">
                    <ChevronUp size={20} strokeWidth={1} /> Size
                  </li>
                  <li
                    onClick={() => SetProductColor("")}
                    className="text-[10px] uppercase font-semibold text-[#bcbcbc] cursor-pointer duration-300 hover:text-black"
                  >
                    reset
                  </li>
                </ul>

                <div className="mt-[20px] ">
                  <div className="flex flex-wrap  gap-2">
                    {productSizes?.data?.map((item: any, idx: number) => (
                      <button
                        onClick={() => {
                          SetProductSize(item?.name);
                        }}
                        key={idx}
                        className={clsx(
                          "w-[140px] h-[40px] text-[10px] text-[#5b5b5f] font-normal border border-gray-300 hover:scale-105 transition-transform duration-200"
                        )}
                      >
                        {item?.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-9">
              <div>
                <ul className="flex items-center justify-between">
                  <li className=" text-[13px] px-3 ">
                    Sort by:
                    <select
                      name="sort"
                      className="font-bold text-[13px] min-w-[100px] p-[15px] outline-none rounded-2xl"
                    >
                      <option className="font-bold text-[13px]">
                        {" "}
                        Featured
                      </option>
                      <option className="text-[13px] hover:font-bold ">
                        Best selling
                      </option>
                      <option>Alphabetically, A-Z</option>
                      <option>Alphabetically, Z-A</option>
                      <option>Price, low to high</option>
                      <option>Price, high to low</option>
                      <option>Date, old to new</option>
                      <option>Date, new to old</option>
                    </select>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-[42px] w-[42px] bg-[#E9EBEB] flex items-center justify-center rounded-[5px] hover:bg-black hover:text-white duration-300 cursor-pointer">
                      <Grid3x3
                        onClick={() => {
                          SetLayoutTwo(false);
                          SetLayoutOne(true);
                          SetLayoutThird(false);
                        }}
                        size={26}
                        strokeWidth={1}
                      />
                    </div>
                    <div
                      onClick={() => {
                        SetLayoutTwo(true);
                        SetLayoutOne(false);
                        SetLayoutThird(false);
                      }}
                      className="h-[42px] w-[42px] bg-[#E9EBEB] flex items-center justify-center rounded-[5px] hover:bg-black hover:text-white duration-300 cursor-pointer"
                    >
                      <LayoutGrid size={26} strokeWidth={1} />
                    </div>
                    <div
                      onClick={() => {
                        SetLayoutThird(true);
                        SetLayoutTwo(false);
                        SetLayoutOne(false);
                      }}
                      className="h-[42px] w-[42px] bg-[#E9EBEB] flex items-center justify-center rounded-[5px] hover:bg-black hover:text-white duration-300 cursor-pointer"
                    >
                      <TableProperties size={26} strokeWidth={1} />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-[20px]">
                {LayoutOne && (
                  <div className="grid grid-cols-3">
                    {productData?.data
                      ?.slice(0, LoadMoreOne)
                      .map((item: any, idx: number) => (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.8 }}
                        >
                          <ProductCard
                            key={idx}
                            title={item?.title}
                            oldprice={item?.oldprice}
                            discountprice={item?.discountprice}
                            hoverimg={item?.hoverimg.url}
                            image={item?.image.url}
                            color={item?.colors}
                          />
                        </motion.div>
                      ))}
                  </div>
                )}
                {LayoutTwo && (
                  <div className="grid grid-cols-2">
                    {productData?.data
                      ?.slice(0, LoadMoreTwo)
                      .map((item: any, idx: number) => (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.8 }}
                        >
                          <ProductCard
                            key={idx}
                            title={item?.title}
                            oldprice={item?.oldprice}
                            discountprice={item?.discountprice}
                            hoverimg={item?.hoverimg.url}
                            image={item?.image.url}
                            color={item?.colors}
                          />
                        </motion.div>
                      ))}
                  </div>
                )}
                {LayoutThird && (
                  <div className="grid grid-cols-1">
                    {productData?.data
                      ?.slice(0, LoadMoreThird)
                      .map((item: any, idx: number) => (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 10 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.8 }}
                        >
                          <ProductCard
                            key={idx}
                            title={item?.title}
                            oldprice={item?.oldprice}
                            discountprice={item?.discountprice}
                            hoverimg={item?.hoverimg.url}
                            image={item?.image.url}
                            desc="IronCaptivate with this shirt’s versatile urban look that works as well at happy hour as it does in the back yard. The real mother of pearl buttons and embroidered crocodile complete its elegant appeal.Lorem ipsum dolor sit am...
"
                            color={item?.colors}
                            className={" flex items-start h-[400px] "}
                          />
                        </motion.div>
                      ))}
                  </div>
                )}
                {LayoutOne && (
                  <div className="items-center justify-center flex mt-[15px]">
                    <button
                      onClick={() => {
                        SetLoadMoreOne(LoadMoreOne + 3);
                      }}
                      className="bg-[#5858d9] text-white h-[50px] mt-[17px] w-[300px]  justify-center  hover:bg-[#734baf] flex items-center gap-2.5 duration-300 cursor-pointer"
                    >
                      Load more items
                    </button>
                  </div>
                )}
                {LayoutTwo && (
                  <div className="items-center justify-center flex mt-[15px]">
                    <button
                      onClick={() => {
                        SetLoadMoreTwo(LoadMoreTwo + 4);
                      }}
                      className="bg-[#5858d9] text-white h-[50px] mt-[17px] w-[300px]  justify-center  hover:bg-[#734baf] flex items-center gap-2.5 duration-300 cursor-pointer"
                    >
                      Load more items
                    </button>
                  </div>
                )}
                {LayoutThird && (
                  <div className="items-center justify-center flex mt-[15px]">
                    <button
                      onClick={() => {
                        SetLoadMoreThird(LoadMoreThird + 4);
                      }}
                      className="bg-[#5858d9] text-white h-[50px] mt-[17px] w-[300px]  justify-center  hover:bg-[#734baf] flex items-center gap-2.5 duration-300 cursor-pointer"
                    >
                      Load more items
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2] py-[100px] mt-10">
        <div className="container mx-auto max-w-[1440px] ">
          <h2 className="flex items-center gap-1.5 text-[14px] font-bold">
            <Tag size={15} fill="black" /> Tags
          </h2>
          <div className="flex items-center gap-6 mt-7">
            {productTypes?.data?.map((item: any, idx: number) => (
              <button
                key={idx}
                className="h-[43px] text-[11px] px-[29px] rounded-[5px] bg-[#fff] border border-gray-300"
              >
                {item?.name}
              </button>
            ))}
          </div>
          <div>
            <h2 className="font-bold text-[22px] mt-15 text-[#5b5b5f] uppercase">
              Accessories
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[15px] text-[#5b5b5f] mt-[10px]"
            >
              {showMore
                ? `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ipsum eu quam blandit maximus. Donec at lacus lacus. Donec ultricies lacus libero, fermentum mollis velit accumsan ac. Morbi in nunc erat. Sed a ligula tristique mi aliquam pellentesque. Ut malesuada nisl eros, ut sollicitudin ex mattis quis. Praesent cursus a augue ac placerat. Nam mattis mi ac dui suscipit egestas. Vestibulum lorem libero, feugiat dapibus urna id, gravida varius tellus. Nam sed congue quam. Sed sit amet libero augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et efficitur ante. Vestibulum quis volutpat felis, volutpat ornare nunc. Vivamus ac aliquam justo. Mauris ultrices posuere velit, eu elementum mauris.

Phasellus vitae egestas orci. Pellentesque mi ex, vestibulum nec neque mollis, ultricies mollis elit. Sed purus elit, aliquet at erat id, efficitur vehicula velit. Fusce tristique lectus a velit finibus, sed facilisis odio placerat. Ut quis efficitur mi, quis porttitor ipsum. Phasellus euismod est vitae neque consectetur, nec laoreet enim pharetra. Aliquam non sem sit amet nunc consectetur ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed orci non magna consectetur viverra. Suspendisse at lectus lacus. Suspendisse eget ultricies mi. Pellentesque rutrum porta lorem, ac interdum nisl faucibus at. Aliquam turpis metus, aliquam at bibendum scelerisque, posuere blandit urna. Nunc sit amet lacus purus. In mattis laoreet purus eget pulvinar. Quisque non enim mollis, ultricies quam efficitur, efficitur nunc.

Mauris sollicitudin, est nec volutpat placerat, ex quam dignissim risus, et aliquam lacus ante vitae nulla. Suspendisse mattis luctus nulla, quis tincidunt erat aliquam auctor. Fusce non felis pellentesque nisl egestas ornare non in enim. Duis sed purus a tellus tempor pharetra. Suspendisse vel velit nec mauris mattis maximus in sed ipsum. Nulla eu augue in mauris porttitor tincidunt in non metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam a laoreet sapien, vel tristique risus. Fusce rhoncus, nibh vel pharetra suscipit, odio justo consectetur mi, sit amet ullamcorper ex nulla ac elit. Phasellus feugiat mi augue, eu convallis nisi iaculis nec.`
                : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ipsum eu quam blandit maximus. Donec at lacus lacus. Donec ultricies lacus libero, fermentum mollis velit accumsan ac. Morbi in nunc erat. Sed a ligula tristique mi aliquam pellentesque. Ut malesuada nisl eros, ut sollicitudin ex mattis quis. Praesent cursus a augue ac placerat. Nam mattis mi ac dui suscipit egestas. Vestibulum lorem libero, feugiat dapibus urna id, gravida varius tellus. Nam sed congue quam. Sed sit amet libero augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et efficitur ante. Vestibulum quis volutpat felis, volutpat ornare nunc. Vivamus ac aliquam justo. Mauris ultrices posuere velit, eu elementum mauris.
Phasellus vitae egestas orci. Pellentesque mi ex, vestibulum nec neque mollis, ultricies mollis elit. Sed purus elit, aliquet at erat id, efficitur vehicula velit. Fusce tristique lectus a velit finibus, sed facilisis odio`}
            </motion.p>
            {!showMore && (
              <div className="w-full h-[70px] bg-gradient-to-t from-[#f2f2f2] to-transparent pointer-events-none" />
            )}

            <span
              onClick={() => setShowMore(!showMore)}
              className="flex items-center justify-center  font-semibold text-[10px] text-[#5b5b5f] uppercase cursor-pointer"
            >
              {showMore ? "see less -" : "see more +"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
