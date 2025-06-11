import React from 'react';
import { useSelector } from 'react-redux';
import { useCurrentWidth } from '../../../../hooks';

import {
  selectInvoiceTotal,
  selectEntriesByInvoiceId,
} from '@state/entries/entries.slice';
import { MobileTable, FullTable } from './components';
import './invoice-table.styles.css';

interface Props {
  invoiceId: string;
}

export const InvoiceTable: React.FC<Props> = ({ invoiceId }) => {
  const currentWidth = useCurrentWidth();
  const total = useSelector(selectInvoiceTotal(invoiceId));
  const items = useSelector(selectEntriesByInvoiceId(invoiceId));
  const table =
    currentWidth < 768 ? (
      <MobileTable items={items} />
    ) : (
      <FullTable items={items} />
    );
  return (
    <section className="table__wrapper">
      <div className="invoice-table">{table}</div>
      <div className="total-wrapper">
        <span className="total-wrapper__label">Amount Due</span>
        <span className="total-wrapper__total">{total}</span>
      </div>
    </section>
  );
};
