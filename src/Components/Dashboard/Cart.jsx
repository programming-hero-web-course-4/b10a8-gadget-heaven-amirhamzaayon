import { useContext } from "react";
import { CartContext } from "../Root/Root";

const Cart = ({ item }) => {
  const { handleRemoveCart } = useContext(CartContext);
  return (
    <>
      <div className="w-full">
        {/* CartBox */}
        <div className="items-center justify-center gap-4 p-8 bg-white border-2 rounded-2xl">
          <div className="flex items-center justify-start gap-8 ">
            <img
              src={item.product_image}
              className="w-[200px]  bg-[#d9d9d9] rounded-xl"
            />
            <div className="flex-col items-start justify-start w-full gap-4 ">
              <div className="self-stretch h-[78px] flex-col justify-start items-start gap-3 flex">
                <div className="flex items-start self-stretch justify-between">
                  <p className="text-[#09080e] text-2xl font-semibold">
                    {item.product_title}
                  </p>
                  <button
                    onClick={() => handleRemoveCart(item)}
                    className="w-9 h-9 bg-white rounded-full border border-[#ff0000] flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M15.4238 5L10.4238 10M10.4238 10L5.42383 15M10.4238 10L15.4238 15M10.4238 10L5.42383 5"
                        stroke="#FF0000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  {/* <div className="relative w-9 h-9">
                  <div className="w-9 h-9 left-0 top-0 absolute bg-white rounded-full border border-[#ff0000]" />
                  <div className="w-5 h-5 left-[8.42px] top-[8px] absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <circle
                        cx="18"       
                        cy="18" 
                        r="17.5"
                        fill="white"
                        stroke="#FF0000"
                      />
                    </svg>
                  </div>
                </div> */}
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
      </div>
    </>
  );
};
export default Cart;
