import React from "react";
import CoverImg from "../../assets/hero/hero_cover.jpg";
import HeroPng from "../../assets/hero/hero_png.png";

const bgImage = {
  backgroundImage: `url(${CoverImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  return (
    <>
      <div style={bgImage} className="min-h-[550px] w-full overflow-hidden ">
        <div className="bg-primary/80 bg-gradient-to-t from-primary from-10% to-transparent to-90% flex items-center min-h-[550px]">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              {/* content section */}
              <div className="text-center sm:text-left pt-10 sm:pt-0">
                <p className="text-lg text-blue-500 font-semibold">
                  Discover Games You will Love
                </p>
                <h1 className="text-5xl font-bold text-white">
                  Read About Games That You Enjoy
                </h1>
                <button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-800 inline-block px-6 py-3 rounded-2xl font-semibold text-white">
                  Start Exploring
                </button>
              </div>

              {/* image section */}
              <div>
                <img
                  src={HeroPng}
                  alt="Not found"
                  className="w-full sm:scale-125 md:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
