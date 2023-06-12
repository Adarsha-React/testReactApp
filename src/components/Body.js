import { useFetchRestaurants } from "../utilities/useFetchRestaurants";
import { FETCH_ALL_RESTAURANTS } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const restaurants = useFetchRestaurants(FETCH_ALL_RESTAURANTS);
  console.log(restaurants);

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

export default Body;
