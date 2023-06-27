import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../constants";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenuDetails();
  }, []);

  const fetchMenuDetails = async () => {
    const data = await fetch(MENU_URL);
    const json = await data.json();
    setResMenu(json?.data);
    console.log(resMenu);
  };

  if (resMenu === null) return <h1>Loading menu details</h1>;

  const { name, cuisines, areaName } = resMenu?.cards[0]?.card?.card?.info;
  const { lastMileTravelString } = resMenu?.cards[0]?.card?.card?.info?.sla;

  const menuDetails =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const { title, itemCards } = menuDetails;
  return (
    <div className="w-2/3 mx-auto my-3">
      <div className="bg-slate-50 p-3">
        <h1 className="font-bold text-sm">{name}</h1>
        <h1 className="text-[8px] font-sans text-gray-500 pt-2">
          {cuisines.join(", ")}
        </h1>
        <div className="text-[8px] text-gray-500">
          <span>{areaName}</span> <span>{lastMileTravelString}</span>
        </div>
      </div>
      <div className="bg-slate-50 p-3">
        <h1 className="font-bold text-xs">{title}</h1>
        <div>
          {itemCards.map((item) => (
            <li className="list-none text-xs font-semibold py-2">
              {item.card.info.name}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
