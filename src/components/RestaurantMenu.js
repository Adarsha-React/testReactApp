import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../constants";
import MenuDetails from "./MenuDetails";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenuDetails();
  }, []);

  const fetchMenuDetails = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResMenu(json?.data);
  };

  if (resMenu === null) return <h1>Loading menu details</h1>;

  console.log(resMenu);

  const { name, cuisines, areaName } = resMenu?.cards[0]?.card?.card?.info;
  const { lastMileTravelString } = resMenu?.cards[0]?.card?.card?.info?.sla;

  const completeMenuDetails =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const typeItemCategory =
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

  const menuCategoryDetails = completeMenuDetails.filter(
    (singleItem) => singleItem.card.card["@type"] === typeItemCategory
  );

  return (
    <div className="bg-gray-50">
      <div className="w-2/5 mx-auto">
        <div className="py-3">
          <h1 className="font-bold text-sm">{name}</h1>
          <h1 className="text-[9px] pt-2 font-mono text-gray-500">
            {cuisines.join(", ")}
          </h1>
          <div className="text-[9px] font-mono text-gray-500">
            <span>{areaName + ", "}</span> <span>{lastMileTravelString}</span>
          </div>
        </div>
        <div>
          {menuCategoryDetails.map((singleCategory, index) => (
            <div key={index}>
              <MenuDetails singleMenuDetails={singleCategory?.card?.card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
