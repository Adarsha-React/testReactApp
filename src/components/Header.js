import { Link } from "react-router-dom";
import appLogo from "../assets/images/appLogo.png";
import { useOnline } from "../utilities/useOnline";
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store?.cart?.items);
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
            <li className="mx-2 mt-2">
              <Link to="/about">
                <div className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.0}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </span>
                  <span className="text-xs font-semibold px-1">About</span>
                </div>
              </Link>
            </li>
            <Link to="/cart">
              <li data-testid="cart">
                <div className="px-3 ">
                  <button className="text-[9px] border-2 border-black px-1 font-bold hover:bg-orange-400">
                    {cartItems?.length}
                  </button>
                  <span className="text-xs pl-1 font-semibold hover:text-orange-400">
                    Cart
                  </span>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
