import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="bg-zinc-950 
border-t border-red-900/50 pt-16 pb-10">
      <div className="max-w-7xl mx-
auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pl-10 text-white">
          {/* Logo & Description */}
          <div className="md:col-span-
5">
            <div className="flex 
items-center gap-3 mb-6">
              <h2 className="text-3xl 
font-bold tracking-tighter text-
white">
              DigiTools
              </h2>
            </div>


            <p className="text-zinc-
400 text-lg max-w-md">

Premium digital tools for creators,
professionals,and businesses.
Work smarter with our suite of
powerful tools.

            </p>


            {/* <div className="mt-8 
flex gap-6 text-2xl text-zinc-500">
                            <a 
href="#" className="hover:text-red-500 
transition-colors"><FaTwitter /></a>
                            <a 
href="#" className="hover:text-red-500 
transition-colors"><FaGithub /></a>
                            <a 
href="#" className="hover:text-red-500 
transition-colors"><FaLinkedin /></a>
                            <a 
href="#" className="hover:text-red-500 
transition-colors"><FaDiscord /></a>
                            <a 
href="#" className="hover:text-red-500 
transition-colors"><FaYoutube /></a>
                        </div> */}
          </div>


          {/* Quick Links */}
          <div className="md:col-span-
2">
            <h3 className="text-red-
400 font-semibold mb-6 text-
lg">Product</h3>
            <ul className="space-y-4 
text-zinc-400">
              <li>
                <a href="#" 
className="hover:text-white 
transition">
                 Features
                </a>
              </li>
              <li>
                <a href="#" 
className="hover:text-white 
transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" 
className="hover:text-white 
transition">
                Template
                </a>
              </li>
              <li>
                <a href="#" 
className="hover:text-white 
transition">
                 Integrations
                </a>
              </li>
            </ul>
          </div>


          <div className="md:col-span-
2">
            <h3 className="text-red-
400 font-semibold mb-6 text-
lg">Company</h3>
            <ul className="space-y-4 
text-zinc-400">
              <li>
                <a href="#" 
className="hover:text-white 
transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" 
className="hover:text-white 
transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" 
className="hover:text-white 
transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" 
className="hover:text-white 
transition">
                  Press
                </a>
              </li>
            </ul>
          </div>


          <div className="md:col-span-
3">
            <h3 className="text-red-
400 font-semibold mb-6 text-
lg">Legal</h3>
            <ul className="space-y-4 
text-zinc-400">
              <li>
                <a href="#" 
className="hover:text-white 
transition">
                Resources
                </a>
              </li>
              <li>
                <a href="#" 
className="hover:text-white 
transition">
                 Documentation
                </a>
              </li>
              <li>
                <a href="#" 
className="hover:text-white 
transition">
                 Help Center
                </a>
              </li>
                            <li>
                <a href="#" 
className="hover:text-white 
transition">
                Community 
                </a>
              </li>
                            <li>
                <a href="#" 
className="hover:text-white 
transition">
              contact
                </a>
              </li>
            </ul>
          </div>
<div>
    <h3 className="text-lg font-semibold text-nowrap">Social Links</h3>
<div className="flex gap-4">
<p className="bg-slate-400 rounded-full p-1"><FaInstagram/></p>
<p className="bg-slate-400 rounded-full p-1"><FaFacebook/></p>
<p className="bg-slate-400 rounded-full p-1"><FaXTwitter/></p>
</div>
</div>
        </div>

 
 
 
 

        {/* Bottom Bar */}
        <div className="mt-16 p-8 
border-t border-zinc-800 flex flex-col items-center
md:flex-row  justify-between gap-4 text-sm text-zinc-500 mb-10">
          <div>© {new 
Date().getFullYear()} Digitools. All 
rights reserved.</div>


          <div className="flex gap-6 ">
            <a href="#" 
className="hover:text-red-400 
transition">

Privacy Policy
            </a>
                        <a href="#" 
className="hover:text-red-400 
transition">

Terms of Service
            </a>
                        <a href="#" 
className="hover:text-red-400 
transition">

Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;