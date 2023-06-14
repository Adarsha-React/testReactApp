import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { FETCH_ALL_RESTAURANTS } from "../constants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  useEffect(() => {
    fetchAllRestaurants(FETCH_ALL_RESTAURANTS);
  }, []);

  const fetchAllRestaurants = async (fecthURL) => {
    const data = await fetch(fecthURL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  const filterRestaurants = (searchText, allRestaurants) => {
    const filteredData = allRestaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredData);
    return filteredData;
  };

  return !allRestaurants ? (
    <Shimmer />
  ) : (
    <div>
      <div className="my-3 flex justify-center">
        <input
          data-testid="search"
          className="mx-2 p-1 outline-none font-mono border border-1 text-sm w-1/3"
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
      <div className="flex flex-wrap mr-48 ml-56 justify-start">
        {filteredRestaurants?.map((restaurant) => (
          <div key={restaurant?.data?.id}>
            <RestaurantCard {...restaurant?.data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
