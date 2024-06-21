import Navbar from "./components/Navbar";
import { PiDotLight } from "react-icons/pi";
import { FaCreditCard } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import Footer from "./components/Footer";
import OrderCard from "./components/OrderCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="md:px-20 px-5 md:py-10 py-5 bg-[#E9F2F9] flex flex-col min-h-screen">
        <h1 className="text-4xl text-[#0B2C4B] font-bold">Checkout</h1>
        <div className="flex md:flex-row flex-col gap-10 md:mt-10 mt-5 ">
          <div className="md:w-3/5">
            <div className="border border-[#7DB1D1] rounded-md p-4">
              <h2 className="text-xl text-[#0B2C4B]">Billing Information</h2>
              <p className="text-sm mt-2 mb-10 text-semibold">
                We use this information to register your order and secure your
                identity
              </p>
              <div className="flex md:flex-row flex-col md:justify-between md:items-end items-start">
                <div>
                  <h3 className="text-lg font-medium">Aman Bansal</h3>
                  <p>Gurgaon sector - 01, 832145</p>
                  <p className="space-x-2 flex items-center">
                    9123413214
                    <span>
                      <PiDotLight className="size-8 text-[#1B72B1]" />
                    </span>
                    amangpt04@gmail.com
                  </p>
                </div>
                <button className="underline underline-offset-2 text-[#1B72B1]">
                  Edit
                </button>
              </div>
            </div>
            <div className="mt-5 p-5 border border-[#7DB1D1] rounded">
              <h2 className="text-xl font-semibold text-[#0B2C4B]">Payments</h2>
              <ul className="md:flex md:flex-row grid grid-cols-2 gap-3">
                <li>
                  <div className="md:py-3 py-1 md:px-5 px-3 border border-[#1B72B1] flex items-center space-x-2 w-max">
                    <FaCreditCard className="md:size-8 size-5 text-[#1B72B1]" />
                    <p className="md:text-[16px]">Credit Card</p>
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
          <div className="md:w-2/5">
            <OrderCard />
            <div className="w-3/4 mx-auto text-center">
              <p>
                <span></span>Satisfaction Guaranteed
              </p>
              <p>
                If you're not completely happy with your purchase contact us.
                and we we'll make it right
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
