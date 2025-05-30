import React from 'react';

import { InvoiceHeader } from './components/header';
import { InvoiceItem } from './components/invoice-item';
import { EmptyInvoices } from './components/empty-invoices';
import { useSelector } from 'react-redux';
import { getFilteredInvoices } from '../../state/invoice';
import { Wrapper } from './invoice-list.styles';

export const InvoiceList = () => {
  const invoices = useSelector(getFilteredInvoices);

  return (
    <Wrapper>
      <InvoiceHeader />
      {!invoices.length && <EmptyInvoices />}
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id} invoiceId={invoice.id} />
      ))}
    </Wrapper>
  );
};
