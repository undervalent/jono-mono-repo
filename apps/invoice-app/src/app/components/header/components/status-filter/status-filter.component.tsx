import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '@state/invoice';
import { DropdownMenu } from 'radix-ui';
import { setFilter, InvoiceFilter } from '@state/invoice';
import { Checkbox } from '@components/inputs/checkbox';
import './status-filter.styles.css';

interface IntDropDownOptions {
  value: InvoiceFilter;
  displayName: string;
}

const dropdownOptions: IntDropDownOptions[] = [
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
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="status-filter__trigger">
        Filter By Status
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="status-filter__dropdown">
        {dropdownOptions.map((option) => (
          <DropdownMenu.Item
            key={option.value}
            onSelect={() => dispatch(setFilter(option.value))}
          >
            <Checkbox
              label={option.displayName}
              checked={filter === option.value}
            />
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
