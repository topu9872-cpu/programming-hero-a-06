import React from "react";
import Image from '../../public/assets/products/shopping-cart.png'
const Navbar = () => {
  return (
    <div className="max-w-10/12 flex mx-auto">
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
  <h2 className=" text-[#4f39f6] text-4xl "> DigiTools</h2>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
  <a>FAQ</a>
</li>
        </ul>
      </div>

      <div className="navbar-end gap-5">
        <img src={Image} alt="cart" />
        <button>Login</button>
        <a className="btn bg-linear-to-r from-[#4f39f6] to-purple-500 text-white rounded-full">Get Started</a>
      </div>
    </div>
    </div>
  );
};


export default Navbar;