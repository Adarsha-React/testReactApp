import { RESTAURANT_IMG_CDN } from "../constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, costForTwo }) => {
  return (
    <div className="p-3 w-48 h-56 mt-2 cursor-pointer hover:shadow">
      <img
        className="w-44 h-24 mb-2"
        src={RESTAURANT_IMG_CDN + cloudinaryImageId}
      />
      <h1 className="text-xs font-bold mb-1">{name}</h1>
      <h1 className="text-[9px] text-gray-500 mb-4">{cuisines.join(", ")}</h1>
      <div>
        <h1 className="text-[7px] text-gray-500 font-semibold">
          ₹{costForTwo / 100} FOR TWO
        </h1>
      </div>
    </div>
  );
};

export default RestaurantCard;
