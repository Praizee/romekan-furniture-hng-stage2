"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/store/cartStore";

import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [state, setState] = useState(false);
  const router = useRouter();

  const cart = useCartStore((state) => state.cart);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Shop all", path: "/" },
    { title: "Contact us", path: "" },
  ];

  return (
    <nav className="w-full border-b md:border-0 sticky top-0 bg-white backdrop-blur-md z-[999]">
      <div className="items-center max-w-screen-xl mx-auto md:flex">
        <div className="flex items-center px-4 md:px-8 justify-between py-3 md:py-5 md:block">
          <Link href="/" className="lg:text-[24px] text-[18px] font-bold">
            ROME
            <span className="font-normal">KAN</span>
          </Link>
          <div className="md:hidden inline-flex gap-x-4 items-center">
            <button
              onClick={() => router.push("/cart")}
              type="button"
              title="Cart"
              className="active:scale-95 duration-150 relative"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                  stroke="#6D7D8B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="#6D7D8B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                  stroke="#6D7D8B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="absolute -top-2 -right-3 bg-romekan-blue rounded-full flex items-center justify-center text-[10px] font-semibold text-white size-[21px]">
                {cart.length}
                {/* {cart.length || 0} */}
              </p>
            </button>

            <button
              className="text-romekan-blue outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <IoClose className="size-6" />
              ) : (
                <IoMenu className="size-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
            state
              ? "flex flex-col gap-8 pt-12 absolute h-screen w-3/4 sm:w-1/2 p-4 backdrop-blur-lg bg-white rounded-r-3xl shadow-md text-[#777E90]"
              : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-8 md:space-y-0">
            {navigation.map((item, idx) => {
              if (idx === 2) {
                return (
                  <li
                    key={idx}
                    className="hidden md:block md:text-[14px] text-[22px] text-[#777E90] md:text-romekan-navbar font-medium hover:text-romekan-blue duration-150"
                  >
                    <Link
                      href={item.path}
                      className="group transition duration-300"
                    >
                      {item.title}
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-romekan-blue" />
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li
                    key={idx}
                    className="md:text-[14px] text-[22px] text-[#777E90] md:text-romekan-navbar font-medium hover:text-romekan-blue duration-150"
                  >
                    <Link
                      href={item.path}
                      className="group transition duration-300"
                    >
                      {item.title}
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-romekan-blue" />
                    </Link>
                  </li>
                );
              }
            })}
            <Link
              href=""
              className="md:text-[14px] text-[22px] text-[#777E90] md:text-romekan-navbar font-medium group transition duration-300 block md:hidden"
            >
              My Order
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-romekan-blue" />
            </Link>
          </ul>

          <div className="flex flex-col gap-6 pt-4 md:hidden md:text-[14px] text-[22px] text-[#777E90] md:text-romekan-navbar font-medium">
            <p className="text-[14px]">OTHER</p>
            <Link href="" className="group transition duration-300">
              Contact Us
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-romekan-blue" />
            </Link>
          </div>
        </div>

        <div className="hidden md:inline-flex items-center gap-x-8 md:px-8">
          {/* hidden cause there's no wishlist page */}
          <button
            type="button"
            title="Wishlist"
            className="active:scale-95 duration-150 hidden"
          >
            <svg
              width="19"
              height="23"
              viewBox="0 0 19 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.04171 0.625H15.9584C17.3792 0.625 18.5417 1.7125 18.5417 3.04167V22.375L9.50004 18.75L0.458374 22.375V3.04167C0.458374 1.7125 1.62087 0.625 3.04171 0.625ZM9.50004 16.1158L15.9584 18.75V4.25C15.9584 3.58542 15.3771 3.04167 14.6667 3.04167H4.33337C3.62296 3.04167 3.04171 3.58542 3.04171 4.25V18.75L9.50004 16.1158Z"
                fill="#6D7D8B"
              />
            </svg>
          </button>
          {/* hidden cause there's no wishlist page */}

          <button
            onClick={() => router.push("/cart")}
            type="button"
            title="Cart"
            className="active:scale-95 duration-150 relative"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                stroke="#6D7D8B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="#6D7D8B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                stroke="#6D7D8B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="absolute -top-2 -right-3 bg-romekan-blue rounded-full flex items-center justify-center text-[10px] font-semibold text-white size-[21px]">
              {cart.length}
              {/* {cart.length || 0} */}
            </p>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
