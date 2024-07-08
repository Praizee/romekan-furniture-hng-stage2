"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BaseLayout } from "@/app/_layouts";

import Product1 from "@/public/assets/images/red-chair.png";
import Product2 from "@/public/assets/images/krisgold-chair.png";

const Cart = () => {
  const router = useRouter();

  const [quantity1, setQuantity1] = useState<number>(1);
  const [quantity2, setQuantity2] = useState<number>(2);

  const handleDecrement1 = () => {
    if (quantity1 > 0) setQuantity1(quantity1 - 1);
  };

  const handleIncrement1 = () => {
    if (quantity1 < 100) setQuantity1(quantity1 + 1);
  };

  const handleDecrement2 = () => {
    if (quantity2 > 0) setQuantity2(quantity2 - 1);
  };

  const handleIncrement2 = () => {
    if (quantity2 < 100) setQuantity2(quantity2 + 1);
  };

  return (
    <BaseLayout>
      <section className="min-h-screen mx-auto max-w-screen-xl px-4 md:px-8 py-12 lg:py-16 text-black flex flex-col gap-8 lg:gap-20">
        {/* nav */}
        <div className="flex gap-2">
          <Link
            href="/"
            className="active:scale-95 duration-150 text-romekan-text-100 hover:text-romekan-blue"
          >
            Home
          </Link>{" "}
          /
          <Link
            href=""
            className="active:scale-95 duration-150 hover:text-romekan-blue"
          >
            Cart
          </Link>
        </div>

        {/* cart */}
        <section className="flex flex-col gap-14">
          {/* mobile products */}
          <div className="shadow-md shadow-[#0000000D] lg:hidden flex flex-col gap-8 relative bg-white min-h-[267px] px-4 py-6">
            <span className="flex gap-6 items-center">
              <p className="text-base">Product</p>
              <span className="flex gap-4 items-center">
                <span className="bg-[#F9F9F9] w-[88px] h-[64px] flex justify-center items-center">
                  <Image src={Product1} alt="product" />
                </span>
                <p className="text-romekan-text-300 text-[18px]">Red Chair</p>
              </span>
            </span>
            <span className="flex gap-6 items-center">
              <p className="text-base">Pricing</p>
              <p className="text-[14px]">$50</p>
            </span>

            <span className="flex gap-6 items-center">
              <p className="text-base">Quantity</p>
              <span className="flex w-[120px] h-[44px] rounded-[5px] border border-black text-[18px] font-bold text-black bg-[#D9D9D9]">
                <button
                  type="button"
                  onClick={handleDecrement1}
                  className="w-[40px] flex justify-center items-center rounded-[5px] bg-white hover:bg-gray-50 active:scale-95 duration-150"
                >
                  -
                </button>
                <span className="w-[40px] flex justify-center items-center">
                  {quantity1}
                </span>
                <button
                  type="button"
                  onClick={handleIncrement1}
                  className="w-[40px] flex justify-center items-center rounded-[5px] bg-white hover:bg-gray-50 active:scale-95 duration-150"
                >
                  +
                </button>
              </span>
            </span>

            <span className="flex gap-6 items-center">
              <p className="text-base">Subtotal</p>
              <p className="text-[14px]">$50</p>
            </span>

            {/* remove item */}
            <button
              type="button"
              title="Remove item"
              className="absolute top-2 right-2 active:scale-95 duration-150"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="9" fill="#DB4444" />
                <path
                  d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* desktop products */}
          <div className="hidden lg:flex flex-col gap-8">
            <div className="shadow-md shadow-[#0000000D] h-[72px] px-6 py-4 grid grid-cols-4 gap-8">
              <h3 className="text-[24px]">Product</h3>
              <h3 className="text-[24px] text-center">Price</h3>
              <h3 className="text-[24px] text-center">Quantity</h3>
              <h3 className="text-[24px] text-center">Subtotal</h3>
            </div>

            <div className="shadow-md shadow-[#0000000D] h-[102px] px-6 py-4 grid grid-cols-4 gap-8 relative justify-center items-center place-content-center">
              <div className="flex gap-4 items-center">
                <span className="bg-[#F9F9F9] w-[88px] h-[64px] flex justify-center items-center">
                  <Image src={Product1} alt="product" />
                </span>
                <p className="text-romekan-text-300 text-[18px]">Red Chair</p>
              </div>
              <span className="flex justify-center">
                <p className="text-[18px]">$50</p>
              </span>

              <div className="flex justify-center">
                <span className="flex w-[180px] h-[44px] rounded-[5px] border border-black text-[18px] font-bold text-black bg-[#D9D9D9]">
                  <button
                    type="button"
                    onClick={handleDecrement1}
                    className="w-[60px] flex justify-center items-center rounded-[5px] bg-white hover:bg-gray-50 active:scale-95 duration-150"
                  >
                    -
                  </button>
                  <span className="w-[60px] flex justify-center items-center">
                    {quantity1}
                  </span>
                  <button
                    type="button"
                    onClick={handleIncrement1}
                    className="w-[60px] flex justify-center items-center rounded-[5px] bg-white hover:bg-gray-50 active:scale-95 duration-150"
                  >
                    +
                  </button>
                </span>
              </div>

              <span className="flex justify-center">
                <p className="text-[18px]">$50</p>
              </span>

              {/* remove item */}
              <button
                type="button"
                title="Remove item"
                className="absolute top-2 right-2 active:scale-95 duration-150"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="9" fill="#DB4444" />
                  <path
                    d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="shadow-md shadow-[#0000000D] h-[102px] px-6 py-4 grid grid-cols-4 gap-8 relative justify-center items-center place-content-center">
              <div className="flex gap-4 items-center">
                <span className="bg-[#F9F9F9] w-[88px] h-[64px] flex justify-center items-center">
                  <Image src={Product2} alt="product" />
                </span>
                <p className="text-romekan-text-300 text-[18px]">
                  Krisgold Chair
                </p>
              </div>
              <span className="flex justify-center">
                <p className="text-[18px]">$40</p>
              </span>

              <div className="flex justify-center">
                <span className="flex w-[180px] h-[44px] rounded-[5px] border border-black text-[18px] font-bold text-black bg-[#D9D9D9]">
                  <button
                    type="button"
                    onClick={handleDecrement2}
                    className="w-[60px] flex justify-center items-center rounded-[5px] bg-white hover:bg-gray-50 active:scale-95 duration-150"
                  >
                    -
                  </button>
                  <span className="w-[60px] flex justify-center items-center">
                    {quantity2}
                  </span>
                  <button
                    type="button"
                    onClick={handleIncrement2}
                    className="w-[60px] flex justify-center items-center rounded-[5px] bg-white hover:bg-gray-50 active:scale-95 duration-150"
                  >
                    +
                  </button>
                </span>
              </div>

              <span className="flex justify-center">
                <p className="text-[18px]">$40</p>
              </span>

              {/* remove item */}
              <button
                type="button"
                title="Remove item"
                className="absolute top-2 right-2 active:scale-95 duration-150"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="9" fill="#DB4444" />
                  <path
                    d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <button
            onClick={() => router.push("/")}
            type="button"
            className="text-base text-romekan-blue font-medium border border-romekan-blue py-[10px] lg:py-[16px] px-[48px] rounded-[4px] w-max mx-auto lg:mx-0 active:scale-95 duration-150 hover:bg-romekan-blue hover:text-white"
          >
            Return to store
          </button>

          {/* coupon */}
          <div className="flex flex-col lg:flex-row gap-8 justify-between">
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="coupon"
                placeholder="Coupon Code"
                required
                className="border border-romekan-blue rounded-[4px] h-[56px] w-full lg:w-[300px] p-4 focus:outline-romekan-blue uppercase placeholder:capitalize"
              />
              <button
                type="submit"
                className="text-base rounded-[4px] border border-romekan-blue h-[56px] p-[10px] px-[20px] w-max mx-auto md:min-w-max lg:w-max active:scale-95 duration-150 bg-romekan-blue text-white"
              >
                Apply coupon
              </button>
            </form>

            {/* cart total */}
            <div className="flex flex-col gap-6 p-4 shadow-md shadow-[#0000000D] lg:shadow-none lg:border border-[#565656] rounded-[17px] min-h-[324px] lg:min-w-[470px] text-black">
              <h3 className="text-[20px] font-medium">Cart Total</h3>
              <span className="flex flex-col divide-y-[1px] divide-black">
                <span className="text-base flex gap-8 justify-between pb-4">
                  <p className="">Subtotal:</p>
                  <p className="text-base">$950</p>
                </span>

                <span className="text-base flex gap-8 justify-between py-4">
                  <p className="">Shipping:</p>
                  <p className="text-base">Free</p>
                </span>

                <span className="text-base flex gap-8 justify-between py-4">
                  <p className="">Total:</p>
                  <p className="text-base">$950</p>
                </span>
              </span>

              <button
                onClick={() => router.push("/checkout")}
                type="button"
                className="text-base rounded-[4px] border border-romekan-blue h-[56px] p-[10px] px-[20px] w-max mx-auto active:scale-95 duration-150 bg-romekan-blue text-white"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </section>
      </section>
    </BaseLayout>
  );
};

export default Cart;
