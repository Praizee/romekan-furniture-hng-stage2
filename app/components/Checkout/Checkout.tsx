"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BaseLayout } from "@/app/_layouts";

import Product1 from "@/public/assets/images/red-chair.png";
import Product2 from "@/public/assets/images/krisgold-chair.png";
import CheckoutModal from "./CheckoutModal";

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quantity1, setQuantity1] = useState<string>("01");
  const [quantity2, setQuantity2] = useState<string>("02");

  const handleQuantityChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (value < 10) {
      setQuantity1(`0${value}`);
    } else {
      setQuantity1(`${value}`);
    }
  };

  const handleQuantityChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (value < 10) {
      setQuantity2(`0${value}`);
    } else {
      setQuantity2(`${value}`);
    }
  };

  return (
    <BaseLayout>
      <section className="min-h-screen mx-auto max-w-screen-xl px-4 md:px-8 py-12 lg:pt-16 lg:pb-0 text-black grid grid-cols-1 lg:grid-cols-5 gap-x-8">
        <div className="bg-white lg:col-span-3 flex flex-col gap-10 lg:gap-20 pb-16">
          {/* nav */}
          <div className="flex gap-2 text-[14px] lg:text-base">
            <Link
              href="/"
              className="active:scale-95 duration-150 text-romekan-text-100 hover:text-romekan-blue"
            >
              Home
            </Link>{" "}
            /
            <Link
              href="cart"
              className="active:scale-95 duration-150 text-romekan-text-100 hover:text-romekan-blue"
            >
              Cart
            </Link>{" "}
            /
            <Link
              href=""
              className="active:scale-95 duration-150 hover:text-romekan-blue"
            >
              Checkout
            </Link>
          </div>

          {/* customer info */}
          <div className="flex flex-col gap-14">
            <span className="flex flex-col gap-3">
              <span className="flex gap-8 justify-between items-center">
                <p>Customer information</p>
                <label
                  htmlFor="email"
                  className="active:scale-95 duration-150 text-[#016FD0] text-[12px] cursor-pointer"
                >
                  edit
                </label>
              </span>
              <input
                id="email"
                type="email"
                placeholder="email for order confirmation"
                className="h-[38px] px-2 w-full text-[12px] text-[#828282] border border-[#D3D3D3] rounded-[3.33px] focus:border-romekan-blue outline-none"
              />
            </span>
          </div>

          {/* delivery method */}
          <fieldset className="flex flex-col md:flex-row gap-4 md:gap-8">
            <legend className="sr-only">Delivery</legend>

            <div>
              <label
                htmlFor="HomeDelivery"
                className={`flex gap-8 justify-between group h-[85.49px] mx-auto max-w-[286.68px] min-w-[186.68px] lg:w-[286.68px] cursor-pointer border ${
                  selectedOption === "HomeDelivery"
                    ? "border-[#7047EB] bg-white ring-1 ring-[#7047EB]"
                    : "border-transparent bg-[#FAFAFA]"
                } p-4 text-sm font-medium shadow-sm`}
                onClick={() => setSelectedOption("HomeDelivery")}
              >
                <span className="flex flex-col gap-3">
                  <p className="text-[#25252D] text-[14px] font-medium">
                    Home delivery
                  </p>
                  <p className="text-[#828282] text-[12px]">
                    Takes 3-5 business days
                  </p>
                </span>
                {selectedOption === "HomeDelivery" && (
                  <svg
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.8203 12.497V13.4937C24.8189 15.8298 24.0334 18.1029 22.5808 19.974C21.1283 21.8451 19.0865 23.2139 16.7601 23.8763C14.4337 24.5386 11.9472 24.4591 9.67159 23.6495C7.39595 22.8399 5.45305 21.3436 4.13264 19.3839C2.81224 17.4241 2.18508 15.1058 2.3447 12.7747C2.50432 10.4437 3.44217 8.22473 5.01838 6.44887C6.59458 4.67301 8.7247 3.43537 11.091 2.92053C13.4574 2.40569 15.9331 2.64124 18.1491 3.59204"
                      stroke="#6FCF97"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.8203 4.82703L13.5703 15.6712L10.1953 12.4212"
                      stroke="#6FCF97"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <input
                  type="radio"
                  name="DeliveryOption"
                  value="HomeDelivery"
                  id="HomeDelivery"
                  className="sr-only"
                />
              </label>
            </div>

            <div>
              <label
                htmlFor="StorePickup"
                className={`flex gap-8 justify-between group h-[85.49px] mx-auto max-w-[286.68px] min-w-[186.68px] lg:w-[286.68px] cursor-pointer border ${
                  selectedOption === "StorePickup"
                    ? "border-[#7047EB] bg-white ring-1 ring-[#7047EB]"
                    : "border-transparent bg-[#FAFAFA]"
                } p-4 text-sm font-medium shadow-sm`}
                onClick={() => setSelectedOption("StorePickup")}
              >
                <span className="flex flex-col gap-3">
                  <p className="text-[#25252D] text-[14px] font-medium">
                    In-store pickup
                  </p>
                  <p className="text-[#828282] text-[12px]">
                    Pick from store location
                  </p>
                </span>
                {selectedOption === "StorePickup" && (
                  <svg
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.8203 12.497V13.4937C24.8189 15.8298 24.0334 18.1029 22.5808 19.974C21.1283 21.8451 19.0865 23.2139 16.7601 23.8763C14.4337 24.5386 11.9472 24.4591 9.67159 23.6495C7.39595 22.8399 5.45305 21.3436 4.13264 19.3839C2.81224 17.4241 2.18508 15.1058 2.3447 12.7747C2.50432 10.4437 3.44217 8.22473 5.01838 6.44887C6.59458 4.67301 8.7247 3.43537 11.091 2.92053C13.4574 2.40569 15.9331 2.64124 18.1491 3.59204"
                      stroke="#6FCF97"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.8203 4.82703L13.5703 15.6712L10.1953 12.4212"
                      stroke="#6FCF97"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <input
                  type="radio"
                  name="DeliveryOption"
                  value="StorePickup"
                  id="StorePickup"
                  className="sr-only"
                />
              </label>
            </div>
          </fieldset>

          {/* billing address */}
          <div className="flex flex-col gap-3">
            <span className="flex gap-8 justify-between items-center">
              <p>Billing address</p>
              <label
                htmlFor="firstName"
                className="active:scale-95 duration-150 text-[#016FD0] text-[12px] cursor-pointer"
              >
                edit details
              </label>
            </span>
            <span className="flex flex-col lg:flex-row gap-3 lg:gap-8">
              <input
                id="firstName"
                type="text"
                placeholder="First name"
                className="h-[38px] px-2 w-full text-[12px] text-[#828282] border border-[#D3D3D3] rounded-[3.33px] focus:border-romekan-blue outline-none"
              />
              <input
                id="lastName"
                type="text"
                placeholder="Last name"
                className="h-[38px] px-2 w-full text-[12px] text-[#828282] border border-[#D3D3D3] rounded-[3.33px] focus:border-romekan-blue outline-none"
              />
            </span>
            <input
              id="address1"
              type="text"
              placeholder="address line - 1"
              className="h-[38px] px-2 w-full text-[12px] text-[#828282] border border-[#D3D3D3] rounded-[3.33px] focus:border-romekan-blue outline-none"
            />
            <input
              id="address2"
              type="text"
              placeholder="address line - 2"
              className="h-[38px] px-2 w-full text-[12px] text-[#828282] border border-[#D3D3D3] rounded-[3.33px] focus:border-romekan-blue outline-none"
            />
            <input
              id="city"
              type="text"
              placeholder="City"
              className="h-[38px] px-2 w-full text-[12px] text-[#828282] border border-[#D3D3D3] rounded-[3.33px] focus:border-romekan-blue outline-none"
            />
            <span className="flex flex-col lg:flex-row gap-3 lg:gap-8">
              <span className="relative w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
                <select
                  title="State"
                  className="h-[38px] pl-2 pr-3 w-full text-[12px] text-[#828282] border border-[#D3D3D3] rounded-[3.33px] focus:border-romekan-blue outline-none appearance-none"
                >
                  <option value="">State</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Rivers">Rivers</option>
                </select>
              </span>
              {/* <input
                id="state"
                type="text"
                placeholder="State"
                className="h-[38px] px-2 w-full text-[12px] text-[#828282] border border-[#D3D3D3] rounded-[3.33px] focus:border-romekan-blue outline-none"
              /> */}
              <input
                id="phone"
                type="tel"
                placeholder="Phone"
                className="h-[38px] px-2 w-full text-[12px] text-[#828282] border border-[#D3D3D3] rounded-[3.33px] focus:border-romekan-blue outline-none"
              />
            </span>

            {/* Save */}
            <span className="flex items-center gap-x-2.5 pt-4">
              <input
                type="radio"
                name="save"
                id="save"
                className="form-radio border-gray-400 text-indigo-600 focus:ring-indigo-600 duration-150"
              />
              <label
                htmlFor="save"
                className="text-[#25252D] text-[14px] lg:text-base"
              >
                Save information
              </label>
            </span>
          </div>
        </div>

        {/* order summary */}
        <div className="bg-[#FAFAFA] lg:col-span-2 px-4 p-8 lg:px-8 flex flex-col gap-8 lg:gap-12 pb-16">
          <div className="flex flex-col gap-6">
            <h3 className="text-base lg:text-[24px] font-medium text-center">
              Order summary
            </h3>

            <div className="flex gap-4 items-center justify-between bg-white min-h-[107px] px-2 lg:px-4">
              <span className="flex gap-4 items-center">
                <span className="bg-[#F9F9F9] w-[88px] h-[64px] flex justify-center items-center">
                  <Image src={Product1} alt="product" />
                </span>
                <span className="space-y-1">
                  <p className="text-romekan-text-300 text-[18px]">Red Chair</p>
                  <p className="text-[18px]">Qty : 2</p>
                </span>
              </span>

              <p className="text-[18px]">$50</p>
            </div>

            <div className="hidden lg:flex gap-4 items-center justify-between bg-white min-h-[107px] px-2 lg:px-4">
              <span className="flex gap-4 items-center">
                <span className="bg-[#F9F9F9] w-[88px] h-[64px] flex justify-center items-center">
                  <Image src={Product2} alt="product" />
                </span>
                <span className="space-y-1">
                  <p className="text-romekan-text-300 text-[18px]">Red Chair</p>
                  <p className="text-[18px]">Qty : 2</p>
                </span>
              </span>

              <p className="text-[18px]">$40</p>
            </div>
          </div>

          {/* cart total */}
          <div className="flex flex-col gap-6 lg:max-w-[470px] text-black">
            <h3 className="text-[14px] lg:text-[20px] font-medium">
              Cart Total
            </h3>
            <span className="flex flex-col divide-y-[1px] divide-black">
              <span className="text-[14px] lg:text-base flex gap-8 justify-between pb-4">
                <p className="hidden lg:block">Subtotal:</p>
                <p className="block lg:hidden text-[#8A8A8F]">Product price:</p>
                <p className="hidden lg:block">$80</p>
                <p className="block lg:hidden">$50</p>
              </span>

              <span className="text-[14px] lg:text-base flex gap-8 justify-between py-4">
                <p className="lg:text-black text-[#8A8A8F]">Shipping:</p>
                <p className="">Free</p>
              </span>

              <span className="text-[14px] lg:text-base flex gap-8 justify-between py-4">
                <p className="">Total:</p>
                <p className="hidden lg:block">$80</p>
                <p className="block lg:hidden">$50</p>
              </span>
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-base lg:text-[24px] font-medium pb-2">
              Payment options
            </h3>
            <div>
              <span className="flex items-center gap-x-2.5">
                <input
                  type="radio"
                  name="cashOnDelivery"
                  defaultChecked
                  id="cashOnDelivery"
                  className="form-radio border-gray-400 text-indigo-600 focus:ring-indigo-600 duration-150"
                />
                <label
                  htmlFor="cashOnDelivery"
                  className="text-[#25252D] font-bold text-[14px] lg:text-base"
                >
                  Cash On Delivery
                </label>
              </span>
              <p className="text-[12px] lg:text-[14px] text-[#828282] pl-6">
                Pay with cash upon delivery.
              </p>
            </div>

            <span className="space-y-1">
              <p className="text-[14px] lg:text-[18px]">Review & Place Order</p>
              <p className="text-[#645A5C] text-[12px] lg:text-[14px]">
                Please review the order details and payment details before
                proceeding to confirm your order
              </p>
            </span>

            <label htmlFor="TermsAndConditions" className="flex gap-4">
              <input
                type="checkbox"
                id="TermsAndConditions"
                name="terms_and_conditions"
                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span className="text-[#25252D] text-[12px] lg:text-base">
                I agree to the{" "}
                <Link
                  href=""
                  className="text-romekan-blue hover:underline duration-150"
                >
                  Terms & conditions
                </Link>
                ,{" "}
                <Link
                  href=""
                  className="text-romekan-blue hover:underline duration-150"
                >
                  Privacy policy
                </Link>{" "}
                &{" "}
                <Link
                  href=""
                  className="text-romekan-blue hover:underline duration-150"
                >
                  Return policy
                </Link>
              </span>
            </label>
          </div>

          <CheckoutModal />
          {/* <button
            type="button"
            className="text-[14px] lg:text-base rounded-[4px] border border-romekan-blue h-[56px] p-[10px] px-[20px] w-max mx-auto active:scale-95 duration-150 bg-romekan-blue text-white"
          >
            Complete order
          </button> */}
        </div>
      </section>
    </BaseLayout>
  );
};

export default Checkout;
