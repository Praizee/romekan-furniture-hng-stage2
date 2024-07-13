"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BaseLayout } from "@/app/_layouts";
import { useCartStore } from "@/app/store/cartStore";

const Cart = () => {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart, clearCart } = useCartStore();

  const handleDecrement = (id: number, currentQuantity: number) => {
    if (currentQuantity > 0) updateQuantity(id, currentQuantity - 1);
  };

  const handleIncrement = (id: number, currentQuantity: number) => {
    if (currentQuantity < 100) updateQuantity(id, currentQuantity + 1);
  };

  useEffect(() => {
    // Fetch cart data from an API or local storage
  }, []);

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Calculate total (subtotal + shipping)
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    // Add shipping logic later
    return subtotal;
  };

  const renderCartItems = () => {
    if (cart.length === 0) {
      return (
        <div className="flex flex-col gap-6 items-center justify-center text-center py-16">
          <p className="text-2xl text-black">Nothing in your cart yet.</p>
          <button
            onClick={() => router.push("/")}
            className="text-base rounded-[4px] border border-romekan-blue h-[56px] p-[10px] px-[20px] w-max mx-auto active:scale-95 duration-150 bg-romekan-blue text-white"
          >
            Continue Shopping
          </button>
        </div>
      );
    }

    return (
      <>
        {cart.map((item) => (
          <div
            key={item.id}
            className="shadow-md shadow-[#0000000D] flex flex-col gap-8 relative bg-white min-h-[267px] px-4 py-6"
          >
            <span className="flex gap-6 items-center">
              <p className="text-base">Product</p>
              <span className="flex gap-4 items-center">
                <span className="bg-[#F9F9F9] w-[88px] h-[64px] flex justify-center items-center">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    className="max-w-[52px] max-h-[74px]"
                  />
                </span>
                <p className="text-romekan-text-300 text-[18px]">{item.name}</p>
              </span>
            </span>
            <span className="flex gap-6 items-center">
              <p className="text-base">Pricing</p>
              <p className="text-[14px]">${item.price}</p>
            </span>

            <span className="flex gap-6 items-center">
              <p className="text-base">Quantity</p>
              <span className="flex w-[120px] h-[44px] rounded-[5px] border border-black text-[18px] font-bold text-black bg-[#D9D9D9]">
                <button
                  type="button"
                  onClick={() => handleDecrement(item.id, item.quantity)}
                  className="w-[40px] flex justify-center items-center rounded-[5px] bg-white hover:bg-gray-50 active:scale-95 duration-150"
                >
                  -
                </button>
                <span className="w-[40px] flex justify-center items-center">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => handleIncrement(item.id, item.quantity)}
                  className="w-[40px] flex justify-center items-center rounded-[5px] bg-white hover:bg-gray-50 active:scale-95 duration-150"
                >
                  +
                </button>
              </span>
            </span>

            <span className="flex gap-6 items-center">
              <p className="text-base">Subtotal</p>
              <p className="text-[14px]">${item.price * item.quantity}</p>
            </span>

            {/* remove item */}
            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}

        {/* coupon and total section */}
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
            <h3 className="text-[20px] font-medium">
              Cart Total ({cart.length})
            </h3>
            <span className="flex flex-col divide-y-[1px] divide-black">
              <span className="text-base flex gap-8 justify-between pb-4">
                <p className="">Subtotal:</p>
                <p className="text-base">${calculateSubtotal()}</p>
              </span>

              <span className="text-base flex gap-8 justify-between py-4">
                <p className="">Shipping:</p>
                <p className="text-base">Free</p>
              </span>

              <span className="text-base flex gap-8 justify-between py-4">
                <p className="">Total:</p>
                <p className="text-base">${calculateTotal()}</p>
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
      </>
    );
  };

  return (
    <BaseLayout>
      <section className="min-h-screen mx-auto max-w-screen-xl px-4 md:px-8 py-12 lg:py-16 text-black flex flex-col gap-8 lg:gap-20">
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
            href=""
            className="active:scale-95 duration-150 hover:text-romekan-blue"
          >
            Cart
          </Link>
        </div>

        {/* cart */}
        <section className="flex flex-col gap-14">{renderCartItems()}</section>
      </section>
    </BaseLayout>
  );
};

export default Cart;
