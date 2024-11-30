import { useContext } from "react";
import Wishlist from "./Wishlist";
import { CartContext } from "../Root/Root";

function Wishlists() {
  const { handleCart, wishlistSlection } = useContext(CartContext);
  console.log(wishlistSlection);
  return (
    <div>
      <h1 className="mt-4 text-2xl font-bold ">Wishlist</h1>
      <div className="flex flex-col items-center gap-8">
        {wishlistSlection.map((wish, index) => (
          <Wishlist key={index} wish={wish} handleCart={handleCart}></Wishlist>
        ))}
      </div>
    </div>
  );
}

export default Wishlists;
