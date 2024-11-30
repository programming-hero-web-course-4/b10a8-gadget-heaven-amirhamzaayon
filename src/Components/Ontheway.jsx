import React from "react";
import { Purchases } from "./Purchases";

export const Ontheway = () => {
  return (
    <div>
      <div>
        <div className="w-full h-[250px] bg-[#9538e2] flex flex-col gap-4 items-center">
          <h1 className="text-center text-white text-[32px] font-bold mt-8">
            Purchased History
          </h1>
          <p className="w-[796px] text-center text-white text-4xl font-normal  leading-relaxed">
            Your Products is On the Way to Deliver
          </p>
        </div>
      </div>
      <div className="min-h-64">
        <Purchases></Purchases>
      </div>
    </div>
  );
};
