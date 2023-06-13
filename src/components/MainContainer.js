import { useFetchRestaurants } from "../utilities/useFetchRestaurants";
import { FETCH_ALL_RESTAURANTS } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useContext } from "react";
import SearchContext from "../utilities/SearchContext";

const MainContainer = () => {
  const restaurants = useFetchRestaurants(FETCH_ALL_RESTAURANTS);

  const { search } = useContext(SearchContext);

  console.log(search.searchText);

  if (!restaurants) return null; // Early return

  return (
    <div className="flex flex-wrap mx-48 justify-around">
      {restaurants.map((restaurant) => (
        <div key={restaurant?.data?.id}>
          <RestaurantCard {...restaurant?.data} />
        </div>
      ))}
    </div>
  );
};

export default MainContainer;
