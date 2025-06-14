import React from 'react';
import type { Entry } from '@lib/schemas';
import { TextField } from '@components/inputs/text-field';
import { IconButton } from '@components/buttons';
import { FaTrash } from 'react-icons/fa';

import { generateInvoiceItemTotal } from '@lib/utils';

interface Props {
  entry: Entry;
  removeItem: () => void;
}
export function EntryItem({ entry, removeItem }: Props) {
  const [ent, setEnt] = React.useState<Entry>(entry);
  const total = generateInvoiceItemTotal({
    price: ent.price,
    quantity: ent.quantity,
  });
  return (
    <div className="entry-list__item">
      <TextField
        type="text"
        name="name"
        labelValue="Item name"
        width="21.4rem"
        value={ent.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEnt({ ...ent, name: e.target.value })
        }
      />
      <TextField
        labelValue="Qty."
        type="number"
        name="quantity"
        width="5.8rem"
        value={ent.quantity}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEnt({ ...ent, quantity: e.target.value })
        }
      />
      <TextField
        type="text"
        name="price"
        labelValue="Price"
        width="11rem"
        value={ent.price}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEnt({ ...ent, price: e.target.value })
        }
      />
      <div className="entry-list__total">
        <span className="entry-list__total-label">Total</span>
        <span className="entry-list__total-value">{total}</span>
      </div>

      <IconButton onClick={removeItem} icon={<FaTrash />} />
    </div>
  );
}
