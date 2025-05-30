import React from 'react';
import { Dropdown } from '../../../../../../components/dropdown';
import { Checkbox } from '../../../../../../components/inputs/checkbox';
import { useSelector } from 'react-redux';
import { getFilter } from '../../../../../../state/invoice';
const dropdownOptions = [
  {
    value: 'all',
    displayName: 'All',
  },
  {
    value: 'draft',
    displayName: 'Draft',
  },
  {
    value: 'pending',
    displayName: 'Pending',
  },
  {
    value: 'paid',
    displayName: 'Paid',
  },
];

export const StatusFilter = () => {
  const filter = useSelector(getFilter);
  return (
    <Dropdown>
      {dropdownOptions.map((el) => (
        <Checkbox
          label={el.displayName}
          value={el.value}
          checked={filter.includes(el.value)}
        />
      ))}
    </Dropdown>
  );
};
