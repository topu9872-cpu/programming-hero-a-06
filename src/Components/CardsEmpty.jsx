import React from "react";

const CardsEmpty = () => {
  return (
    <div className=" w-11/12">
      <ul className="flex mx-36 mb-20 mt-10 text-nowrap text-2xl font-semibold">
        <li>Your cart</li>
      </ul>
      <div className="flex bg-[#f2f2f2] mx-26 py-4 rounded-md justify-center">
        <div className="flex  ">
          <div className="lg:mx-28  pr-20 items-center flex">
            <div>
              <img className="border" src="image" alt="image" />
            </div>
            <ul>
              <li className="text-xl font-semibold">hjk,jk,l.</li>
              <li className="text-gray-600">hjk,m</li>
            </ul>
          </div>
          <h3 className="lg:pl-100 md:pl-46 mx-auto my-auto font-bold text-red-500">Remove</h3>
        </div>
      </div>
      <div className="flex justify-between mx-28 my-12">
        <h4 className="text-gray-500">Total:</h4>
        <h2 className="text-2xl font-bold">hjmj</h2>
      </div>
      <div className="flex flex-col mx-28">
        <button className="text-white font-semibold rounded-full bg-linear-to-r from-[#4f39f6] to-purple-400 p-2 ">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default CardsEmpty;
