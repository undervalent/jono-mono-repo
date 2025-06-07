import React from 'react';
import type { Entry } from '../../lib/schemas';
import { TextField } from '../../../../components/inputs/text-field';
import { IconButton } from '../../../../components/buttons';
import { FaTrash } from 'react-icons/fa';
import './entry-list.css';

function useEntryList(
  entries: Entry[] | undefined,
): [
  { items: Entry[] },
  { addItem: () => void; removeItem: (id: string) => void },
] {
  const [items, setItems] = React.useState(
    entries || [{ id: crypto.randomUUID(), ...createRefs() }],
  );
  function createRefs() {
    return {
      name: '',
      quantity: 1,
      price: 0,
    };
  }

  return [
    { items },
    {
      addItem: () =>
        setItems((prev: Entry[]) => [
          ...prev,
          { id: crypto.randomUUID(), ...createRefs() },
        ]),
      removeItem: (id: string) => {
        setItems((prev: Entry[]) => prev.filter((item) => item.id !== id));
      },
    },
  ];
}

export function EntryList({ entries }: { entries: Entry[] | undefined }) {
  const [{ items }, { addItem, removeItem }] = useEntryList(entries);
  console.log('ITEMS -->', items);
  return (
    <div className="entry-list">
      {items?.map((entry) => (
        <div key={entry.id} className="entry-list__item">
          <TextField
            defaultValue={entry.name}
            type="text"
            name="name"
            labelValue="Item name"
            width="21.4rem"
          />
          <TextField
            labelValue="Qty."
            defaultValue={entry.quantity}
            type="text"
            name="quantity"
            width="4.8rem"
          />
          <TextField
            defaultValue={entry.price}
            type="text"
            name="price"
            labelValue="Price"
            width="11rem"
          />
          <div className="entry-list__total">
            <span className="entry-list__total-label">Total</span>
            <span className="entry-list__total-value">
              {' '}
              {entry.total || entry.price * entry.quantity}
            </span>
          </div>
          <IconButton
            onClick={() => removeItem(entry.id)}
            icon={<FaTrash />}
            iconLabel={`Delete ${entry.id}`}
            style={{ marginTop: '2.5rem' }}
          />
        </div>
      ))}
      <button type="button" onClick={addItem}>
        Add Item
      </button>
    </div>
  );
}
