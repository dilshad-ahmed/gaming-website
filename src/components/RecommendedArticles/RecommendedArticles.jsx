import React from "react";
import CharacterPng from "../../assets/characters/character2.png";
import Game1 from "../../assets/game/game1.jpg";
import Game2 from "../../assets/game/game2.jpg";
import Game3 from "../../assets/game/game3.jpg";

const game1Cover = {
  backgroundImage: `url(${Game1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "350px",
};
const game2Cover = {
  backgroundImage: `url(${Game2})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};
const game3Cover = {
  backgroundImage: `url(${Game3})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const RecommendedArticles = () => {
  return (
    <>
      <section className="py-10 bg-primary text-white w-full overflow-hidden">
        <div className="container relative hidden sm:block">
          {/* Header section */}
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Recommended Articles</h1>
            <button className="bg-gray-400/50 text-white rounded-xl px-4 py-2">
              View All
            </button>
          </div>
          {/* Recommended Articles Card section */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-3 sm:grid-rows-2 gap-4 mt-8">
              <div
                style={game1Cover}
                className="row-span-1 sm:row-span-2 sm:col-span-2 bg-red-400 h-[350px] rounded-xl relative"
              >
                <div className="bg-black/20 h-full w-full">
                  <div className="absolute bottom-0 left-0 w-full">
                    <div className="flex justify-center items-center gap-4 bg-gradient-to-t from-primary to-transparent">
                      <div>
                        <img
                          src={Game2}
                          alt=""
                          className="h-[140px] min-w-[110px] object-cover rounded-xl"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-xl">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Voluptates, quidem! Similique tempora velit{" "}
                        </h1>
                        <p className="text-sm text-white/80">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={game2Cover}
                className="sm:row-span-1 bg-orange-400 rounded-xl relative"
              >
                <div className="bg-black/20 h-full w-full">
                  <div className="absolute bottom-0 left-0 w-full">
                    <div className="flex justify-center items-center gap-4 bg-gradient-to-t from-primary to-transparent">
                      <div>
                        <img
                          src={Game2}
                          alt=""
                          className="h-[80px] min-w-[60px] object-cover rounded-xl"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-xl">
                          Lorem ipsum dolor sit, amet consectetur
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={game3Cover}
                className="sm:row-span-1 bg-blue-500 rounded-xl relative"
              >
                <div className="bg-black/20 h-full w-full">
                  <div className="absolute bottom-0 left-0 w-full">
                    <div className="flex justify-center items-center gap-4 bg-gradient-to-t from-primary to-transparent">
                      <div>
                        <img
                          src={Game2}
                          alt=""
                          className="h-[80px] min-w-[60px] object-cover rounded-xl"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-xl">
                          Lorem ipsum dolor sit, amet consectetur
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Character Png  */}
          <img
            src={CharacterPng}
            alt="Not found"
            className="absolute right-[-160px] top-[50px] z-[1] h-[340px]"
          />
        </div>
      </section>
    </>
  );
};

export default RecommendedArticles;
