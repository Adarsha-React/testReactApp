import { Link } from "react-router-dom";
import appLogo from "../assets/images/appLogo.png";
import { useOnline } from "../utilities/useOnline";
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between px-5 shadow-sm">
      <div className="">
        <a href="/">
          <img
            data-testid="logo"
            className="w-12 h-12"
            src={appLogo}
            alt="App Logo"
          />
        </a>
      </div>

      <div className="flex justify-between pt-2">
        <div>
          <ul className="flex">
            <li data-testid="isOnline">
              {isOnline ? (
                <button className="w-2 h-2 bg-green-500 rounded-lg mr-10"></button>
              ) : (
                <button className="w-2 h-2 bg-red-500 rounded-lg mr-10"></button>
              )}
            </li>
            <li className="mx-2 bg-gray-200 font-semibold text-xs px-2 py-1 rounded-md">
              <Link to="/about"> About </Link>
            </li>
            <Link to="/cart">
              <li
                className="mx-2 bg-gray-200 font-semibold text-xs px-2 py-1 rounded-md"
                data-testid="cart"
              >
                Cart - {cartItems?.length}
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
