import React from "react";
import { useRecoilValue } from "recoil";

import { themeState } from "../../../../state";

import emptyImage from "../../../../assets/illustration-empty.svg";
import { Wrapper } from "./empty-invoices.styles";

export const EmptyInvoices = () => {
  const theme = useRecoilValue(themeState);
  const isDark = theme === "dark";
  return (
    <Wrapper dark={isDark}>
      <img src={emptyImage} alt="No invoices" />
      <div>
        <h2 className={`empty-invoices__headline`}>There is nothing here</h2>
        <p className="empty-invoices__text">
          Create a <span className="empty-invoices__text-bold">New</span>{" "}
          invoice by clicking the New butto and get started
        </p>
      </div>
    </Wrapper>
  );
};
