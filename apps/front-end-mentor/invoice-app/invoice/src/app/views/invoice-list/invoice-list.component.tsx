import React from "react";
import { useRecoilValue } from "recoil";
import { selectedInvoices } from "../../state";

import { InvoiceHeader } from "./components/header";
import { InvoiceItem } from "./components/invoice-item";
import { EmptyInvoices } from "./components/empty-invoices";

import { Wrapper } from "./invoice-list.styles";

export const InvoiceList = () => {
  const invoices = useRecoilValue(selectedInvoices);

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
