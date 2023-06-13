import { createContext } from "react";

const SearchContext = createContext({
  search: {
    searchText: "Biriyani",
  },
});

export default SearchContext;
