import React from "react";
import { useRecoilValue } from "recoil";
import { invoiceFilterState, selectedInvoices } from "../../../../state";
import { Button } from "../../../../components/buttons";

import { Wrapper } from "./invoice-header.styles";
import { StatusFilter } from "./components/status-filter";

const generateInvoiceLabel = (count: number, selected: string) => {
  if (count === 0) {
    return "No Invoices";
  }
  return `There are ${count} ${selected === "all" ? "" : selected} invoices`;
};

export const InvoiceHeader = () => {
  const invoiceFilter = useRecoilValue(invoiceFilterState);
  const invoices = useRecoilValue(selectedInvoices);
  const invoiceNumber = generateInvoiceLabel(invoices.length, invoiceFilter);

  return (
    <Wrapper>
      <div>
        <h2>Invoices</h2>
        <p className="invoice-header__text">{invoiceNumber}</p>
      </div>
      <div>
        <StatusFilter
        // options={dropdownOptions}
        // returnValue={handleUpdate}
        // selectedValue={invoiceFilter}
        // labelValue="Filter"
        />
        {/* <CheckboxDropown /> */}
      </div>

      <div>
        <Button type="primary" size="small" icon onClick={() => {}}>
          New Invoice
        </Button>
      </div>
    </Wrapper>
  );
};
