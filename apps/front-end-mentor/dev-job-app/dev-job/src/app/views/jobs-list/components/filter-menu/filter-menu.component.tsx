import React from "react";
import Select from "react-select";

import {
  Wrapper,
  Divider,
  LastDivider,
  Search,
  HideOnMobile,
  SelectMenu,
} from "./filter-menu.styles";
import { Button, Checkbox } from "../../../../shared-components";
import { useFilterData } from "./hooks";

export const FilterMenu = () => {
  const [
    { locations, fullTime, searchQuery },
    { handleFullTime, handleSearch, handleLocation },
  ] = useFilterData();
  return (
    <Wrapper>
      <Divider>
        <Search>
          <input type="search" onChange={handleSearch} value={searchQuery} />
        </Search>
      </Divider>
      <HideOnMobile>
        <Divider>
          <SelectMenu>
            <Select isClearable options={locations} onChange={handleLocation} />
          </SelectMenu>
        </Divider>
      </HideOnMobile>
      <HideOnMobile>
        <LastDivider>
          <Checkbox
            label="Full Time"
            isSelected={fullTime}
            onCheckboxChange={handleFullTime}
          />
          <Button purpose="primary">Search</Button>
        </LastDivider>
      </HideOnMobile>
    </Wrapper>
  );
};
