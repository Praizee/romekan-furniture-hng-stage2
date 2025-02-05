"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/app/store/cartStore";
import FadeUp from "@/app/components/common/FadeUp";

import Product1 from "@/public/assets/images/product-1.png";
import Product2 from "@/public/assets/images/product-2.png";
import Product3 from "@/public/assets/images/product-3.png";
import Product4 from "@/public/assets/images/product-4.png";
import Product5 from "@/public/assets/images/product-5.png";
import Product6 from "@/public/assets/images/product-6.png";
import Product7 from "@/public/assets/images/product-7.png";
import Product8 from "@/public/assets/images/product-8.png";
import Product9 from "@/public/assets/images/product-9.png";
import Product10 from "@/public/assets/images/product-10.png";
import Product11 from "@/public/assets/images/product-11.png";
import Product12 from "@/public/assets/images/product-12.png";

import Bed1 from "@/public/assets/images/bed-1.png";
import Bed2 from "@/public/assets/images/bed-2.png";
import Bed3 from "@/public/assets/images/bed-3.png";
import Bed4 from "@/public/assets/images/bed-4.png";
import Bed5 from "@/public/assets/images/bed-5.png";

import DiningSet1 from "@/public/assets/images/dining-set-1.png";
import DiningSet2 from "@/public/assets/images/dining-set-2.png";
import DiningSet3 from "@/public/assets/images/dining-set-3.png";
import DiningSet4 from "@/public/assets/images/dining-set-4.png";

import TVConsole1 from "@/public/assets/images/tv-console-1.png";
import TVConsole2 from "@/public/assets/images/tv-console-2.png";
import TVConsole3 from "@/public/assets/images/tv-console-3.png";
import TVConsole4 from "@/public/assets/images/tv-console-4.png";

interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  imageSrc: string;
  discount: string;
}

