"use client";
import { useState } from "react";
import { FaCreditCard } from "react-icons/fa";

const PaymentType = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    {
      id: "credit",
      name: "Credit Card",
      icon: <FaCreditCard className="text-[#1B72B1]" />,
    },
    {
      id: "debit",
      name: "Debit Card",
      icon: <FaCreditCard className="text-[#1B72B1]" />,
    },
    { id: "netbanking", name: "Netbanking", icon: "" },
    { id: "upi", name: "UPI", icon: "⚡" },
  ];
  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case "credit":
      case "debit":
        return (
          <div>
            <div className="flex mb-2 items-center">
              <span className="px-3 py-2 border border-[#1B72B1]">
                <FaCreditCard className="size-6 text-[#1B72B1]" />
              </span>
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-2 bg-transparent border border-[#1B72B1] outline-none"
              />
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/3 p-2 bg-transparent border border-[#1B72B1] outline-none"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-2/3 p-2 bg-transparent border border-[#1B72B1] outline-none"
              />
            </div>
          </div>
        );
      case "netbanking":
        return (
          <select className="w-full p-2 bg-transparent border border-[#1B72B1]">
            <option>Select your bank</option>
            <option>ICICI Bank</option>
            <option>HDFC Bank</option>
            <option>Axis Bank</option>
            <option>State Bank of India</option>
          </select>
        );
      case "upi":
        return (
          <input
            type="text"
            placeholder="Enter UPI ID"
            className="w-full p-2 border border-[#1B72B1] bg-transparent"
          />
        );
      default:
        return <p>Select a method of payment</p>;
    }
  };
  return (
    <div className="mt-4 p-4 border border-[#1B72B1] rounded">
      <h2 className="text-xl font-bold mb-4">Payment</h2>
      <div className="mb-4 md:flex md:flex-row grid grid-cols-2 gap-2">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            className={`px-4 py-2 border border-[#1B72B1] rounded ${
              selectedMethod === method.id
                ? "bg-white flex items-center gap-2"
                : "bg-white flex items-center gap-2 bg-transparent"
            }`}
            onClick={() => setSelectedMethod(method.id)}
          >
            {method.icon} {method.name}
          </button>
        ))}
      </div>
      <div className="payment-form">{renderPaymentForm()}</div>
      {selectedMethod && (
        <div>
          <div className="flex md:gap-10 gap-5 mt-5 md:text-normal text-sm">
            <button className="px-4 py-2 bg-[#7DB1D1] text-white border border-[#1B72B1] w-full ">
              Save Payment
            </button>
            <button className="px-4 py-2 bg-white text-[#7DB1D1]  w-full">
              Cancel
            </button>
          </div>
          <p className="mt-2 text-center md:text-sm text-xs">
            By clicking <span className="text-semibold">Save Payment</span> you agree to have your payment instrument
            secured in compliance with RBI regulations, if supported, and the
            tokenized payment details saved as your default method of payment
            for future purchases and/or subscription renewals. You can always
            change your preferences later.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentType;
