import React, { useContext, useState } from "react";

const FilterContext = React.createContext();
const UpdateFilterContext = React.createContext();

export const useFilter = () => {
  return useContext(FilterContext);
};

export const useUpdateFilter = () => {
  return useContext(UpdateFilterContext);
};

const FilterProvider = ({ value, children }) => {
  const [filter, setFilter] = useState(value);
  return (
    <FilterContext.Provider value={filter}>
      <UpdateFilterContext.Provider value={setFilter}>{children}</UpdateFilterContext.Provider>
    </FilterContext.Provider>
  );
};

export default FilterProvider
