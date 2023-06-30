import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { addItem, clearCart, removeItem } from "./cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);

  const getTotal = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const { price } = item?.card?.info || item?.card?.defaultPrice;
      totalPrice += (price / 100) * item?.quantity;
    });
    return { totalPrice };
  };

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const emptyCart = () => {
    dispatch(clearCart());
  };

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };

  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="w-2/3 mx-auto p-4 mt-2 bg-slate-50">
      {cartItems.map((item) => (
        <div key={item?.card?.info?.id} className="grid grid-cols-3 w-2/5 mt-2">
          <h1 className="text-[8px] font-semibold mt-1">
            {item?.card?.info?.name}
          </h1>
          <div className="flex border w-14 justify-around font-bold">
            <button
              className="text-sm text-green-600"
              onClick={() => removeFoodItem(item)}
            >
              -
            </button>
            <h1 className="text-[10px] mt-1 text-green-600">
              {item?.quantity}
            </h1>
            <button
              className="text-sm text-green-600"
              onClick={() => addFoodItem(item)}
            >
              +
            </button>
          </div>
          <h1 className="text-[9px] mt-1">
            ₹
            {(item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100) * item?.quantity}
          </h1>
        </div>
      ))}
      <hr className=" mt-5 border-dashed border-gray-300 w-1/3" />
      <div className="mt-5">
        <h1 className="text-[9px] font-bold">Bill Details</h1>
        <div className="mt-1 grid grid-cols-2 w-2/4">
          <h1 className="text-[8px]"> Item Total</h1>
          <h1 className="text-[8px] ml-4">₹ {getTotal().totalPrice} </h1>
        </div>
      </div>

      <div className="mt-5">
        <button
          className="bg-orange-400 rounded-md text-xs font-bold p-1"
          onClick={() => emptyCart()}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
