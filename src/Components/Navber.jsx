
import Image from "/assets/products/shopping-cart.png";
const Navbar = ({ count}) => {



  return (
<div className="max-w-10/12 mx-auto px-4">
      <div className="navbar">
        <div className="navbar-start">
          <div className="flex items-center gap-1 font-bold text-xl overflow-hidden">
            <h2 className=" text-[#4f39f6] md:text-3xl "> DigiTools</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
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
          <p className=' px-2 bg-red-400 text-white absolute top-2 -translate-x-42 rounded-full'>{count}</p>
          <img className="hidden sm:block" src={Image} alt="cart" />
          <button className="hidden sm:block">Login</button>
          <a className="btn bg-linear-to-r from-[#4f39f6] to-purple-500 text-white rounded-full">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
