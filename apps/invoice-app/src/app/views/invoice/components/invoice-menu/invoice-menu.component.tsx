import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedInvoiceState, showFormState } from "../../../../state";

import { Button } from "../../../../components/buttons";
import { Wrapper } from "./invoice-menu.styles";
interface Props {
  open(): void;
}

export const InvoiceMenu: React.FC<Props> = ({ open }) => {
  const [invoice, setInvoice] = useRecoilState(selectedInvoiceState);
  const editForm = useSetRecoilState(showFormState);

  if (!invoice) return null;
  const { status } = invoice;
  const isPaid = status === "paid";

  const handleMarkAsPaid = () => {
    if (invoice) {
      setInvoice({
        ...invoice,
        status: "paid",
      });
    }
  };
  const handleEdit = () => {
    editForm(true);
  };
  return (
    <Wrapper>
      <Button type="secondary" size="small" onClick={handleEdit}>
        Edit
      </Button>
      <Button type="danger" size="small" onClick={open}>
        Delete
      </Button>
      <Button
        type="primary"
        size="small"
        onClick={handleMarkAsPaid}
        disabled={isPaid}
      >
        Mark as Paid
      </Button>
    </Wrapper>
  );
};
