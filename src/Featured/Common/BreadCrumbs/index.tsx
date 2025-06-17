import { Dot } from "lucide-react";

const BreadCrumbs = () => {
  return (
    <div>
      <ul className="flex items-center text-[13px] text-[#222] font-medium">
        <li>Home</li>
        <li>
          <Dot />
        </li>
        <li>Accessories</li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
