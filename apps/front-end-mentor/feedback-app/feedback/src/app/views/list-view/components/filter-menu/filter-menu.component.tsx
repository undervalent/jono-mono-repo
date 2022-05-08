import React from "react";
import { useRecoilValue } from "recoil";
import { Wrapper } from "./filter-menu.styles";
import { filterSelector } from "../../../../state";

import { Checkbox } from "./components/checkbox";
export const FilterMenu = () => {
  const filterOptions = useRecoilValue(filterSelector);

  return (
    <Wrapper>
      {filterOptions.map((el) => (
        <Checkbox key={el} value={el} />
      ))}
    </Wrapper>
  );
};
