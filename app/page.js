import Navbar from "./components/Navbar";
import { PiDotLight } from "react-icons/pi";
import { FaCreditCard } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-20 py-10 bg-[#E9F2F9] h-screen">
        <h1 className="text-4xl text-[#0B2C4B] font-bold">Checkout</h1>
        <div className="w-3/5 mt-5 border border-[#7DB1D1] rounded-md p-4">
          <h2 className="text-xl text-[#0B2C4B]">Billing Information</h2>
          <p className="text-sm mt-2 mb-10 text-semibold">
            We use this information to register your order and secure your
            identity
          </p>
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-lg font-medium">Aman Bansal</h3>
              <p>Gurgaon sector - 01, 832145</p>
              <p className="space-x-2 flex items-center">
                9123413214
                <span><PiDotLight className="size-8 text-[#1B72B1]"/></span>
                amangpt04@gmail.com
              </p>
            </div>
            <button className="underline underline-offset-2 text-[#1B72B1]">
              Edit
            </button>
          </div>
        </div>
        <div className="w-3/5 mt-5 p-5 border border-[#7DB1D1] rounded">
          <h2 className="text-xl font-semibold text-[#0B2C4B]">Payments</h2>
          <ul className="flex space-x-3">
            <li>
              <div className="py-3 px-5 border border-[#1B72B1] flex items-center space-x-2 w-max">
                <FaCreditCard className="size-8 text-[#1B72B1]" />
                <p className="text-[16px]">Credit Card</p>
              </div>
            </li>
            <li>
              <div className="py-3 px-5 border border-[#1B72B1] flex items-center space-x-2 w-max">
                <FaCreditCard className="size-8 text-[#1B72B1]" />
                <p className="text-[16px]">Debit Card</p>
              </div>
            </li>
            <li>
              <div className="py-3 px-5 border border-[#1B72B1] flex items-center space-x-2 w-max">
                <BsBank2 className="size-8 text-[#1B72B1]" />
                <p className="text-[16px]">Net Banking</p>
              </div>
            </li>
            <li>
              <div className="py-3 px-5 border border-[#1B72B1] flex items-center space-x-2 w-max">
                <FaCreditCard className="size-8 text-[#1B72B1]" />
                <p className="text-[16px]">Credit Card</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
