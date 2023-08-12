import React from "react";
import * as Styled from "./filter-menu.styles";
import { Button, Checkbox } from "../../../../shared-components";
import { MdLocationPin, MdSearch } from "react-icons/md";
import { useTheme } from "styled-components";
import { useFilterData } from "../../../../lib/hooks";

import { Input } from "../../../../shared-components/input";
export const FilterMenu = () => {
  const theme: any = useTheme();
  const [
    { searchQuery, fullTime, labels, locationQuery },
    { handleSearch, handleFullTime, handleLocation, handleFilter },
  ] = useFilterData();
  return (
    <Styled.Wrapper>
      <Input
        icon={<MdSearch size="30px" color={theme?.colors?.violet} />}
        type="search"
        onChange={handleSearch}
        value={searchQuery}
        placeholder={labels.searchPlaceholder}
      />
      <Input
        type="text"
        onChange={handleLocation}
        value={locationQuery}
        icon={<MdLocationPin size="30px" color={theme?.colors?.violet} />}
        placeholder={labels.locationPlaceholder}
      />
      <Styled.MenuWrapper>
        <Checkbox
          label={labels.checkboxLabel}
          isSelected={fullTime}
          onCheckboxChange={handleFullTime}
        />
        <Button purpose="primary" onClick={handleFilter} width={48}>
          Search
        </Button>
      </Styled.MenuWrapper>
    </Styled.Wrapper>
  );
};
