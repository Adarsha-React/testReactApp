import { OFFER_IMG_URL } from "../constants";

const Offers = ({ offersInfo }) => {
  console.log(offersInfo);
  return (
    <div>
      <div className="flex flex-wrap">
        {offersInfo.map((offer) => (
          <div
            className="shadow-sm p-1 bg-slate-50 rounded-md border mr-2 pr-4 py-2 cursor-pointer mb-2"
            key={offer?.info?.couponCode}
          >
            <div className="flex">
              <img
                src={OFFER_IMG_URL + offer?.info?.offerLogo}
                alt="offer image"
                className="w-4 h-4"
              />
              <h1 className="text-[8px] font-bold text-gray-600">
                {offer?.info?.header}
              </h1>
            </div>
            <h1 className="text-[6px] font-semibold text-gray-400">
              {offer?.info?.couponCode + " | " + offer?.info?.description}
            </h1>
          </div>
        ))}
      </div>
      <hr className="w-full mx-auto mt-4 border-gray-300" />
    </div>
  );
};

export default Offers;
