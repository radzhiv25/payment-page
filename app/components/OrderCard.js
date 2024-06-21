import React from "react";

const OrderCard = () => {
  return (
    <div className="shadow-md rounded-md p-5 bg-white ">
      <div className="flex justify-between">
        <h2>Order Summary</h2>
        <p>(3 items)</p>
      </div>
      <div className="flex justify-between border-b">
        <ul>
            <li>Total Prices</li>
            <li>Discount</li>
        </ul>
        <ul>
            <li>4497</li>
            <li className="text-green-500">-1500</li>
        </ul>
      </div>
      <div className="flex justify-between">
        <h2>Total Amount</h2>
        <p>2997</p>
      </div>
      <div className="text-center">
        <p>Prices are inclusive of applicable taxes</p>
        <p className="underline underline-offset-2">Have a Promo code ?</p>
        <button className="p-2 w-full bg-[#1B72B1] rounded text-white">Place order</button>
      </div>
    </div>
  );
};

export default OrderCard;
