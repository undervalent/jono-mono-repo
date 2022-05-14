import React from "react";
import { useResetRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import {
  selectedInvoiceIdState,
  selectedInvoiceState,
  invoicesState,
} from "../../state";

import {
  Wrapper,
  InvoiceMenuWrapper,
  HeaderInvoiceMenuWrapper,
  BackButton,
} from "./invoice.styles";
import { InvoiceContainer } from "./components/common-styles";
import { InvoiceContent, DeleteDialogue, InvoiceMenu } from "./components";
import { StatusChip } from "../../components/status-chip";

import { FaChevronLeft } from "react-icons/fa";

export const Invoice = () => {
  const [showDialog, setShowDialog] = React.useState(false);
  const invoice = useRecoilValue(selectedInvoiceState);
  const setInvoices = useSetRecoilState(invoicesState);
  const resetId = useResetRecoilState(selectedInvoiceIdState);

  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  if (!invoice) return null;
  const { id, status } = invoice;

  const handleDelete = () => {
    if (invoice) {
      resetId();
      setInvoices((prev) => prev.filter((el) => el.id !== id));
    }
  };

  return (
    <>
      <DeleteDialogue
        handleDelete={handleDelete}
        close={close}
        isActive={showDialog}
        id={id}
      />
      <Wrapper>
        <div className="back-button-wrapper">
          <BackButton type="button" onClick={resetId}>
            <FaChevronLeft color="#7C5DFA" /> <span>Go back</span>
          </BackButton>
        </div>

        <InvoiceContainer>
          <div className="status-wrapper">
            <span className="status">Status</span>
            {status && <StatusChip status={status} />}
          </div>
          <HeaderInvoiceMenuWrapper>
            <InvoiceMenu open={open} />
          </HeaderInvoiceMenuWrapper>
        </InvoiceContainer>
        <InvoiceContainer>
          <InvoiceContent />
        </InvoiceContainer>
      </Wrapper>
      <InvoiceMenuWrapper>
        <InvoiceContainer>
          <InvoiceMenu open={open} />
        </InvoiceContainer>
      </InvoiceMenuWrapper>
    </>
  );
};
