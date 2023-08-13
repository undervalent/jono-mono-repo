import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { StatusChip } from "../../../../components/status-chip";
import { invoiceFamily, selectedInvoiceIdState } from "../../../../state";
import { Wrapper } from "./invoice-item.styles";

interface Props {
  invoiceId: string;
}

export const InvoiceItem: React.FC<Props> = ({ invoiceId }) => {
  const invoice = useRecoilValue(invoiceFamily(invoiceId));
  const setInvoice = useSetRecoilState(selectedInvoiceIdState);
  const handleClick = () => setInvoice(invoiceId);

  return (
    <Wrapper onClick={handleClick}>
      <h1 className="invoice-item__id">
        <span className="invoice-item__hash">#</span> {invoice.id}
      </h1>
      <span className="invoice-item__date">Due {invoice.paymentDue}</span>

      <span className="invoice-item__text">{invoice.clientName}</span>
      <h2 className="invoice-item__total">{invoice.total}</h2>
      <div className="invoice-item__chip">
        <StatusChip status={invoice.status} />
      </div>
    </Wrapper>
  );
};
