import "./App.css";
import Navbar from "./Components/Navber";
import Banner from "./Components/Banner";
import Ratting from "./Components/Ratting";
import Cards from "../src/Components/CardsSection/Cards";
import FakeCards from "./Components/CardsSection/FakeCards";
import FakeCardBuying from "./Components/CardsSection/FakeCardBuying";
import Footer from "./Components/CardsSection/Footer";
import { Suspense, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FooterBanner from './Components/FooterBanner';
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  const [CartCount , setCartCount]=useState(0);
  const handleBuy= ()=>{
    setCartCount(CartCount+ 1)
  }


  const fetchData = async () => {
    const res = await fetch("../public/Api.json");
    return await res.json();
  };

  const promise = fetchData();

  return (
    <>

     <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
      <Navbar count={CartCount} />
      <Banner />
      <Ratting />

      <Suspense fallback={<p className="flex justify-center mx-auto text-3xl">Loading...........</p>}>
        <Cards promise={promise} handleBuy={handleBuy} count={CartCount} />
      </Suspense>
<ToastContainer />
      <FakeCards />
      <FakeCardBuying />
      <FooterBanner/>
      <Footer />
    </>
  );
}

export default App;
