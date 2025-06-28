import React from 'react';
import { Wrapper } from './invoice-content.styles';
import { InvoiceTable } from './components';
import { useSelector } from 'react-redux';
import { getSelectedInvoice } from '@state/invoice';

export const InvoiceContent = () => {
  const invoice = useSelector(getSelectedInvoice);
  if (!invoice) return null;
  const {
    id,
    description,
    clientName,
    clientEmail,
    formattedInvoiceDate,
    formattedDueDate,
  } = invoice;

  return (
    <Wrapper>
      <header className="invoice-content__header">
        <div className="invoice-content__headline-wrapper">
          <h2 className="invoice-content__headline">
            <span className="invoice-content__headline-hash">#</span>
            {id}
          </h2>
          <p className="invoice-content__description">{description}</p>
        </div>
        <div className="invoice-content__headline-address">
          {invoice?.senderStreet}
          <br />
          {invoice?.senderCity}
          <br />
          {invoice?.senderPostCode}
          <br />
          {invoice.senderountry}
        </div>
      </header>
      <article className="invoice-content__article">
        <section>
          <div className="invoice-content__dates">
            <span className="invoice-content__label">Invoice date</span>
            <h2 className="invoice-content__headline">
              {formattedInvoiceDate}
            </h2>
          </div>
          <div className="invoice-content__dates">
            <span className="invoice-content__label">Payment due</span>
            <h2 className="invoice-content__headline">{formattedDueDate}</h2>
          </div>
        </section>
        <section>
          <span className="invoice-content__label">Bill to</span>
          <h2 className="invoice-content__headline">{clientName}</h2>
          <div className="invoice-content__client-address">
            {invoice.clientStreet}
            <br />
            {invoice.clientCity}
            <br />
            {invoice.clientPostCode}
            <br />
            {invoice.clineCountry}
          </div>
        </section>
        <section>
          <span className="invoice-content__label">Sent to</span>
          <h3 className="invoice-content__headline">{clientEmail}</h3>
        </section>
      </article>
      <InvoiceTable invoiceId={id} />
    </Wrapper>
  );
};
