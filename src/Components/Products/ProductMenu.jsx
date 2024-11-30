import { NavLink } from "react-router-dom";
import "../../index.css";

const ProductMenu = () => {
  return (
    <div className="bg-white">
      <ul className="flex flex-col gap-6 p-6 text-lg font-normal rounded-2xl ">
        <NavLink
          to="/Home/AllProduct"
          // state={{ key: "AllProduct" }}
          className={({ isActive }) =>
            isActive
              ? "px-[22px] py-[13px] bg-[#9538e2] rounded-[32px] text-white"
              : "px-[22px] py-[13px]  bg-slate-100 rounded-[32px] text-gray-500"
          }
        >
          All Product
        </NavLink>

        <NavLink
          to="/Home/Smartphones"
          // state={{ key: "Smartphones" }}
          className={({ isActive }) =>
            isActive
              ? "px-[22px] py-[13px] bg-[#9538e2] rounded-[32px] text-white"
              : "px-[22px] py-[13px]  bg-slate-100 rounded-[32px] text-gray-500"
          }
        >
          Smartphones
        </NavLink>

        <NavLink
          to="/Home/Laptops"
          className={({ isActive }) =>
            isActive
              ? "px-[22px] py-[13px] bg-[#9538e2] rounded-[32px] text-white"
              : "px-[22px] py-[13px]  bg-slate-100 rounded-[32px] text-gray-500"
          }

          // state={{ key: "Laptops" }}
        >
          Laptops
        </NavLink>

        <NavLink
          to="/Home/Smartwatches"
          className={({ isActive }) =>
            isActive
              ? "px-[22px] py-[13px] bg-[#9538e2] rounded-[32px] text-white"
              : "px-[22px] py-[13px]  bg-slate-100 rounded-[32px] text-gray-500"
          }
          // state={{ key: "Smartwatches" }}
        >
          Smart Watches
        </NavLink>

        <NavLink
          to="/Home/Tablets"
          className={({ isActive }) =>
            isActive
              ? "px-[22px] py-[13px] bg-[#9538e2] rounded-[32px] text-white"
              : "px-[22px] py-[13px]  bg-slate-100 rounded-[32px] text-gray-500"
          }
          // state={{ key: "Tablets" }}
        >
          Tablets
        </NavLink>
      </ul>
    </div>
  );
};

export default ProductMenu;
