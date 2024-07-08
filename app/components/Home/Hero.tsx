"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/app/components/common/FadeUp";

const Hero = () => {
  return (
    <section className="bg-[url('/assets/images/header-bg-mobile.png')] sm:bg-[url('/assets/images/header-bg.png')] h-[180px] md:h-[364px] bg-cover bg-no-repeat ">
      {/* <div className="mx-auto max-w-screen-xl px-4 md:px-8 pb-10 lg:pb-16 flex flex-col gap-[44px]"> */}
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 flex justify-center items-center h-full">
        <FadeUp>
          <h1 className="text-base md:text-[36px] md:leading-[54px] text-white font-semibold max-w-[321px] md:max-w-[748px] text-center">
            Welcome to our furniture collection, where style meets comfort and
            quality
          </h1>
        </FadeUp>
      </div>
    </section>
  );
};

export default Hero;
