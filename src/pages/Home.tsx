
import React from "react";
import Vehicles from "./Vehicles";

const Home: React.FC = () => {
  return (
    <div className="text-center mt-10 bg-[#00000099] w-full min-h-[925px] max-h-[2032px] overflow-hidden">
      <div className="flex flex-col items-center justify-center min-h-[500px] max-h-[1000px] space-y-10">
        <h1 className="text-white text-3xl font-bold text-center p-10">
          Performance in motion
        </h1>

        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center w-[761px]">
          Soft trims and <span className="text-blue-500">NVH solutions</span>
          <br />
        </h1>
        <span className="text-white text-3xl md:text-4xl lg:text-5xl text-center" >for seamless rides</span>
      </div>

      <Vehicles/>
    </div>
  );
};

export default Home;
