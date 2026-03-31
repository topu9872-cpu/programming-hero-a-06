import React,{useState} from 'react';
import Cards from './Cards';
import { toast } from 'react-toastify';

const CardsRender = ({card,setselectedCard,selectedCard}) => {
  
      const [isBuy, setisBuy] = useState(false);

const handleSeleted = ()=>{

  setisBuy(true)

setselectedCard([...selectedCard, card])
toast.success('Product is in to the Cart')
}


    return (
        
    
      <div className=" mt-10 flex justify-center flex-col h-full">
        <div key={card.id} className="card w-86 h-full flex justify-center mx-auto">
          <div className='flex flex-col h-full hover:shadow-[#0ff] hover:-translate-1'>
          <div className="card-body ">
            <div className="grid grid-cols-2 justify-between relative">
              <img
                className="border border-gray-300 rounded-full p-2 max-w-12"
                src={card.icon}
                alt="image"
              />
              <p
                className={`text-end absolute -top-4  px-6 py-1 rounded-full font-semibold ${card.tag === "new" 
                  ? "text-green-700 bg-green-200 translate-x-60" : ""}  ${card.tag === "popular" 
                      ? "text-purple-700 bg-purple-200 translate-x-52" : ""} ${card.tag === "best seller" 
                          ? "translate-x-50 text-yellow-700 bg-amber-200" : ""} `}
              >
                {card.tag}
              </p>
            </div>
            <div className="space-y-2 text-start ">
              <h2 className="text-3xl font-bold">{card.name}</h2>
              <p>{card.description}</p>
              <span className="text-xl ">
                <span className="text-3xl font-semibold">{card.price}</span>/
                {card.period}
              </span>
            </div>
            {card.features.map((feature, ind) => (
              <ul key={ind} className=" flex flex-col text-nowrap gap-2 text-xs ">
                <li className='flex'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className='flex'>{feature}</span>
                </li>
              </ul>
            ))}
            <div className="mt-auto">
              <button
                onClick={() => handleSeleted()}
                className={`btn text-white ${isBuy ? "bg-green-400" : "bg-linear-to-r from-[#4f39f6] to-purple-600"} rounded-full 
   btn-block flex-col  font-semibold`}
              >
                {isBuy ? 'Add To Cart' : "Buy Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
      
</div>
   
        
    );
};

export default CardsRender;