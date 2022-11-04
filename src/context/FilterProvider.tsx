import React, { useContext, useState } from "react";

const FilterContext = React.createContext("");
const UpdateFilterContext = React.createContext<React.Dispatch<any>>(() => {});

export const useFilter = () => {
  return useContext(FilterContext);
};

export const useUpdateFilter = () => {
  return useContext(UpdateFilterContext);
};

type Props = {
  children: React.ReactNode;
  value: string;
};

const FilterProvider = ({ children, value }: Props) => {
  const [filter, setFilter] = useState(value);
  return (
    <FilterContext.Provider value={filter}>
      <UpdateFilterContext.Provider value={setFilter}>
        {children}
      </UpdateFilterContext.Provider>
    </FilterContext.Provider>
  );
};

export default FilterProvider;