const ProductListing: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>("1");
  const [selectedCategory, setSelectedCategory] = useState<
    "Chairs" | "Beds" | "Dining sets" | "TV consoles"
  >("Chairs");

  const addToCart = useCartStore((state) => state.addToCart);

  const handleButtonClick = (value: string) => {
    setSelectedButton(value);
  };

  const handleCategoryChange = (
    category: "Chairs" | "Beds" | "Dining sets" | "TV consoles"
  ) => {
    setSelectedCategory(category);
  };

  // Categories and their products
  const categories = {
    Chairs: [
      {
        id: 1,
        name: "Black Party Chair",
        price: 49,
        discountPrice: 24,
        imageSrc: Product1.src,
        discount: "",
      },
      {
        id: 2,
        name: "White classy chair",
        price: 64,
        discountPrice: 130,
        imageSrc: Product2.src,
        discount: "-35%",
      },
      {
        id: 3,
        name: "BRed Party Chair",
        price: 54,
        discountPrice: 124,
        imageSrc: Product3.src,
        discount: "",
      },
      {
        id: 4,
        name: "Krisgold Armgold",
        price: 49,
        discountPrice: 234,
        imageSrc: Product4.src,
        discount: "",
      },
      {
        id: 5,
        name: "White classy chair",
        price: 49,
        discountPrice: 240,
        imageSrc: Product5.src,
        discount: "",
      },
      {
        id: 6,
        name: "Comfy chair",
        price: 49,
        discountPrice: 264,
        imageSrc: Product6.src,
        discount: "-35%",
      },
      {
        id: 7,
        name: "Black Party Chair",
        price: 49,
        discountPrice: 224,
        imageSrc: Product7.src,
        discount: "",
      },
      {
        id: 8,
        name: "White classy chair",
        price: 69,
        discountPrice: 130,
        imageSrc: Product8.src,
        discount: "-35%",
      },
      {
        id: 9,
        name: "Black Party Chair",
        price: 54,
        discountPrice: 124,
        imageSrc: Product9.src,
        discount: "",
      },
      {
        id: 10,
        name: "Krisgold Armgold",
        price: 49,
        discountPrice: 224,
        imageSrc: Product10.src,
        discount: "",
      },
      {
        id: 11,
        name: "White classy chair",
        price: 89,
        discountPrice: 204,
        imageSrc: Product11.src,
        discount: "",
      },
      {
        id: 12,
        name: "Comfy chair",
        price: 49,
        discountPrice: 124,
        imageSrc: Product12.src,
        discount: "-35%",
      },
    ],
    Beds: [
      {
        id: 1,
        name: "Luxury King Bed",
        price: 49,
        discountPrice: 24,
        imageSrc: Bed1.src,
        discount: "",
      },
      {
        id: 2,
        name: "White cozy Bed",
        price: 64,
        discountPrice: 130,
        imageSrc: Bed2.src,
        discount: "-35%",
      },
      {
        id: 3,
        name: "Rustic Wooden Bed",
        price: 54,
        discountPrice: 124,
        imageSrc: Bed3.src,
        discount: "",
      },
      {
        id: 4,
        name: "Vintage Queen Bed",
        price: 49,
        discountPrice: 234,
        imageSrc: Bed4.src,
        discount: "",
      },
      {
        id: 5,
        name: "Modern Classy Bed",
        price: 49,
        discountPrice: 240,
        imageSrc: Bed5.src,
        discount: "",
      },
    ],
    "Dining sets": [
      {
        id: 1,
        name: "Classic Oak Dining Set",
        price: 49,
        discountPrice: 24,
        imageSrc: DiningSet1.src,
        discount: "",
      },
      {
        id: 2,
        name: "Modern Dining Set",
        price: 64,
        discountPrice: 130,
        imageSrc: DiningSet2.src,
        discount: "-35%",
      },
      {
        id: 3,
        name: "Elegant Marble Dining Set",
        price: 54,
        discountPrice: 124,
        imageSrc: DiningSet3.src,
        discount: "",
      },
      {
        id: 4,
        name: "Contemporary Metal Dining Set",
        price: 49,
        discountPrice: 234,
        imageSrc: DiningSet4.src,
        discount: "",
      },
    ],
    "TV consoles": [
      {
        id: 1,
        name: "Modern Media Stand",
        price: 49,
        discountPrice: 24,
        imageSrc: TVConsole1.src,
        discount: "",
      },
      {
        id: 2,
        name: "Rustic TV Cabinet",
        price: 64,
        discountPrice: 130,
        imageSrc: TVConsole2.src,
        discount: "-35%",
      },
      {
        id: 3,
        name: "Sleek TV Console",
        price: 54,
        discountPrice: 124,
        imageSrc: TVConsole3.src,
        discount: "",
      },
      {
        id: 4,
        name: "Minimalist TV Unit",
        price: 49,
        discountPrice: 234,
        imageSrc: TVConsole4.src,
        discount: "",
      },
    ],
  };

  const currentCategoryProducts =
    categories[selectedCategory as keyof typeof categories];

  return (
    <section className="mx-auto max-w-screen-xl px-4 md:px-8 py-12 lg:py-16">
      <div className="flex flex-col gap-[44px]">
        <div className="flex gap-[44px] lg:gap-[77px] justify-between items-center">
          {/* mobile options */}
          <div className="relative lg:hidden min-w-32">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-5 h-5 my-auto text-romekan-blue right-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <select
              title="products"
              className="w-full px-3 py-2 text-sm text-romekan-blue bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-romekan-blue focus:ring-2"
              value={selectedCategory}
              onChange={(e) =>
                handleCategoryChange(
                  e.target.value as
                    | "Chairs"
                    | "Beds"
                    | "Dining sets"
                    | "TV consoles"
                )
              }
            >
              {Object.keys(categories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* desktop options/tabs */}
          <span className="hidden lg:flex gap-[44px] lg:gap-[77px] text-[#6A6A6A]">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  handleCategoryChange(
                    category as
                      | "Chairs"
                      | "Beds"
                      | "Dining sets"
                      | "TV consoles"
                  )
                }
                className={`text-base font-medium duration-150 ${
                  selectedCategory === category
                    ? "text-2xl text-romekan-blue"
                    : ""
                }`}
              >
                {category}
              </button>
            ))}
          </span>

          <button
            type="button"
            className="active:scale-95 duration-150 border border-[#00000080] rounded-[4px] px-[24px] py-[8px] lg:px-[48px] lg:py-[16px] text-[14px] lg:text-[18px]"
          >
            Filter
          </button>
        </div>

        {/* products list */}
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 gap-y-20 w-max mx-auto lg:w-full">
            {currentCategoryProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-4 max-w-[160px] lg:max-w-fit"
              >
                <div className="relative">
                  <span className="bg-[#F9F9F9] rounded-[4px] w-[154px] h-[167px] lg:w-[387px] lg:h-[381px] lg:max-w-full lg:max-h-full flex justify-center items-center">
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      width={250}
                      height={271}
                      className="hover:scale-110 duration-200 max-w-[76px] max-h-[87px] w-auto h-auto lg:max-w-full lg:max-h-full"
                    />
                  </span>
                  {product.discount && (
                    <p className="bg-romekan-brown text-white px-[12px] py-[4px] rounded-[4px] text-[12px] w-max absolute top-0 right-0 hidden lg:block">
                      {product.discount}
                    </p>
                  )}
                </div>

                <div>
                  <p className="text-black text-[14px] lg:text-[18px]">
                    {product.name}
                  </p>
                  <span className="flex gap-8 justify-between items-center">
                    <span className="flex gap-2 items-center">
                      <p className="text-black text-base lg:text-[24px] font-medium">
                        ${product.price}
                      </p>
                      <p className="text-[#BABABA] text-[10px] lg:text-[20px] font-medium">
                        ${product.discountPrice}
                      </p>
                    </span>

                    <button
                      onClick={() => addToCart(product)}
                      // onClick={() => router.push("/cart")}
                      type="button"
                      title="Add to cart"
                      className="bg-romekan-blue size-[20px] lg:size-[43px] p-0 lg:p-[8px] rounded-full flex justify-center items-center duration-150 active:scale-95"
                    >
                      <svg
                        className="lg:hidden block"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 3H11L9.5 8H3L1.5 3ZM1.5 3L1.125 1.75M4.996 5.5H5.996M5.996 5.5H6.996M5.996 5.5V4.5M5.996 5.5V6.5M5.5 9.75C5.5 9.94891 5.42098 10.1397 5.28033 10.2803C5.13968 10.421 4.94891 10.5 4.75 10.5C4.55109 10.5 4.36032 10.421 4.21967 10.2803C4.07902 10.1397 4 9.94891 4 9.75M8.5 9.75C8.5 9.94891 8.42098 10.1397 8.28033 10.2803C8.13968 10.421 7.94891 10.5 7.75 10.5C7.55109 10.5 7.36032 10.421 7.21967 10.2803C7.07902 10.1397 7 9.94891 7 9.75"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        className="hidden lg:block"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 6.5H22L19 16.5H6L3 6.5ZM3 6.5L2.25 4M9.992 11.5H11.992M11.992 11.5H13.992M11.992 11.5V9.5M11.992 11.5V13.5M11 20C11 20.3978 10.842 20.7794 10.5607 21.0607C10.2794 21.342 9.89782 21.5 9.5 21.5C9.10218 21.5 8.72064 21.342 8.43934 21.0607C8.15804 20.7794 8 20.3978 8 20M17 20C17 20.3978 16.842 20.7794 16.5607 21.0607C16.2794 21.342 15.8978 21.5 15.5 21.5C15.1022 21.5 14.7206 21.342 14.4393 21.0607C14.158 20.7794 14 20.3978 14 20"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* pagination */}
        <div className="w-max mx-auto flex gap-8 pt-8 lg:pt-16">
          {["1", "2", "3", "4", "5"].map((number) => (
            <button
              key={number}
              type="button"
              onClick={() => handleButtonClick(number)}
              className={`focus:bg-romekan-blue ${
                selectedButton === number
                  ? "bg-romekan-blue text-white"
                  : "bg-white text-black"
              } size-[30px] lg:size-[47px] border border-romekan-blue focus:border lg:text-[24px] rounded-[4px] duration-200 active:scale-95 flex justify-center items-center`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
