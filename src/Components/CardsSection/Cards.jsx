import React, { useState } from "react";

const Cards = () => {
  const [toggle, settoggle] = useState("Products");
  return (
    <div className="text-center pt-20">
      <div className="space-y-6">
        <h1 className="font-semibold text-5xl">Premium Digital Tools</h1>
        <p className="text-gray-500">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
      <div className="mt-8 ">
        <button
          onClick={() => settoggle('Products')}
          className={`text-black font-semibold ${
            toggle === "Products"
              ? "bg-linear-to-r from-[#4f39f6] to-purple-400"
              : ""
          } rounded-full px-4 py-2`}
        >
          Products
        </button>

        <button
          onClick={() => settoggle('Carts')}
          className={`text-black font-semibold ${
            toggle === "Carts"
              ? "bg-linear-to-r from-[#4f39f6] to-purple-400"
              : ""
          } rounded-full px-4 py-2`}
        >
          Cart (2)
        </button>
      </div>
    </div>
  );
};

export default Cards;
