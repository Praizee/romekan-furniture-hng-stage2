"use client";

import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Shop all", path: "/" },
    { title: "Contact us", path: "" },
  ];

  return (
    <nav className="w-full border-b md:border-0 sticky top-0 bg-white backdrop-blur-md z-[999]">
      <div className="items-center max-w-screen-xl mx-auto md:flex">
        <div className="flex items-center  px-4 md:px-8 justify-between py-3 md:py-5 md:block">
          <Link href="/" className="">
            <span className="">ROMEKAN</span>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <IoClose className="h-6 w-6" />
              ) : (
                <IoMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
            state
              ? "flex justify-center text-center pt-12 absolute h-screen w-full p-4 backdrop-blur-lg bg-black/70 text-white"
              : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="md:text-[14px] text-[22px] text-white md:text-[#1E1C27] font-medium hover:text-romekan-text bg-romekan-blue duration-150 uppercase"
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block md:px-8">
          <Link
            href=""
            className="py-3 px-4 btn btn-ghost font-medium rounded-none text-[14px] text-white bg-romekan-blue hover:bg-romekan-blue/90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
