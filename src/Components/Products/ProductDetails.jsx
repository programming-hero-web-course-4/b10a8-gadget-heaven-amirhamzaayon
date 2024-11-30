import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../Root/Root";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;
  const { wishlistSlection, handleCart, handleWishlist } =
    useContext(CartContext);

  const isDisabled = wishlistSlection.find(
    (item) => item.product_id === product.product_id
  );

  return (
    <div className="h-[740px]">
      <div className="w-full h-[375px] bg-[#9538e2] flex flex-col gap-8 items-center">
        <div className="mt-6">
          <h1 className="text-center text-white text-[32px] font-bold pb-4 ">
            Product Details
          </h1>
          <p className="w-[796px] text-center text-white text-base font-normal  leading-relaxed">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="w-[1216px] h-[567px] p-8 bg-white border-2 rounded-3xl flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="inline-flex items-start self-stretch justify-start gap-8">
            <img
              src={product.product_image}
              className="w-[424.31px] self-stretch bg-[#ebebeb] rounded-2xl"
            />
            <div className="inline-flex flex-col items-start justify-start gap-4">
              <div className="flex flex-col items-start justify-start gap-4">
                <div className="flex flex-col items-start justify-start gap-3">
                  <p className="text-[#09080e] text-[28px] font-semibold ">
                    {product.product_title}
                  </p>
                  <p className="text-[#09080e]/80 text-xl font-semibold  leading-[30px]">
                    Price: ${product.price}
                  </p>
                </div>
                <div className="px-3.5 py-[7px] bg-[#309c08]/10 rounded-[32px] border border-[#309c08] justify-start items-center inline-flex">
                  <p className="text-[#309c08] text-sm font-medium ">
                    {product.availability ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
                <p className="text-[#09080e]/60 text-lg font-normal  leading-[30px]">
                  {product.description}
                </p>
                <div className="self-stretch h-[162px] flex-col justify-start items-start gap-3 flex">
                  <p className="text-[#09080e] text-lg font-bold  leading-[30px]">
                    Specification:
                  </p>
                  <div className="text-[#09080e]/60 text-lg font-normal  leading-[30px]">
                    {product.specification.map((spec, index) => (
                      <p key={index}>
                        {index + 1}. {spec}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="self-stretch h-[74px] flex-col justify-start items-start gap-3 flex">
                  <p className="text-[#09080e] text-lg font-bold  leading-[30px]">
                    Rating ⭐{" "}
                  </p>
                  <div className="inline-flex items-center justify-start gap-4">
                    <div className="flex items-start justify-start gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M12.3094 17.75L6.13741 20.995L7.31641 14.122L2.31641 9.25501L9.21641 8.25501L12.3024 2.00201L15.3884 8.25501L22.2884 9.25501L17.2884 14.122L18.4674 20.995L12.3094 17.75Z"
                            fill={
                              index < Math.floor(product.rating)
                                ? "#FFD700"
                                : "#D3D3D3"
                            } // Gold for filled stars, Gray for empty stars
                            stroke="#09080F"
                            strokeOpacity="0.7"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ))}
                    </div>
                    <div className="px-3.5 py-[7px] bg-[#09080f]/5 rounded-[32px] justify-start items-center flex">
                      <p className="text-[#09080e]/80 text-sm font-medium ">
                        4.8
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-start justify-start gap-4">
                <button
                  onClick={() => handleCart(product)}
                  className="px-[22px] py-[11px] bg-[#9538e2] rounded-[32px] shadow-inner justify-center items-center gap-2.5 flex"
                >
                  <p className="text-lg font-bold leading-relaxed text-center text-white">
                    Add To Card
                  </p>
                  <div className="relative w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_13_2378)">
                        <path
                          d="M4.30957 19C4.30957 19.5304 4.52028 20.0391 4.89536 20.4142C5.27043 20.7893 5.77914 21 6.30957 21C6.84 21 7.34871 20.7893 7.72378 20.4142C8.09886 20.0391 8.30957 19.5304 8.30957 19C8.30957 18.4696 8.09886 17.9609 7.72378 17.5858C7.34871 17.2107 6.84 17 6.30957 17C5.77914 17 5.27043 17.2107 4.89536 17.5858C4.52028 17.9609 4.30957 18.4696 4.30957 19Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.3096 19C15.3096 19.5304 15.5203 20.0391 15.8954 20.4142C16.2704 20.7893 16.7791 21 17.3096 21C17.84 21 18.3487 20.7893 18.7238 20.4142C19.0989 20.0391 19.3096 19.5304 19.3096 19C19.3096 18.4696 19.0989 17.9609 18.7238 17.5858C18.3487 17.2107 17.84 17 17.3096 17C16.7791 17 16.2704 17.2107 15.8954 17.5858C15.5203 17.9609 15.3096 18.4696 15.3096 19Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.3096 17H6.30957V3H4.30957"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.30957 5L20.3096 6L19.3096 13H6.30957"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13_2378">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.30957)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </button>
                <button
                  onClick={() => handleWishlist(product)}
                  disabled={isDisabled}
                  className="h-12 px-[22px] py-3 rounded-[32px] shadow-inner border border-[#09080f]/5 justify-center items-center gap-2.5 flex"
                >
                  <div className="relative w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_13_2385)">
                        <path
                          d="M19.8094 12.572L12.3094 20L4.80938 12.572C4.31469 12.0906 3.92503 11.512 3.66493 10.8726C3.40484 10.2333 3.27994 9.54694 3.29812 8.85693C3.3163 8.16691 3.47715 7.48813 3.77054 6.86333C4.06394 6.23853 4.48352 5.68125 5.00287 5.22657C5.52222 4.7719 6.13009 4.42968 6.78819 4.22147C7.4463 4.01327 8.14039 3.94358 8.82675 4.0168C9.51311 4.09001 10.1769 4.30455 10.7763 4.6469C11.3756 4.98925 11.8976 5.45199 12.3094 6.00599C12.7229 5.45602 13.2455 4.99731 13.8445 4.6586C14.4434 4.31988 15.1059 4.10844 15.7903 4.03751C16.4748 3.96658 17.1665 4.03769 17.8222 4.24639C18.4778 4.45508 19.0834 4.79687 19.6009 5.25036C20.1185 5.70385 20.5368 6.25928 20.8298 6.88189C21.1228 7.50449 21.2841 8.18088 21.3037 8.8687C21.3233 9.55653 21.2006 10.241 20.9435 10.8792C20.6864 11.5175 20.3003 12.0958 19.8094 12.578"
                          stroke={isDisabled ? "#B0B0B0" : "#3A3A3A"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13_2385">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.30957)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
