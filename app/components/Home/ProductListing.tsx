"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductListing = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 md:px-8 py-16 lg:py-20 flex flex-col gap-[44px]">
      <div className=" min-h-screen">
        <div className="flex gap-[44px] lg:gap-[77px] justify-between">
          <span className="flex gap-[44px] lg:gap-[77px] text-[#6A6A6A]">
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
              TV Console
            </button>
          </span>

          <button
            type="button"
            className="active:scale-95 duration-150 border border-[#00000080] rounded-[4px] px-[48px] py-[16px] text-[18px]"
          >
            Filter
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
