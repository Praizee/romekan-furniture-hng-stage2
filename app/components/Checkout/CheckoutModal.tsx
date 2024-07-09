"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa6";
import { FcCancel } from "react-icons/fc";
import { IoCheckmarkSharp, IoClose } from "react-icons/io5";

const CheckoutModal: React.FC = () => {
  const router = useRouter();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isOrderCompleted, setOrderCompleted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCompleteOrderClick = () => {
    setModalOpen(true);
    setIsClosing(false);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setIsClosing(false);
    }, 300); // Duration of the scale-down animation
  };

  const handleYesClick = () => {
    setOrderCompleted(true);
  };

  const handleReturnToStoreClick = () => {
    setOrderCompleted(false);
    handleCloseModal();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="container mx-auto text-center p-4 z-[999]">
      <button
        type="button"
        className="text-[14px] lg:text-base rounded-[4px] border border-romekan-blue h-[56px] p-[10px] px-[20px] w-max mx-auto active:scale-95 duration-150 bg-romekan-blue text-white"
        onClick={handleCompleteOrderClick}
      >
        Complete order
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`bg-white w-[325px] md:w-[625px] xl:w-[1084px] lg:max-h-[700px] rounded-[22px] p-8 lg:py-16 shadow-lg ${
              isClosing ? "animate-scale-down" : "animate-scale-up"
            }`}
            ref={modalRef}
          >
            {!isOrderCompleted ? (
              <div className="flex flex-col gap-14 lg:gap-24 justify-center items-center text-center">
                <h2 className="text-base md:text-[32px] xl:text-[48px] md:leading-[41.6px] xl:leading-[81.6px] max-w-[555px]">
                  Are you sure you want to complete the order?
                </h2>
                <div className="flex gap-8">
                  <button
                    type="button"
                    title="Yes"
                    className="border border-[#4E976C] text-[#5BB17E] text-[25px] lg:text-[35.56px] w-[122px] xl:w-[331px] h-[52px] xl:h-[94px] p-4 rounded-[12px] flex justify-center items-center active:scale-95 duration-150"
                    onClick={handleYesClick}
                  >
                    <FaCheck />
                    {/* <IoCheckmarkSharp /> */}
                  </button>
                  <button
                    type="button"
                    title="No"
                    className="border border-[#F8290F] text-[#DD2E44] text-[25px] lg:text-[35.56px] w-[122px] xl:w-[331px] h-[52px] xl:h-[94px] p-4 rounded-[12px] flex justify-center items-center active:scale-95 duration-150"
                    onClick={handleCloseModal}
                  >
                    <IoClose />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-10 md:gap-14 lg:gap-16 justify-center items-center text-center">
                <span className="space-y-2">
                  <h2 className="text-base md:text-[32px] xl:text-[48px] font-medium md:leading-[41.6px] xl:leading-[81.6px]">
                    Congratulations on your order
                  </h2>
                  <p className="text-[12px] lg:text-[20px] text-[#1E1E1E] max-w-md mx-auto">
                    The product you ordered will be delivered in your address
                    within 5days
                  </p>
                </span>

                <span className="border border-[#4E976C] rounded-full size-[60px] lg:size-[120px] text-[#5BB17E] text-[25px] lg:text-[35.56px] p-4 flex justify-center items-center active:scale-95 duration-150">
                  <FaCheck />
                </span>

                <button
                  onClick={() => router.push("/")}
                  type="button"
                  className="text-[14px] lg:text-base rounded-[4px] border border-romekan-blue h-[56px] p-[10px] px-[20px] w-max mx-auto active:scale-95 duration-150 bg-romekan-blue text-white"
                >
                  Return to store
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutModal;
