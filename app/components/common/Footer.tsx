import React from "react";
import Image from "next/image";
import Link from "next/link";

import TikTok from "@/public/assets/images/tiktok.png";
import Instagram from "@/public/assets/images/instagram.png";
import Twitter from "@/public/assets/images/twitter.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavs = [
    {
      label: "",
      items: [
        {
          href: "",
          name: "Home",
        },
        {
          href: "",
          name: "Collections",
        },
        {
          href: "",
          name: "Brand",
        },
        {
          href: "",
          name: "About Us",
        },
      ],
    },
    {
      label: "",
      items: [
        {
          href: "",
          name: "Contact Us",
        },
        {
          href: "",
          name: "525-252-4244",
        },
        {
          href: "",
          name: "sehlvet@gmail.com",
        },
        {
          href: "",
          name: "www.selvet.com",
        },
      ],
    },
  ];

  return (
    <section>
      {/* copyright */}
      <footer className="bg-[#FAFAFA] text-romekan-text-300 px-4 lg:px-8 py-12 lg:py-16 space-y-8 lg:space-y-0">
        <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row gap-8 md:gap-12 justify-between ">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="lg:text-[24px] text-[18px] font-bold text-black w-max"
            >
              ROME
              <span className="font-normal">KAN</span>
            </Link>

            {/* copyright */}
            <p className="hidden md:block max-w-xs lg:max-w-full">
              © {currentYear}{" "}
              <Link
                href="https://stephen-adeniji.is-a.dev/"
                className="hover:text-romekan-blue duration-150"
              >
                {" "}
                Romekan Furnitures
              </Link>
              . All rights reserved
            </p>

            {/* social links */}
            <span className="hidden md:flex gap-4">
              <Link
                href=""
                // target="_blank"
                className="hover:scale-110 duration-150"
              >
                <Image src={TikTok} alt="TikTok" />
              </Link>
              <Link
                href=""
                // target="_blank"
                className="hover:scale-110 duration-150"
              >
                <Image src={Instagram} alt="Instagram" />
              </Link>
              <Link
                href=""
                // target="_blank"
                className="hover:scale-110 duration-150"
              >
                <Image src={Twitter} alt="Twitter" />
              </Link>
            </span>
          </div>

          {footerNavs.map((item, idx) => (
            <ul className="space-y-4 hidden md:block" key={idx}>
              {/* <h4 className="font-semibold sm:pb-2">{item.label}</h4> */}
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <Link
                    href={el.href}
                    className="duration-150 hover:underline font-medium"
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          <div className="flex md:hidden gap-8 justify-between">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                {/* <h4 className="font-semibold sm:pb-2">{item.label}</h4> */}
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <Link
                      href={el.href}
                      className="duration-150 hover:underline font-medium"
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* mobile copyright and social links */}
        <div className="flex flex-col md:hidden gap-4 justify-center">
          {/* copyright */}
          <p className="text-center lg:text-start">
            © {currentYear}{" "}
            <Link
              href="https://stephen-adeniji.is-a.dev/"
              className="hover:text-romekan-blue duration-150"
            >
              {" "}
              Romekan Furnitures
            </Link>
            . All rights reserved
          </p>

          {/* social links */}
          <span className="flex gap-4 w-max mx-auto">
            <Link
              href=""
              // target="_blank"
              className="hover:scale-110 duration-150"
            >
              <Image src={TikTok} alt="TikTok" />
            </Link>
            <Link
              href=""
              // target="_blank"
              className="hover:scale-110 duration-150"
            >
              <Image src={Instagram} alt="Instagram" />
            </Link>
            <Link
              href=""
              // target="_blank"
              className="hover:scale-110 duration-150"
            >
              <Image src={Twitter} alt="Twitter" />
            </Link>
          </span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
