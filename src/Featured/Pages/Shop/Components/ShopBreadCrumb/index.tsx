import BreadCrumbs from "../../../../Common/BreadCrumbs";

const ShopBreadCrumb = () => {
  return (
    <div>
      <div className="bg-[#F5F6FC] py-[150px]">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-[30px] font-extrabold text-[#222] mb-[5px] uppercase">
            Accessories
          </h1>
          <BreadCrumbs />
        </div>
      </div>
    </div>
  );
};

export default ShopBreadCrumb;
