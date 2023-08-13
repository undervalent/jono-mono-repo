import React from "react";
import * as Styled from "./filter-menu-mobile.styles";
import { MdSearch } from "react-icons/md";

import { Input } from "../../../../shared-components/input";
import { useFilterData } from "../../../../lib/hooks";
import { Modal } from "./components/modal";
import { Button } from "../../../../shared-components";

export const FilterMenuMobile = () => {
  const [{ searchQuery, labels }, { handleSearch, handleFilter }] =
    useFilterData();
  return (
    <Styled.Wrapper>
      <Input
        type="search"
        onChange={handleSearch}
        value={searchQuery}
        placeholder={labels.searchPlaceholder}
      />
      <Styled.MenuWrapper>
        <Modal />
        <Button purpose="primary" width={48} onClick={handleFilter}>
          <MdSearch aria-label="Search" size={25} />
        </Button>
      </Styled.MenuWrapper>
    </Styled.Wrapper>
  );
};
