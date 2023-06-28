import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);
  return (
    <div className="container mx=auto">
      <h1>Cart page</h1>
    </div>
  );
};

export default Cart;
