import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="bg-primary ">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex gap-8 items-center text-white">
              <a href="#">
                <img src={Logo} alt="Logo" className="w-16" />
              </a>
              <div className="hidden sm:block">
                <ul className="flex gap-6 items-center">
                  <li>
                    <a href="#" className="cursor-pointer">
                      Explore
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer">
                      Release
                    </a>
                  </li>
                  <li className="relative">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Search games.."
                      className="bg-gray-700/50 px-4 py-2 rounded-2xl"
                    />
                    <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-white">
              <ul className="flex gap-4 items-center">
                <li>
                  <a
                    href="#"
                    className="bg-gray-700 inline-block px-6 py-3 rounded-2xl font-semibold"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 inline-block px-6 py-3 rounded-2xl font-semibold"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
