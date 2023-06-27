import { MENU_IMG_URL } from "../constants";
import { useState } from "react";

const MenuDetails = ({ singleMenuDetails }) => {
  const [isVisible, setIsVisible] = useState(true);

  const { title, itemCards } = singleMenuDetails;

  return (
    <div className="py-3">
      <div className="flex justify-between">
        <h1 className="font-bold text-xs">
          {title + " (" + itemCards?.length + ") "}
        </h1>
        <div>
          {isVisible ? (
            <button onClick={() => setIsVisible(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
          ) : (
            <button onClick={() => setIsVisible(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      <div>
        {isVisible &&
          itemCards.map((item) => (
            <div key={item?.card?.info?.id}>
              <hr className="w-full mx-auto my-1" />
              <div className="py-2 flex justify-between">
                <div>
                  <h1 className="text-xs font-semibold">
                    {item?.card?.info?.name}
                  </h1>
                  <h1 className="text-[9px]">
                    ₹
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </h1>
                </div>
                <div className="w-24 h-18">
                  <img
                    src={MENU_IMG_URL + item?.card?.info?.imageId}
                    alt="Menu image"
                    className="w-24 h-16 rounded-md"
                  />
                  <button className="mt-2 text-[9px] shadow-md text-green-400 px-3 py-1 font-bold bg-slate-200 rounded-sm ml-6">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <hr className="w-full mx-auto my-3 border border-4" />
    </div>
  );
};

export default MenuDetails;
