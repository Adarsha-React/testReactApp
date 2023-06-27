import { MENU_IMG_URL } from "../constants";

const MenuDetails = ({ singleMenuDetails }) => {
  console.log(singleMenuDetails);

  const { title, itemCards } = singleMenuDetails;

  return (
    <div className="bg-slate-50 p-3">
      <h1 className="font-bold text-xs">
        {title + " (" + itemCards?.length + ") "}
      </h1>
      <div>
        {itemCards.map((item) => (
          <div key={item?.card?.info?.id} className="py-2 flex justify-between">
            <div>
              <h1 className="text-xs font-semibold">
                {item?.card?.info?.name}
              </h1>
              <h1 className="text-[9px]">₹{item?.card?.info?.price / 100}</h1>
            </div>
            <div>
              <img
                src={MENU_IMG_URL + item?.card?.info?.imageId}
                alt="Menu image"
                className="w-24 h-18"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDetails;
