import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../Root/Root";
import { Link, useNavigate } from "react-router-dom";

const Carts = () => {
  const navigate = useNavigate();
  const handleClose = navigate("/Home/AllProduct");
  const { cartSelections, totalAmount, handlePurchase, handleSortByPrice } =
    useContext(CartContext);
  // console.log(cartSelections);
  return (
    <div>
      <div className="flex items-center justify-between mt-6 mb-6">
        <div>
          <p className="text-2xl font-bold text-center text-neutral-950">
            Cart
          </p>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-2xl font-bold text-center text-neutral-950">
            Total cost: ${totalAmount}
          </p>
          <div
            onClick={() => handleSortByPrice()}
            className="inline-flex gap-2.5 px-[22px] py-[13px] rounded-[32px] shadow-inner border justify-center items-center"
          >
            <button className="text-center text-[#9538e2] text-lg font-semibold">
              Sort by Price
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_13_2554)">
                <path
                  d="M4 10C4 10.5304 4.21071 11.0391 4.58579 11.4142C4.96086 11.7893 5.46957 12 6 12C6.53043 12 7.03914 11.7893 7.41421 11.4142C7.78929 11.0391 8 10.5304 8 10C8 9.46957 7.78929 8.96086 7.41421 8.58579C7.03914 8.21071 6.53043 8 6 8C5.46957 8 4.96086 8.21071 4.58579 8.58579C4.21071 8.96086 4 9.46957 4 10Z"
                  stroke="#8332C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 4V8"
                  stroke="#8332C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 12V20"
                  stroke="#8332C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 16C10 16.5304 10.2107 17.0391 10.5858 17.4142C10.9609 17.7893 11.4696 18 12 18C12.5304 18 13.0391 17.7893 13.4142 17.4142C13.7893 17.0391 14 16.5304 14 16C14 15.4696 13.7893 14.9609 13.4142 14.5858C13.0391 14.2107 12.5304 14 12 14C11.4696 14 10.9609 14.2107 10.5858 14.5858C10.2107 14.9609 10 15.4696 10 16Z"
                  stroke="#8332C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 4V14"
                  stroke="#8332C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 18V20"
                  stroke="#8332C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 7C16 7.53043 16.2107 8.03914 16.5858 8.41421C16.9609 8.78929 17.4696 9 18 9C18.5304 9 19.0391 8.78929 19.4142 8.41421C19.7893 8.03914 20 7.53043 20 7C20 6.46957 19.7893 5.96086 19.4142 5.58579C19.0391 5.21071 18.5304 5 18 5C17.4696 5 16.9609 5.21071 16.5858 5.58579C16.2107 5.96086 16 6.46957 16 7Z"
                  stroke="#8332C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 4V5"
                  stroke="#8332C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 9V20"
                  stroke="#8332C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13_2554">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <button
            className={`px-[26px] py-[13px] ${
              cartSelections.length === 0
                ? " bg-[#9538e2]/[.5]"
                : "bg-[#9538e2] "
            } text-white rounded-[32px] shadow-inner justify-center items-center`}
            onClick={() => {
              document.getElementById("my_modal_5").showModal();
              handlePurchase();
              handleClose();
            }}
            disabled={cartSelections.length === 0}
          >
            Purchase
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="text-lg font-bold">Congratulation!</h3>
              <p className="py-4">Your Purchased the Products Successfully</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <Link className="btn">Close</Link>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        {cartSelections?.map((item, index) => (
          <Cart key={index} item={item}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Carts;
