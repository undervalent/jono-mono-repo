import React from "react";
import { useRecoilState } from "recoil";
import { invoiceFilterState } from "../../../../../../state";
import { Dropdown } from "../../../../../../components/dropdown";
import { Checkbox } from "../../../../../../components/inputs/checkbox";

const dropdownOptions = [
  {
    value: "all",
    displayName: "All",
  },
  {
    value: "draft",
    displayName: "Draft",
  },
  {
    value: "pending",
    displayName: "Pending",
  },
  {
    value: "paid",
    displayName: "Paid",
  },
];

export const StatusFilter = () => {
  const [invoiceFilter, setInvoiceFilter] = useRecoilState(invoiceFilterState);

  return (
    <Dropdown>
      {dropdownOptions.map((el) => (
        <Checkbox
          label={el.displayName}
          value={el.value}
          checked={invoiceFilter.includes(el.value)}
        />
      ))}
    </Dropdown>
  );
};
