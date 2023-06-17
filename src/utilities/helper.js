export const filterRestaurants = (searchText, allRestaurants) => {
  const filteredData = allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
};

export const sortByDeliveryTime = (allRestaurants) => {
  const sortedRestaurants = [...allRestaurants].sort(
    (a, b) => a?.data?.deliveryTime - b?.data?.deliveryTime
  );

  return sortedRestaurants;
};

export const sortByRating = (allRestaurants) => {
  const sortedRestaurants = [...allRestaurants].sort(
    (a, b) => a?.data?.avgRating - b?.data?.avgRating
  );
  return sortedRestaurants;
};
