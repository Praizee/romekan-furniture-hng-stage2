"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
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

interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  imageSrc: StaticImageData;
  discount: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Black Party Chair",
    price: 49,
    discountPrice: 24,
    imageSrc: Product1,
    discount: "",
  },
  {
    id: 2,
    name: "White classy chair",
    price: 64,
    discountPrice: 130,
    imageSrc: Product2,
    discount: "",
  },
  {
    id: 3,
    name: "Elegant Bed",
    price: 499,
    discountPrice: 349,
    imageSrc: Product3,
    discount: "-35%",
  },
  {
    id: 4,
    name: "Black Party Chair",
    price: 54,
    discountPrice: 124,
    imageSrc: Product4,
    discount: "-35%",
  },
  {
    id: 5,
    name: "Office Chair",
    price: 149,
    discountPrice: 99,
    imageSrc: Product5,
    discount: "-35%",
  },
  {
    id: 6,
    name: "TV Console",
    price: 199,
    discountPrice: 149,
    imageSrc: Product6,
    discount: "-35%",
  },
  {
    id: 7,
    name: "Bookshelf",
    price: 89,
    discountPrice: 59,
    imageSrc: Product7,
    discount: "-35%",
  },
  {
    id: 8,
    name: "Coffee Table",
    price: 79,
    discountPrice: 49,
    imageSrc: Product8,
    discount: "-35%",
  },
  {
    id: 9,
    name: "Recliner Chair",
    price: 129,
    discountPrice: 99,
    imageSrc: Product9,
    discount: "-35%",
  },
  {
    id: 10,
    name: "Bedside Table",
    price: 59,
    discountPrice: 39,
    imageSrc: Product10,
    discount: "-35%",
  },
  {
    id: 11,
    name: "Wardrobe",
    price: 399,
    discountPrice: 299,
    imageSrc: Product11,
    discount: "-35%",
  },
  {
    id: 12,
    name: "Shoe Rack",
    price: 49,
    discountPrice: 29,
    imageSrc: Product12,
    discount: "-35%",
  },
];

const ProductListing: React.FC = () => {
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
            >
              <option>Chairs</option>
              <option>Bed</option>
              <option>Dining set</option>
              <option>TV console</option>
            </select>
          </div>

          {/* desktop options/tabs */}
          <span className="hidden lg:flex gap-[44px] lg:gap-[77px] text-[#6A6A6A]">
            <button
              type="button"
              className="text-base focus:text-[24px] focus:text-romekan-blue font-medium duration-150"
            >
              Chairs
            </button>
            <button
              type="button"
              className="text-base focus:text-[24px] focus:text-romekan-blue font-medium duration-150"
            >
              Bed
            </button>
            <button
              type="button"
              className="text-base focus:text-[24px] focus:text-romekan-blue font-medium duration-150"
            >
              Dining set
            </button>
            <button
              type="button"
              className="text-base focus:text-[24px] focus:text-romekan-blue font-medium duration-150"
            >
              TV console
            </button>
          </span>

          <button
            type="button"
            className="active:scale-95 duration-150 border border-[#00000080] rounded-[4px] px-[24px] py-[8px] lg:px-[48px] lg:py-[16px] text-[14px] lg:text-[18px]"
          >
            Filter
          </button>
        </div>

        {/* products list */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-4">
              <div className="relative">
                <span className="bg-[#F9F9F9] rounded-[4px] max-w-[154px] max-h-[387px] lg:w-[387px] lg:h-[381px] lg:max-w-full lg:max-h-full flex justify-center items-center">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    className="hover:scale-110 duration-200 w-1/2 lg:w-auto"
                  />
                </span>
                <p className="bg-romekan-brown text-white px-[12px] py-[4px] rounded-[4px] text-[12px] w-max absolute top-0 right-0 hidden lg:block">
                  {product.discount}
                </p>
              </div>

              <div>
                <p className="text-black text-[14px] lg:text-[24px]">
                  {product.name}
                </p>
                <span className="flex gap-8 justify-between items-center">
                  <span className="flex gap-2 items-center">
                    <p className="text-black text-base lg:text-[28px] font-medium">
                      ${product.price}
                    </p>
                    <p className="text-[#BABABA] text-[10px] lg:text-[20px] font-medium">
                      ${product.discountPrice}
                    </p>
                  </span>

                  <button
                    type="button"
                    title="Add to cart"
                    className="bg-romekan-blue size-[43px] p-[8px] rounded-full flex justify-center items-center duration-150 active:scale-95"
                  >
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 6.5H22L19 16.5H6L3 6.5ZM3 6.5L2.25 4M9.992 11.5H11.992M11.992 11.5H13.992M11.992 11.5V9.5M11.992 11.5V13.5M11 20C11 20.3978 10.842 20.7794 10.5607 21.0607C10.2794 21.342 9.89782 21.5 9.5 21.5C9.10218 21.5 8.72064 21.342 8.43934 21.0607C8.15804 20.7794 8 20.3978 8 20M17 20C17 20.3978 16.842 20.7794 16.5607 21.0607C16.2794 21.342 15.8978 21.5 15.5 21.5C15.1022 21.5 14.7206 21.342 14.4393 21.0607C14.158 20.7794 14 20.3978 14 20"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        <div className="w-max mx-auto flex gap-8 pt-16">
          <button
            type="button"
            className="focus:bg-romekan-blue bg-white size-[30px] lg:size-[47px] border border-romekan-blue focus:border text-black focus:text-white lg:text-[24px] rounded-[4px] duration-200 active:scale-95 flex justify-center items-center"
          >
            1
          </button>
          <button
            type="button"
            className="focus:bg-romekan-blue bg-white size-[30px] lg:size-[47px] border border-romekan-blue focus:border text-black focus:text-white lg:text-[24px] rounded-[4px] duration-200 active:scale-95 flex justify-center items-center"
          >
            2
          </button>
          <button
            type="button"
            className="focus:bg-romekan-blue bg-white size-[30px] lg:size-[47px] border border-romekan-blue focus:border text-black focus:text-white lg:text-[24px] rounded-[4px] duration-200 active:scale-95 flex justify-center items-center"
          >
            3
          </button>
          <button
            type="button"
            className="focus:bg-romekan-blue bg-white size-[30px] lg:size-[47px] border border-romekan-blue focus:border text-black focus:text-white lg:text-[24px] rounded-[4px] duration-200 active:scale-95 flex justify-center items-center"
          >
            4
          </button>
          <button
            type="button"
            className="focus:bg-romekan-blue bg-white size-[30px] lg:size-[47px] border border-romekan-blue focus:border text-black focus:text-white lg:text-[24px] rounded-[4px] duration-200 active:scale-95 flex justify-center items-center"
          >
            5
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
