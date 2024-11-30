import React, { useContext } from "react";

export const Purchase = ({ item }) => {
  return (
    <div className="inline-flex items-center justify-center gap-4 p-8 bg-white border-2 rounded-2xl">
      <div className="flex items-center justify-start gap-8 ">
        <img
          src={item.product_image}
          className="w-[200px]  bg-[#d9d9d9] rounded-xl"
        />
        <div className="inline-flex flex-col items-start justify-start gap-4 ">
          <div className="self-stretch h-[78px] flex-col justify-start items-start gap-3 flex">
            <div className="inline-flex items-start self-stretch justify-between">
              <p className="text-[#09080e] text-2xl font-semibold">
                {item.product_title}
              </p>
            </div>
            <p className="text-[#09080e]/60 text-lg font-normal  leading-[30px]">
              {item.description}
            </p>
          </div>
          <p className="text-[#09080e]/80 text-xl font-semibold  leading-[30px]">
            Price: ${item.price}
          </p>
        </div>
      </div>
    </div>
  );
};
