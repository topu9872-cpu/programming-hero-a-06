import "./App.css";
import Navbar from "./Components/Navber";
import Banner from "./Components/Banner";
import Ratting from "./Components/Ratting";
import Cards from "../src/Components/CardsSection/Cards";
import FakeCards from "./Components/CardsSection/FakeCards";
import FakeCardBuying from "./Components/CardsSection/FakeCardBuying";
import Footer from "./Components/CardsSection/Footer";
import { Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FooterBanner from './Components/FooterBanner';
function App({ card }) {
  
  const fetchData = async () => {
    const res = await fetch("../public/Api.json");
    return await res.json();
  };

  const promise = fetchData();

  return (
    <>
      <Navbar />
      <Banner />
      <Ratting />

      <Suspense fallback={<p>Loading...............</p>}>
        <Cards promise={promise} card={card} />
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
