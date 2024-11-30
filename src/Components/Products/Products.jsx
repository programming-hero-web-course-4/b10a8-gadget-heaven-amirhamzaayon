import { useEffect, useState } from "react";
import Product from "./Product";
import ProductMenu from "./ProductMenu";
import { useParams } from "react-router-dom";

const Products = () => {
  // const location = useLocation();
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  console.log(id);

  // useEffect(() => {
  //   fetch("./productdata.json")
  //     .then((res) => res.json())
  //     .then((data) => getCategoryData(data, id));
  // }, [id]);

  useEffect(() => {
    if (!id) return;
    fetch("/productdata.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => getCategoryData(data, id))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  // const getCategoryData = (data, id) => {
  //   const allProducts = data.flatMap((item) => item.products);
  //   const category = data.find((item) => item.category === id);
  //   console.log(allProducts);
  //   return category ? setProducts(category.products) : setProducts(allProducts);
  // };
  // console.log(products);

  const getCategoryData = (data, id) => {
    const allProducts = data.flatMap((item) => item.products);
    const category = data.find((item) => item.category === id);

    console.log("id:", id); // Check the id being passed
    console.log("All Products:", allProducts); // Log all products
    console.log("Category:", category); // Log the found category

    if (category) {
      setProducts(category.products); // Set products if category is found
    } else {
      setProducts(allProducts); // Otherwise, set all products
    }
  };
  console.log(products);

  return (
    <div className="w-10/12 mx-auto bg-[#F6F6F6] p-12 rounded-2xl">
      <h1 className="text-center text-neutral-950 text-[40px] font-bold mb-12">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid gap-6 sm:grid-cols-4">
        <div className="sm:row-span-5 ">
          <ProductMenu></ProductMenu>
        </div>
        {products.map((product) => (
          <Product product={product} key={product.product_id}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
