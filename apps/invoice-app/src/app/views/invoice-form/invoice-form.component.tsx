import React from "react";
import { useSetRecoilState } from "recoil";
import { Wrapper } from "./invoice-form.styles";
import { useLockBodyScroll } from "../../hooks";
import { showFormState } from "../../state";
import { Button } from "../../components/buttons";
export const InvoiceForm = () => {
  const showForm = useSetRecoilState(showFormState);
  const handleFormCancel = () => showForm(false);
  useLockBodyScroll();

  return (
    <Wrapper>
      <div className="container__overlay">INVOICE FORM</div>
      <div className="container__sidebar">
        <div>
          <Button onClick={handleFormCancel}>Cancel</Button>
        </div>
      </div>
    </Wrapper>
  );
};
