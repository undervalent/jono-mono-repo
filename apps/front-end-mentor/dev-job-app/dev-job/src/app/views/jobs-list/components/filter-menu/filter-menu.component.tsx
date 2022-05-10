import React from "react";
import Select from "react-select";

import { Wrapper } from "./filter-menu.styles";
import { Button, Checkbox } from "../../../../shared-components";
import { useAppDispatch, useAppSelector } from "../../../../state";
import {
  toggleFullTime,
  setSearchQuery,
  setLocation,
} from "../../../../state/features/filtered";

export const FilterMenu = () => {
  const dispatch = useAppDispatch();

  const { locations, fullTime, searchQuery } = useAppSelector((state) => ({
    fullTime: state.filter.fullTime,
    searchQuery: state.filter.searchQuery,
    locations: state.jobList.locations,
  }));

  const handleFullTime = () => dispatch(toggleFullTime());
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchQuery(e.target.value));
  const handleLocation = (option: any) => {
    const value = option && option.value ? [option.value] : [];
    dispatch(setLocation(value));
  };
  return (
    <Wrapper>
      <div className="divider">
        <div className="content">
          <input type="search" onChange={handleSearch} value={searchQuery} />
        </div>
      </div>
      <div className="divider">
        <div className="content2">
          <Select isClearable options={locations} onChange={handleLocation} />
        </div>
      </div>
      <div className="last-divider">
        <Checkbox
          label="Full Time Only"
          isSelected={fullTime}
          onCheckboxChange={handleFullTime}
        />
        <Button purpose="primary">Search</Button>
      </div>
    </Wrapper>
  );
};
