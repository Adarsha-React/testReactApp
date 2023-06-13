import { useContext, useState } from "react";
import MainContainer from "./MainContainer";
import SearchContext from "../utilities/SearchContext";

const Body = () => {
  const [search, setSearch] = useState({
    searchText: "Burger King",
  });

  return (
    <SearchContext.Provider
      value={{
        search: search,
        setSearch: setSearch,
      }}
    >
      <MainContainer />
    </SearchContext.Provider>
  );
};

export default Body;
