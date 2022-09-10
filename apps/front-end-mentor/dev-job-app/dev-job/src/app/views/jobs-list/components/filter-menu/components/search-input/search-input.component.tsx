import React from "react";
import { useFilterData } from "../../hooks";
import { Input, Wrapper } from "./search-input.styles";
import { FaSearch } from "react-icons/fa";

export const SearchInput = () => {
  const [{ searchQuery }, { handleSearch }] = useFilterData();
  return (
    <Wrapper>
      <span>
        <FaSearch color="var(--primary-alpha)" size="2rem" />
      </span>
      <Input
        type="search"
        aria-label="Filter by title"
        onChange={handleSearch}
        value={searchQuery}
        placeholder="Filter by title, companies, expertise..."
      />
    </Wrapper>
  );
};

export default SearchInput;
