import Image from "../../public/assets/products/banner.png";
import Image2 from "../../public/assets/products/Play.png";
const Banner = () => {
  return (
    <div className="max-w-10/12 flex mx-auto">
      <div
        className="relative min-h-162.5 flex items-
center overflow-hidden"
      >
        <div
          className=" mx-auto grid grid-cols-1 
lg:grid-cols-2 gap-10 items-center relative z-10"
        >
          {/* Left Content */}
          <div className="space-y-4">
            <div
              className="inline-flex items-center 
gap-2 bg-blue-200 text-[#4f39f6]
 text-sm font-medium px-5 py-2 rounded-full"
            >
              New: Ai-Powered Tools Available
            </div>

            <h1
              className="text-5xl font-semibold lg:text-5xl font-
bold leading-tight tracking-tighter"
            >
              Supercharge Your
              <br />
              <span
                className="bg-linear-to-r from-red-
400 via-orange-400 to-amber-400 bg-clip-text text-
transparent"
              >
                Digital Workflow
              </span>
            </h1>

            <p
              className="text-lg text-gray-400 max-w-
lg"
            >
              Access premium Ai tools design assets , templates,and productivity
              software-all in one place. Start crearing faster today. Explore
              Products
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                className="bg-linear-to-r from-[#4f39f6] to-purple-400
font-semibold px-4 rounded-full text-white"
              >
                {" "}
                Get Unlimited Access
              </button>
              <button className="btn btn-outline btn-primary rounded-full">
                <img src={Image2} /> Get Unlimited Access
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative flex justify-center 
lg:justify-end"
          >
            <div className="relative">
              <img
                className="relative h-130 w-auto object-
contain drop-shadow-2xl rounded-3xl animate-pulse"
                src={Image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
