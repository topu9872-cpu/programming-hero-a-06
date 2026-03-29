import React from "react";

const Ratting = () => {
  return (
    <div>
     <ul className="max-w-7xl mx-auto bg-linear-to-r from-[#4f39f6] to-purple-400 py-10 rounded-lg
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center justify-center gap-8">
        <span className="pl-10 md:pl-40 lg:pl-60">
          <h2 className="text-3xl font-bold text-white ">50k+</h2>
          <p className="text-white text-nowrap">Active Users</p>
        </span>
        <span className="border-l border-white pl-10 md:pl-40 lg:pl-60">
          <h2 className="text-3xl font-bold text-white">200+</h2>
          <p className="text-white text-nowrap">Premium Tools</p>
        </span>
        <span className="border-l border-white pl-10 md:pl-40 lg:pl-60">
          <h2 className="text-3xl font-bold text-white">4.9</h2>
          <p className="text-white text-nowrap">Ratting</p>
        </span>
      </ul>
    </div>
  );
};

export default Ratting;
