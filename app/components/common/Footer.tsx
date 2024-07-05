import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section>
      {/* copyright */}
      <footer className="bg-[#18171B] text-white px-6 py-3">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-5 lg:space-y-0 lg:flex gap-4 lg:gap-8 justify-between items-center">
          <p className="py- text-center lg:text-start">
            © {currentYear}{" "}
            <Link href="" className="hover:text-[#00B2A9] duration-150">
              {" "}
              Romekan Furnitures
            </Link>{" "}
            | All rights reserved
          </p>
          <span className="flex gap-4 items-center justify-center lg:justify-start">
            <Link
              href=""
              target="_blank"
              className="bg-romekan-blue rounded-full p-2 hover:scale-110 duration-150"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href=""
              target="_blank"
              className="bg-romekan-blue rounded-full p-2 hover:scale-110 duration-150"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
            <Link
              href=""
              target="_blank"
              className="bg-romekan-blue rounded-full p-2 hover:scale-110 duration-150"
            >
              <FaFacebookF className="w-5 h-5" />
            </Link>
            <Link
              href=""
              target="_blank"
              className="bg-romekan-blue rounded-full p-2 hover:scale-110 duration-150"
            >
              <FaXTwitter className="w-5 h-5" />
            </Link>
          </span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
