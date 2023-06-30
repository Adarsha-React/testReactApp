import { Link } from "react-router-dom";
import emptyCart from "../assets/images/emptyCart.png";

const EmptyCart = () => {
  return (
    <div className="w-2/3 mx-auto p-4 mt-2">
      <div className="mx-auto w-1/2">
        <img src={emptyCart} alt="empty cart" className="w-64 h-52" />
        <h1 className="text-sm font-semibold text-gray-600 mt-5 mx-auto w-2/3">
          Your cart is empty.
        </h1>
        <h1 className="text-[9px] mt-1 ml-7">
          You can go to home page to view more restaurants
        </h1>

        <button className="bg-orange-400 text-white text-[9px] p-2 font-bold rounded-md mt-5 ml-16">
          <Link to="/"> SEE RESTAURANTS NEAR YOU </Link>
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
