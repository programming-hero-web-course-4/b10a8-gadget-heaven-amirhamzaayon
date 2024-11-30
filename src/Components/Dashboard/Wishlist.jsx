import { useContext } from "react";
import { CartContext } from "../Root/Root";

function Wishlist({ wish }) {
  const { handleCart, handleRemoveWish } = useContext(CartContext);
  return (
    <div>
      <div className="inline-flex items-center justify-center gap-4 p-8 w-75% bg-white border-2 rounded-2xl">
        <div className="flex items-center justify-start gap-8 ">
          <img
            src={wish.product_image}
            className="w-[200px]  bg-[#d9d9d9] rounded-xl"
          />
          <div className="inline-flex flex-col items-start justify-start gap-4 ">
            <div className="self-stretch h-[78px] flex-col justify-start items-start gap-3 flex">
              <div className="inline-flex items-start self-stretch justify-between">
                <p className="text-[#09080e] text-2xl font-semibold">
                  {wish.product_title}
                </p>
                <button
                  onClick={() => handleRemoveWish(wish)}
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
                Description: {wish.description}
              </p>
            </div>
            <p className="text-[#09080e]/80 text-xl font-semibold  leading-[30px]">
              Price: ${wish.price}
            </p>
            <button
              onClick={() => handleCart(wish)}
              className="h-[52px] px-[26px] py-[13px] bg-[#9538e2] rounded-[32px] shadow-inner justify-center items-center gap-2.5 inline-flex"
            >
              <p className="text-lg font-medium leading-relaxed text-center text-white">
                Add to Card
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
