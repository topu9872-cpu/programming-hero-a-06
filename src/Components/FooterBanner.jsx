import React from 'react';

const FooterBanner = () => {
    return (
        <div>
            <div className="hero bg-linear-to-r from-[#4f39f6] to-purple-600 min-h-screen ">
  <div className="hero-content  text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold lg:text-nowrap text-center flex justify-center mx-auto text-white">Ready To Transfrom Your Workflow?</h1>
      <p className="py-6 lg:text-nowrap mx-auto flex justify-center text-gray-300">
Join thousanda of professionals who are already usung Diging Digitools to work smarter.<br></br>
Start your free trial today.

      </p>
      <div className='gap-10 flex justify-center mt-6'>
<button className="btn btn-outline btn-primary text-linear-to-r from-[#4f39f6] to-purple-600 bg-white rounded-full ">Explore Products</button>
     <button className="btn btn-outline btn-primary border border-white rounded-full text-white">
        View Pricing
     </button>
      </div>
      <p className='mt-10 text-gray-300'>14-day free trial <span className='text-5xl'>.</span> No credit card required <span className='text-5xl'>.</span> Cancel anytime </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default FooterBanner;