import React from 'react';
import { StatusChip } from '@components/status-chip';
import { setActiveId, getInvoiceById } from '@state/invoice';
import { useSelector, useDispatch } from 'react-redux';
import './invoice-item.styles.css';
import { selectInvoiceTotal } from '@state/entries/entries.slice';

interface Props {
  invoiceId: string;
}

export const InvoiceItem: React.FC<Props> = ({ invoiceId }) => {
  const dispatch = useDispatch();
  const invoice = useSelector(getInvoiceById(invoiceId));
  const handleClick = () => dispatch(setActiveId(invoiceId));
  const total = useSelector(selectInvoiceTotal(invoiceId));

  return (
    <button className="invoice-item" onClick={handleClick}>
      <h1 className="invoice-item__id">
        <span className="invoice-item__hash">#</span> {invoice?.id}
      </h1>
      <span className="invoice-item__date">Due {invoice.formattedDueDate}</span>

      <span className="invoice-item__text">{invoice?.clientName}</span>
      <h2 className="invoice-item__total">{total}</h2>
      <div className="invoice-item__chip">
        <StatusChip status={invoice?.status} />
      </div>
    </button>
  );
};
