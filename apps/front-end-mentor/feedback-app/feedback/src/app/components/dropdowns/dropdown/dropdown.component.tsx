import "./dropdown.styles.css";
import React from "react";
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import { useRecoilState } from "recoil";
import { FaCheck } from "react-icons/fa";
import { DropdownValue } from "@feedback/types";
import { sortByState } from "../../../state";

import { Wrapper } from "./dropdown.styles";

const values: DropdownValue[] = [
  {
    label: "Most Upvotes",
    value: "upvotes",
    orderBy: "desc",
  },
  {
    label: "Least Upvotes",
    value: "upvotes",
    orderBy: "asc",
  },
  {
    label: "Most Comments",
    value: "commentCount",
    orderBy: "desc",
  },
  {
    label: "Least Comments",
    value: "commentCount",
    orderBy: "asc",
  },
];

export const Dropdown = () => {
  const [sortBy, setSortBy] = useRecoilState(sortByState);

  return (
    <Wrapper>
      <Menu>
        <MenuButton>
          Sort by: <span className="dropdown-span">{sortBy.label}</span>
          <span aria-hidden>▾</span>
        </MenuButton>
        <MenuList>
          {values.map((el) => (
            <MenuItem key={el.label} onSelect={() => setSortBy(el)}>
              {el.label}{" "}
              {el.label === sortBy.label && (
                <FaCheck color="rgba(173, 31, 234, 1)" />
              )}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Wrapper>
  );
};
