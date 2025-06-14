import React from 'react';
import type { Entry } from '@lib/schemas';
import './entry-list.css';

import { EntryItem } from './entry-item';
import { htmlSafeId } from '@lib/utils';

interface EntryListProps {
  entries: any | Entry[] | undefined;
  activeInvoiceId: string;
}

function generateEmtpyEntry(activeInvoiceId?: string): Entry {
  return {
    invoiceId: activeInvoiceId || htmlSafeId(),
    id: htmlSafeId(),
    name: '',
    quantity: '1',
    price: '0',
  };
}

function useEntryList({
  entries,
  activeInvoiceId,
}: EntryListProps): [
  { items: any },
  { addItem: () => void; removeItem: (id: string) => void },
] {
  const [items, setItems] = React.useState(
    entries || [generateEmtpyEntry(activeInvoiceId)],
  );

  return [
    { items },
    {
      addItem: () =>
        setItems((prev: Entry[]) => [
          ...prev,
          generateEmtpyEntry(activeInvoiceId),
        ]),
      removeItem: (id: string) => {
        setItems((prev: Entry[]) => prev.filter((item) => item.id !== id));
      },
    },
  ];
}

export function EntryList({ entries, activeInvoiceId }: EntryListProps) {
  const [{ items }, { addItem, removeItem }] = useEntryList({
    entries,
    activeInvoiceId,
  });

  return (
    <div className="entry-list">
      {items?.map((entry: Entry) => (
        <EntryItem
          entry={entry}
          removeItem={() => removeItem(entry?.id)}
          key={entry.id}
        />
      ))}

      <button type="button" onClick={addItem}>
        Add Item
      </button>
    </div>
  );
}
