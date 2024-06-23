import React from "react";
import Image from "next/image";
import Partner from "/public/partner.png";
import { FaLock } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className="shadow-md py-10 rounded-md p-5 bg-white">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <p className="italic">(3 items)</p>
      </div>
      <div className="py-3 flex justify-between border-b">
        <ul className="font-normal text-base space-y-2">
          <li>Total Prices</li>
          <li>Discount</li>
        </ul>
        <ul className="space-y-2">
          <li>4497</li>
          <li className="text-green-500">-1500</li>
        </ul>
      </div>
      <div className="flex justify-between my-3">
        <h2>Total Amount</h2>
        <p>2997</p>
      </div>
      <div className="text-center flex flex-col space-y-5">
        <p>Prices are inclusive of applicable taxes</p>
        <p className="underline underline-offset-2">Have a Promo code ?</p>
        <button className="p-2 w-full bg-[#1B72B1] rounded text-white">
          Place order
        </button>
        <div className="flex md:flex-row justify-between flex-col w-full">
          <div className="flex gap-2 items-center md:mx-0 mx-auto">
            <FaLock className="" />
            <p className="text-center md:text-base text-sm">Secure transaction</p>
          </div>
          <Image src={Partner} alt="partner" className="md:mt-0 mt-3 md:mx-0 mx-auto"/>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
