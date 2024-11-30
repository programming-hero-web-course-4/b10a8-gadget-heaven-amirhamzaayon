import React, { useContext, useState } from "react";
import { CartContext } from "./Root/Root";
import { Purchase } from "./Purchase";

export const Purchases = () => {
  const { purchaseHistory } = useContext(CartContext);
  return (
    <div className="flex flex-col items-center gap-6 mt-6 ">
      {purchaseHistory?.map((item, index) => {
        console.log("Rendering item:", item);
        return <Purchase key={index} item={item}></Purchase>;
      })}
    </div>
  );
};
