import Navbar from "./components/Navbar";
import { PiDotLight } from "react-icons/pi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Footer from "./components/Footer";
import OrderCard from "./components/OrderCard";
import PaymentType from "./components/PaymentType";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="md:px-20 px-5 md:py-10 py-5 bg-[#E9F2F9] flex flex-col min-h-screen">
        <h1 className="text-4xl text-[#0B2C4B] font-bold">Checkout</h1>
        <div className="flex lg:flex-row flex-col gap-10 md:mt-10 mt-5 ">
          <div className="lg:w-3/5">
            <div className="border border-[#7DB1D1] rounded-md p-4">
              <h2 className="text-xl text-[#0B2C4B]">Billing Information</h2>
              <p className="text-sm mt-2 md:mb-10 mb-5 text-semibold">
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
            <PaymentType />
          </div>
          <div className="lg:w-2/5">
            <OrderCard />
            <div className="w-3/4 my-10 mx-auto text-center">
              <p className="flex items-center mx-auto w-max">
                <span><IoIosCheckmarkCircle className="mx-1"/></span>Satisfaction Guaranteed
              </p>
              <p className="mt-2 md:text-sm text-xs">
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
