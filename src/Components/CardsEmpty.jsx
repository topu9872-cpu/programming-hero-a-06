import { toast } from "react-toastify";
import Image from "/assets/products/shopping-cart.png";
import App from "../App";

const CardsEmpty = ({ selectedCard, setSlectedCard }) => {
  const handleProceed = () => {
    setSlectedCard([]);
  };

  const count = selectedCard
    .reduce((sum, card) => sum + Number(card.price), 0)
    .toFixed(2);

  const deleteSingleCard = (id) => {
    const filterArray = selectedCard.filter((card) => card.id !== id);

    toast.error("Card is Deleted");

    setSlectedCard(filterArray);
  };

  return (
    <div className=" w-11/12">
      {selectedCard.length === 0 && (
        <div className="bg-[#f9fafc] p-20 w-full pr-20 relative mt-10">
          <h2 className="text-2xl font-bold flex justify-start absolute top-4 pl-16 ">
            Your Cart
          </h2>
          <div className="justify-center ">
            <img className="w-10 flex mx-auto" src={Image} />
            <p className="text-gray-600 text-center mx-auto mt-4">
              Your cart is empty
            </p>
          </div>
        </div>
      )}

      {selectedCard.length > 0 && (
        <>
          <ul className="flex mx-36 mb-20 mt-10 text-nowrap text-2xl font-bold">
            <li>Your Cart</li>
          </ul>

          {selectedCard.map((card) => {
            return (
              <div key={card.id}>
                <div
                  key={card.id}
                  className="flex my-6 bg-[#f2f2f2] lg:mx-26 py-4 rounded-md justify-center"
                >
                  <div className="flex ">
                    <div className="lg:mx-28 pr-40 md:pr-90 lg:pr-100 items-center flex">
                      <div>
                        <img
                          className="p-4 bg-white rounded-full mr-26 max-w-20 lg:mr-32"
                          src={card.icon}
                        ></img>
                      </div>
                      <ul>
                        <li className="text-sm text-nowrap font-semibold">
                          {card.name}
                        </li>
                        <li className="text-gray-600">{card.price}</li>
                      </ul>
                    </div>
                    <div className="my-auto lg:mr-30">
                      <button
                        onClick={() => deleteSingleCard(card.id)}
                        className="mx-auto my-auto font-bold text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div>
            <div className="flex justify-between mx-28 my-12">
              <h4 className="text-gray-500">Total:</h4>
              <h2 className="text-2xl font-bold">{count}</h2>
            </div>

            <div className="flex flex-col mx-28">
              <button
                onClick={() => handleProceed()}
                className="text-white font-semibold rounded-full bg-linear-to-r
         from-[#4f39f6] to-purple-400 p-2 mb-20 "
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
          
        </>
      )}
    </div>
  );
};
export default CardsEmpty;
