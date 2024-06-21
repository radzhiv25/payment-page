import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-auto p-2 bg-[#0B2C4B] text-[#E9F2F9]">
      <div className="grid md:grid-cols-5 grid-cols-2 md:place-items-center gap-5 border-b border-[#6D6969] ">
        <p className="md:mb-auto border">Plans & Pricing</p>

        <p className="mb-auto">For Lawyer/CA</p>
        <ul className="">
          <li>Products</li>
          <li>Features</li>
          <li>Talk to a Lawyer</li>
          <li>Talk to a CA</li>
        </ul>
        <ul className="">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Careers</li>
        </ul>
        <div>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <div className="py-1 md:px-5 px-2 flex md:flex-row flex-col items-center justify-between">
        <p className="flex md:flex-row flex-wrap items-center">
          2024
          <span>
            <FaRegCopyright className="mx-1" />
          </span>
          Black Coat Technologies Pvt. Ltd. | All rights reserved
        </p>
        <div className="flex items-center space-x-10">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
