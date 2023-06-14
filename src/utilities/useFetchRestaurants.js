import { useEffect, useState } from "react";

export const useFetchRestaurants = (fecth_Restaurants_URL) => {
  const [restaurants, setRestaurants] = useState(null);

  const fetchAllRestaurants = async (fecthURL) => {
    const data = await fetch(fecthURL);
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };
  useEffect(() => {
    fetchAllRestaurants(fecth_Restaurants_URL);
  }, []);

  return restaurants;
};
