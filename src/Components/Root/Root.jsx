import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext([]);
function Root() {
  const [cartSelections, setCartSelections] = useState([]);
  const [wishlistSlection, setWishlistSlection] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  const handleCart = (cart) => {
    setCartSelections([...cartSelections, cart]);
    toast("Added Successfully in Cart");
  };

  const handleWishlist = (wish) => {
    setWishlistSlection([...wishlistSlection, wish]);
    toast("Added Successfully in wishlist");
  };

  const handleRemoveCart = (remove) => {
    const newSelections = cartSelections.filter(
      (select) => select.product_id !== remove.product_id
    );
    setCartSelections(newSelections);
    toast("Purchase Successfully from Cart");
  };
  console.log(cartSelections);

  const handleRemoveWish = (remove) => {
    const newSelections = wishlistSlection.filter(
      (select) => select.product_id !== remove.product_id
    );
    setWishlistSlection(newSelections);
    toast("Remove Successfully from wishlist");
  };

  const totalAmount = cartSelections.reduce((total, product) => {
    return total + product.price;
  }, 0);

  // const handlePurchase = () => {
  //   setCartSelections([]);
  // };

  const handleSortByPrice = () => {
    const sortedSelections = [...cartSelections].sort((a, b) => {
      return a.price - b.price; // Ascending order
    });
    setCartSelections(sortedSelections);
  };

  const handlePurchase = () => {
    setPurchaseHistory([...cartSelections, purchaseHistory]);
    setCartSelections([]);
    toast("Purchase Successfully");
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          cartSelections,
          handleCart,
          wishlistSlection,
          handleWishlist,
          handleRemoveCart,
          handleRemoveWish,
          totalAmount,
          handlePurchase,
          purchaseHistory,
          handleSortByPrice,
        }}
      >
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer />
      </CartContext.Provider>
    </div>
  );
}

export default Root;
