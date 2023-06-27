import { MENU_IMG_URL } from "../constants";
import { useState } from "react";

const MenuDetails = ({ singleMenuDetails }) => {
  const [isVisible, setIsVisible] = useState(true);

  const { title, itemCards } = singleMenuDetails;

  return (
    <div className="bg-slate-50 p-3">
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
                className="w-5 h-5"
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
                className="w-5 h-5"
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
            <div
              key={item?.card?.info?.id}
              className="py-2 flex justify-between"
            >
              <div>
                <h1 className="text-xs font-semibold">
                  {item?.card?.info?.name}
                </h1>
                <h1 className="text-[9px]">₹{item?.card?.info?.price / 100}</h1>
              </div>
              <div className="w-24 h-18">
                <img
                  src={MENU_IMG_URL + item?.card?.info?.imageId}
                  alt="Menu image"
                  className="w-24 h-16"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuDetails;
