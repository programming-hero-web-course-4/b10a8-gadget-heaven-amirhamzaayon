import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { product_title, product_image, price } = product;
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/ProductDetails", {
      state: { product },
    });
  };
  return (
    <div className="  min-h-[340px] flex-col justify-start items-start gap-6 inline-flex bg-white rounded-2xl p-5">
      <img
        src={product_image}
        className="w-auto h-[181px] bg-[#d9d9d9] rounded-xl"
      />
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="flex flex-col items-start justify-start gap-3">
          <p className="text-[#09080e] text-2xl font-semibold ">
            {product_title}
          </p>
          <p className="text-[#09080e]/60 text-xl font-medium ">
            {" "}
            Price: ${price}
          </p>
        </div>
        <button
          onClick={handleNavigation}
          className="px-[22px] py-[13px] rounded-[32px] shadow-inner border justify-center items-center gap-2.5 inline-flex"
        >
          <p className="text-center text-[#9538e2] text-lg font-semibold leading-relaxed">
            View Details
          </p>
        </button>
      </div>
    </div>
  );
};

export default Product;
