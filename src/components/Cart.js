import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);

  const getTotal = () => {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      const { price } = item?.card?.info;

      totalPrice += (price / 100) * item?.quantity;
    });
    return { totalPrice };
  };

  return (
    <div className="w-2/3 mx-auto p-4 mt-2 bg-slate-50">
      {cartItems.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between w-1/3 mt-2"
        >
          <h1 className="text-[8px] font-semibold w-3/5 mt-1">
            {item?.card?.info?.name}
          </h1>
          <div className="mx-2 flex border w-14 justify-around font-bold">
            <button className="text-sm text-green-600">-</button>
            <h1 className="text-[9px] mt-1 text-green-600">{item?.quantity}</h1>
            <button className="text-sm text-green-600">+</button>
          </div>
          <h1 className="text-[9px] mt-1">
            ₹
            {(item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100) * item?.quantity}
          </h1>
        </div>
      ))}

      <div className="mt-5">
        <h1 className="text-[9px] font-bold">Bill Details</h1>
        <div className="mt-1 flex justify-between w-2/6">
          <h1 className="text-[8px]"> Item Total</h1>
          <h1 className="text-[8px]">₹ {getTotal().totalPrice} </h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
