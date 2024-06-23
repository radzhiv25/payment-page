import React from "react";
import { FaRegBell, FaRegBookmark } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const NavItems = () => {
  return (
    <div>
      <ul className="flex items-center space-x-4">
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

export default NavItems;
