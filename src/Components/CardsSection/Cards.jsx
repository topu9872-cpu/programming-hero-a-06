import React, { useState } from "react";
import CardsEmpty from "../CardsEmpty";
import CardsApiCalling from './CardsApiCalling'

const Cards = ({promise, card }) => {
  
  
 const [selectedCard,setSelectedCard]=useState([])
 
  const [toggle, settoggle] = useState("Products");
  return (
    <div className="text-center pt-20 flex flex-col mx-auto">
      <div className="space-y-6 max-w-1/2 flex flex-col mx-auto">
        <h1 className="font-semibold text-5xl">Premium Digital Tools</h1>
        <p className="text-gray-500 text-wrap">
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
        
   
        >cart
    </button>
    
  </div>
  {toggle==='Carts' && <CardsEmpty selectedCard={selectedCard} setSlectedCard={setSelectedCard} />}
  {toggle==='Products' && <CardsApiCalling promise={promise} setSelectedCard={setSelectedCard} selectedCard={selectedCard}
  />}
  
    </div>
  );
};

export default Cards;
