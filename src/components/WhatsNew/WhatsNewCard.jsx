import React from "react";

const WhatsNewCard = ({ image, title, description, icon }) => {
  return (
    <>
      <div className=" sm:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <div>
            <img
              src={image}
              alt=""
              className="w-full h-[200px] object-cover rounded-xl"
            />
          </div>
          <div className="sm:col-span-2">
            <div className="inline-flex py-1 px-4 items-center gap-2 bg-gray-400/20 text-white rounded-md mb-3">
              {icon}
              PC
            </div>
            <h1>{title}</h1>
            <p className="text-sm text-white/70">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNewCard;
