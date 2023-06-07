import appLogo from "../assets/images/appLogo.png";

const Header = () => {
  return (
    <div className="container mx-auto mt-2">
      <div className="flex shadow-md">
        <div className="w-1/2">
          <img className="w-12 h-12" src={appLogo} alt="App Logo" />
        </div>
        <div className=" w-3/2 container mx-auto flex justify-between mr-10 mt-2">
          <div className="container mx-auto flex justify-between">
            <div className="mx-2 w-3/2">
              <input
                className="mx-2 p-1 outline-none border border-1 text-sm w-80"
                type="text"
                placeholder="Search"
              />
              <button className="bg-gray-200 font-semibold text-xs px-2 py-1 rounded-md">
                Search
              </button>
            </div>
            <div className="flex">
              <div className="mx-2">
                <h1 className="bg-gray-200 font-semibold text-xs px-2 py-1 rounded-md">
                  About
                </h1>
              </div>
              <div className="mx-2">
                <h1 className="bg-gray-200 font-semibold text-xs px-2 py-1 rounded-md">
                  Cart
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
