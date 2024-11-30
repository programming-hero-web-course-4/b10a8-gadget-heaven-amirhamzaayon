import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to AllProduct if no specific category is selected
    navigate("/Home/AllProduct");
  }, [navigate]);
  return (
    <>
      <div className="mx-auto sm:w-10/12 ">
        <div className="h-[1085px]">
          <div className="w-full h-[694px]  bg-[#9538e2] rounded-[32px] border-8 border-[#f6f6f6]  mx-auto py-6">
            {/* <Navbar
              className={`text-white mb-10`}
              handleNavbar={handleNavbar}
            ></Navbar> */}
            <div className="flex flex-col items-center gap-6">
              <h1 className="sm:w-[1120px] text-center text-white sm:text-[56px] text-[32px] font-bold sm:leading-[72px]">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
              <p className="sm:w-[796px] text-center text-white text-base font-normal  leading-relaxed">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
              <button className="h-14 px-[30px] py-[15px] bg-white rounded-[32px] shadow-inner justify-center items-center gap-2.5 inline-flex">
                <p className="text-center text-[#9538e2] text-xl font-bold leading-relaxed">
                  Shop Now
                </p>
              </button>
              <div className="sm:w-[1110px] sm:h-[611px] p-6 bg-white/30 rounded-[32px] border-2 border-white flex-col justify-start items-start gap-2.5 inline-flex ">
                <img
                  className="self-stretch h-[563px] rounded-3xl"
                  src="../../assets/banner.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default Home;
