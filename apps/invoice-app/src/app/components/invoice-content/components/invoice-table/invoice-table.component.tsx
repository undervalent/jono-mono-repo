import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectInvoiceTotal,
  selectEntriesByInvoiceId,
} from '@state/entries/entries.slice';
import { FullTable } from './components';
import './invoice-table.styles.css';
import { convertToDollars, generateInvoiceItemTotal } from '@lib/utils';

interface Props {
  invoiceId: string;
}

export const InvoiceTable: React.FC<Props> = ({ invoiceId }) => {
  const total = useSelector(selectInvoiceTotal(invoiceId));
  const items = useSelector(selectEntriesByInvoiceId(invoiceId));
  const formattedItems = items.map((item) => {
    return {
      ...item,
      price: convertToDollars(item.price),
      total: generateInvoiceItemTotal({
        price: item.price,
        quantity: item.quantity,
      }),
    };
  });
  return (
    <section className="table__wrapper">
      <div className="invoice-table">
        <FullTable items={formattedItems} />
      </div>
      <div className="total-wrapper">
        <span className="total-wrapper__label">Amount Due</span>
        <span className="total-wrapper__total">{total}</span>
      </div>
    </section>
  );
};
