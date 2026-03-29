import React from "react";
import Image1 from "../../../public/assets/products/user.png";
import Image2 from "../../../public/assets/products/rocket.png";
import Image3 from "../../../public/assets/products/package.png";
const FakeCards = () => {
  return (
    <div className="max-w-10/12 mx-auto">
      <div className="text-center mt-10 space-y-5">
        <h1 className="text-4xl font-semibold">Get Started In 3 Steps</h1>
        <p className="text-gray-600">
          Start using premium digital tools in munutes,not hours.
        </p>
      </div>
      <div className="text-center mt-10 gap-6 grid lg:grid-cols-3">
        <div className="bg-[#f1f1f1] space-y-4 relative pt-12 pb-16">
          <p className="bg-[#4f39f6] px-3 py-2 font-bold text-white rounded-full absolute top-5 left-5/6 translate-x-1/2 flex">
            01
          </p>
          <img className="flex mx-auto justify-center" src={Image1} />
          <h3 className="text-2xl font-semibold">Create Account</h3>
          <p className="text-gray-600">
            Sing for free in Seconds .No credit Cards <br></br> required to get
            started.
          </p>
        </div>

        <div className="bg-[#f1f1f1] space-y-4 pt-12 pb-16 relative">
          <p className="bg-[#4f39f6] font-bold text-white px-3 py-2 rounded-full absolute top-5 left-5/6 translate-x-1/2 flex">
            02
          </p>
          <img className="flex mx-auto justify-center" src={Image2} />
          <h3 className="text-2xl font-semibold">Choose Products</h3>
          <p className="text-gray-600">
            Browse our catalog and select the tools <br></br>that fit our needs.
          </p>
        </div>

        <div className="bg-[#f1f1f1]  space-y-4 pt-12 pb-16 relative">
          <p className="bg-[#4f39f6] font-bold text-white px-3 py-2 rounded-full absolute top-5 left-5/6 translate-x-1/2 flex">
            03
          </p>
          <img className="flex mx-auto justify-center" src={Image3} />
          <h3 className="text-2xl font-semibold">Start Creating</h3>
          <p className="text-gray-600">
            Download and start using your premium <br></br> tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FakeCards;
