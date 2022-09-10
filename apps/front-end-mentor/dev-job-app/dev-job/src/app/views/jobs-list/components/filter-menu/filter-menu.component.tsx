import React from "react";
import { Select } from "./components/select";

import {
  Wrapper,
  SearchWrapper,
  SelectMenu,
  SearchButtonWrapper,
  SingleWord,
} from "./filter-menu.styles";
import { Button, Checkbox } from "../../../../shared-components";
import { useFilterData } from "./hooks";
import { SearchInput } from "./components/search-input";

export const FilterMenu = () => {
  const [{ locations, fullTime }, { handleFullTime, handleLocation }] =
    useFilterData();

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchInput />
      </SearchWrapper>
      <SelectMenu>
        <Select locations={locations} handleLocation={handleLocation} />
      </SelectMenu>
      <SearchButtonWrapper>
        <Checkbox
          label={
            <span>
              Full Time <SingleWord>Only</SingleWord>
            </span>
          }
          isSelected={fullTime}
          onCheckboxChange={handleFullTime}
        />
        <Button purpose="primary">Search</Button>
      </SearchButtonWrapper>
    </Wrapper>
  );
};
