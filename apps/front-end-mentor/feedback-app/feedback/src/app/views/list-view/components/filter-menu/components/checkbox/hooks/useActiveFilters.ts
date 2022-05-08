import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";

import { activeFiltersState } from "../../../../../../../state";

export function useActiveFilters(): [
  activeFilters: string[],
  handlers: { toggleCheckbox(val: any): void }
] {
  const [activeFilters, setActiveFilters] = useRecoilState(activeFiltersState);
  const resetFilters = useResetRecoilState(activeFiltersState);
  const handlers = React.useMemo(
    () => ({
      toggleCheckbox: (e: React.ChangeEvent<HTMLInputElement>): void => {
        const name = e.target.name;
        const index = activeFilters.indexOf(name);
        if (name === "all") {
          resetFilters();
          return;
        }

        const newActiveFilters = activeFilters.filter((el) => el !== "all");
        if (index === -1) {
          setActiveFilters([...newActiveFilters, name]);
          return;
        }

        const updatedList = newActiveFilters.filter((el) => el !== name);
        if (updatedList.length === 0) {
          resetFilters();
          return;
        }
        setActiveFilters(updatedList);
      },
    }),
    [activeFilters, resetFilters, setActiveFilters]
  );

  return [activeFilters, handlers];
}
