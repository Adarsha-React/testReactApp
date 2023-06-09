import { Link } from "react-router-dom";
import appLogo from "../assets/images/appLogo.png";
import { useOnline } from "../mocks/utilities/useOnline";

const Header = () => {
  const isOnline = useOnline();

  return (
    <div className="container mx-auto mt-2">
      <div className="flex shadow-md">
        <div className="w-1/2">
          <a href="/">
            <img
              data-testid="logo"
              className="w-12 h-12"
              src={appLogo}
              alt="App Logo"
            />
          </a>
        </div>
        <div className=" w-3/2 container mx-auto flex justify-between mr-10 mt-2">
          <div className="container mx-auto flex justify-between">
            <div className="mx-2 w-3/2">
              <input
                data-testid="search"
                className="mx-2 p-1 outline-none border border-1 text-sm w-46 lg:w-80"
                type="text"
                placeholder="Search"
              />
              <button className="bg-gray-200 font-semibold text-xs px-2 py-1 rounded-md">
                Search
              </button>
            </div>
            <div>
              <ul className="flex">
                <li>{isOnline ? "🟢" : "🔴"}</li>
                <li className="mx-2 bg-gray-200 font-semibold text-xs px-2 py-1 rounded-md">
                  <Link to="/home"> Home </Link>
                </li>

                <li className="mx-2 bg-gray-200 font-semibold text-xs px-2 py-1 rounded-md">
                  <Link to="/about"> About </Link>
                </li>
                <li className="mx-2 bg-gray-200 font-semibold text-xs px-2 py-1 rounded-md">
                  <Link to="/cart"> Cart </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
