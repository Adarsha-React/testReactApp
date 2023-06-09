import { useDispatch } from "react-redux";
import { addItem, clearCart } from "./cartSlice";

const Body = () => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("Grapes"));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="my-10 container mx-auto">
      <button
        className="bg-gray-200 font-semibold text-xs px-2 py-1 rounded-md mr-10"
        onClick={handleAddItem}
      >
        Add to Cart
      </button>
      <button
        className="bg-gray-200 font-semibold text-xs px-2 py-1 rounded-md"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Body;
