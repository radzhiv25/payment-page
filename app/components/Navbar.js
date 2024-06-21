import React from "react";
import { FaRegBell, FaRegBookmark } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between">
      <ul className="mx-auto flex items-center space-x-3 md:text-lg text-sm">
        <li>Product</li>
        <li>Pricing</li>
        <li>Customers</li>
        <li>
          <p className="p-2 text-[#1B72B1] border border-[#1B72B1] rounded">
            Talk to lawyer/CA
          </p>
        </li>
      </ul>
      <ul className="md:flex hidden items-center space-x-4">
        <li>
          <FaRegBell className="size-5" />
        </li>
        <li>
          <BiMessageDetail className="size-5" />
        </li>
        <li>
          <FaRegBookmark className="size-5" />
        </li>
        <li>
          <IoCartOutline className="size-6" />
        </li>
        <li className="flex items-center space-x-1">
          <CgProfile className="size-5" /> <span>Aditya</span>{" "}
          <MdOutlineKeyboardArrowDown />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
