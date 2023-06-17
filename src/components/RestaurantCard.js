import { RESTAURANT_IMG_CDN } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  costForTwo,
  deliveryTime,
  avgRating,
}) => {
  return (
    <div className="p-3 w-48 h-56 mt-2 mr-2 cursor-pointer hover:shadow-md">
      <img
        className="w-44 h-24 mb-2"
        src={RESTAURANT_IMG_CDN + cloudinaryImageId}
      />
      <h1 className="text-xs font-bold mb-1">{name}</h1>
      <h1 className="text-[9px] text-gray-500 mb-4">{cuisines?.join(", ")}</h1>
      <div className="flex justify-between mt-7">
        <h1 className="text-[8px] text-white font-semibold bg-green-500 px-2 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth=""
            stroke="currentColor"
            className="w-2 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>

          {avgRating}
        </h1>
        <h1 className="text-[7px] text-gray-500 font-semibold">
          {deliveryTime} MIN
        </h1>
        <h1 className="text-[7px] text-gray-500 font-semibold">
          ₹{costForTwo / 100} FOR TWO
        </h1>
      </div>
    </div>
  );
};

export default RestaurantCard;
