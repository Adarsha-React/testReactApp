import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { FETCH_ALL_RESTAURANTS } from "../constants";
import {
  filterRestaurants,
  sortByDeliveryTime,
  sortByRating,
} from "../utilities/helper";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [carousels, setCarousels] = useState(null);

  useEffect(() => {
    fetchAllRestaurants(FETCH_ALL_RESTAURANTS);
  }, []);

  const fetchAllRestaurants = async (fecthURL) => {
    const data = await fetch(fecthURL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setCarousels(json?.data?.cards[0]?.data?.data?.cards);
  };

  return !allRestaurants ? (
    <Shimmer />
  ) : (
    <div className="">
      {/* <Carousel carousels={carousels} /> */}
      <div className="my-3 w-2/3 mx-auto sticky top-2">
        <input
          data-testid="search"
          className="mr-2 p-1 outline-none font-mono border border-1 text-sm w-1/3"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-gray-200 font-mono font-bold text-xs px-2 py-1 rounded-md"
          onClick={() => {
            const data = filterRestaurants(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="w-2/3 mx-auto flex justify-end">
        <button
          className="font-mono text-[9px] ml-5"
          onClick={() => {
            const sortedByDeliveryTime = sortByDeliveryTime(allRestaurants);
            setFilteredRestaurants(sortedByDeliveryTime);
          }}
        >
          Delivery Time
        </button>
        <button
          className="font-mono text-[9px] ml-5"
          onClick={() => {
            const sortedByRatings = sortByRating(allRestaurants);
            setFilteredRestaurants(sortedByRatings);
          }}
        >
          Rating
        </button>
        <button className="font-mono font-bold text-xs ml-5">Filters</button>
      </div>
      <div>
        <hr className="w-2/3 mx-auto mt-1" />
      </div>
      <div className="flex flex-wrap w-2/3 mx-auto">
        {filteredRestaurants?.length === 0 ? (
          <div>
            <h1>No restaurant found!!</h1>
          </div>
        ) : (
          filteredRestaurants?.map((restaurant) => (
            <div key={restaurant?.data?.id}>
              <Link to={"restaurants/" + restaurant?.data?.id}>
                <RestaurantCard {...restaurant?.data} />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
