import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { IoIosCall, IoMdMail } from "react-icons/io";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-auto bg-[#0B2C4B] text-[#E9F2F9] md:px-5 lg:px-20">
      <div className="p-2 grid md:grid-cols-5 grid-cols-2 md:place-items-center md:gap-5 gap-3 border-b border-[#6D6969]">
        <p className="mb-auto">Plans & Pricing</p>
        <p className="mb-auto">For Lawyer/CA</p>
        <ul className="space-y-1">
          <li>Products</li>
          <li>Features</li>
          <li>Talk to a Lawyer</li>
          <li>Talk to a CA</li>
        </ul>
        <ul className="mb-auto space-y-1">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Careers</li>
        </ul>
        <div className="space-y-2 md:mb-auto mb-3">
          <ul className="space-y-1">
            <li className="flex items-center space-x-2">
              <span>
                <IoIosCall className="text-[#7DB1D1] md:size-6 size-5" />
              </span>
              <p>+91-6206XXX04</p>
            </li>
            <li className="flex items-center space-x-2">
              <span>
                <IoMdMail className="text-[#7DB1D1] size-5 md:size-6" />
              </span>
              <p>projectx@gmail.com</p>
            </li>
          </ul>
          <ul className="flex space-x-5 text-[#7DB1D1]">
            <li>
              <FaInstagram className="md:size-6 size-5" />
            </li>
            <li>
              <FaWhatsapp className="md:size-6 size-5" />
            </li>
            <li>
              <FaLinkedinIn className="md:size-6 size-5" />
            </li>
            <li>
              <FaTwitter className="md:size-6 size-5" />
            </li>
          </ul>
        </div>
      </div>
      <div className="md:py-2 md:px-5 p-2 flex md:flex-row flex-col items-center justify-between">
        <p className="flex flex-row flex-wrap items-center">
          2024
          <span>
            <FaRegCopyright className="mx-1" />
          </span>
          Black Coat Technologies Pvt. Ltd.
        </p>
        <div className="md:my-0 my-1 md:w-max w-full flex items-center justify-between md:space-x-10">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
