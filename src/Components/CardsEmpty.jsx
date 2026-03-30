import React from "react";

const CardsEmpty = ({selectedCard}) => {   

  return(
 
   
    <div className=" w-11/12">
<ul className="flex mx-36 mb-20 mt-10 text-nowrap text-2xl font-semibold">
  <li>Your cart</li>
</ul>

       {  
  selectedCard.map(card=>{
  return (
      <div>
      
      
      
      <div className="flex my-6 bg-[#f2f2f2] mx-26 py-4 rounded-md justify-center">
        <div className="flex ">
          <div className="lg:mx-28 pr-60 md:pr-90 lg:pr-120 items-center flex">
            <div>
              <img className="border mr-6 lg:mr-32" src={card.icon}></img>
            </div>
            <ul>
              <li className="text-sm text-nowrap font-semibold">{card.name}</li>
              <li className="text-gray-600">{card.price}</li>
            </ul>
          </div>
          <div className="my-auto lg:mr-30">
          <h3 className="mx-auto my-auto font-bold text-red-500">Remove</h3>
        </div>
        </div>
      </div>
    
    
    
    
  
    
    
    
      </div>
     );
      })}
      <div>
          <div className="flex justify-between mx-28 my-12">
    <h4 className="text-gray-500">Total:</h4>
    <h2 className="text-2xl font-bold">cvbnm</h2>
  </div>
  <div className="flex flex-col mx-28">
    <button className="text-white font-semibold rounded-full bg-linear-to-r
     from-[#4f39f6] to-purple-400 p-2 ">
      Proceed To Checkout
    </button>
  </div>
      </div>
  </div>
    
    

  )

}

export default CardsEmpty;
