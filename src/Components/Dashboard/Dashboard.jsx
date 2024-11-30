import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/Dashboard/Carts");
  }, [navigate]);
  return (
    <div>
      <div className="w-full h-[250px] bg-[#9538e2] flex flex-col gap-4 items-center">
        <h1 className="text-center text-white text-[32px] font-bold mt-8">
          Dashboard
        </h1>
        <p className="w-[796px] text-center text-white text-base font-normal  leading-relaxed">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-6">
          <button
            className="px-16 py-4 font-bold bg-white rounded-full"
            onClick={() => navigate("Carts")}
          >
            Cart
          </button>
          <button
            className="px-16 py-4 font-bold bg-white rounded-full"
            onClick={() => navigate("Whislists")}
          >
            wishlist
          </button>
        </div>
      </div>
      <div className="w-8/12 mx-auto min-h-64">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Dashboard;
