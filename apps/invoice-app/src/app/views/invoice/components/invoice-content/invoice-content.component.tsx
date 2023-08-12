import React from "react";
import { useRecoilValue } from "recoil";
import { selectedInvoiceState } from "../../../../state";
import { Wrapper } from "./invoice-content.styles";
import { InvoiceTable } from "./components";

export const InvoiceContent = () => {
  const invoice = useRecoilValue(selectedInvoiceState);
  if (!invoice) return null;
  const {
    id,
    description,
    clientAddress,
    paymentDue,
    createdAt,
    clientName,
    senderAddress,
    clientEmail,
    items,
    total,
  } = invoice;

  return (
    <Wrapper>
      <header className="invoice-content__header">
        <div className="invoice-content__headline-wrapper">
          <h1 className="invoice-content__headline">
            <span className="invoice-content__headline-hash">#</span>
            {id}
          </h1>
          <p className="invoice-content__description">{description}</p>
        </div>
        <div className="invoice-content__headline-address">
          {senderAddress.street}
          <br />
          {senderAddress.city}
          <br />
          {senderAddress.postCode}
          <br />
          {senderAddress.country}
        </div>
      </header>
      <article className="invoice-content__article">
        <section>
          <div className="invoice-content__dates">
            <span className="invoice-content__label">Invoice date</span>
            <h2 className="invoice-content__headline"> {createdAt}</h2>
          </div>
          <div className="invoice-content__dates">
            <span className="invoice-content__label">Payment due</span>
            <h2 className="invoice-content__headline">{paymentDue}</h2>
          </div>
        </section>
        <section>
          <span className="invoice-content__label">Bill to</span>
          <h2 className="invoice-content__headline">{clientName}</h2>
          <div className="invoice-content__client-address">
            {clientAddress.street}
            <br />
            {clientAddress.city}
            <br />
            {clientAddress.postCode}
            <br />
            {clientAddress.country}
          </div>
        </section>
        <section>
          <span className="invoice-content__label">Sent to</span>
          <h2 className="invoice-content__headline">{clientEmail}</h2>
        </section>
      </article>
      <InvoiceTable items={items} total={total} />
    </Wrapper>
  );
};
