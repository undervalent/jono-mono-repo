import React from 'react';
import { Button } from '@components/buttons';

import { StatusFilter } from './components/status-filter';
import { setFormActive } from '@state/ui';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredInvoices, getFilter } from '@state/invoice';
import { FaPlus } from 'react-icons/fa';

import './invoice-styles.css';

const generateInvoiceLabel = (count: number, selected: string) => {
  if (count === 0) {
    return 'No Invoices';
  }
  return `There are ${count} ${selected === 'all' ? '' : selected} invoices`;
};

export const InvoiceHeader = () => {
  const dispatch = useDispatch();
  const invoiceFilter = useSelector(getFilter);
  const invoices = useSelector(getFilteredInvoices);
  const invoiceNumber = generateInvoiceLabel(invoices.length, invoiceFilter);
  const handdleNewInvoice = () => dispatch(setFormActive('new'));
  return (
    <header className="invoice-header">
      <div>
        <h1>Invoices</h1>
        <p className="invoice-header__text">{invoiceNumber}</p>
      </div>
      <div>
        <StatusFilter />
      </div>

      <div>
        <Button
          type="primary"
          size="small"
          icon={
            <div className="icon-wrapper">
              <FaPlus color="#9277ff" />
            </div>
          }
          onClick={handdleNewInvoice}
          iconLabel=""
        >
          New Invoice
        </Button>
      </div>
    </header>
  );
};
