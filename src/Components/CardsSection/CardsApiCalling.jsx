import React, { use } from "react";
import CardsRender from "./CardsRender";



const CardsApiCalling = ({ promise,setSelectedCard,selectedCard }) => {
  const data = use(promise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-11/12 flex-col gap-8 ">
      {data.map((card, index) => (
       <div key={card.id} >
          <CardsRender card={card} index={index} setselectedCard={setSelectedCard} selectedCard={selectedCard} />
       
  </div>
      ))}
    </div>
  );
};

export default CardsApiCalling;
