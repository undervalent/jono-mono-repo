import React from "react";
import { useCurrentWidth } from "../../../../../../hooks";
import { InvoiceItem } from "../../../../../../lib/types";
import { TableWrapper } from "./invoice-table.styles";
import { MobileTable, FullTable } from "./components";

interface Props {
  items: InvoiceItem[];
  total: number | string;
}

export const InvoiceTable: React.FC<Props> = ({ items, total }) => {
  const currentWidth = useCurrentWidth();

  const table =
    currentWidth < 768 ? (
      <MobileTable items={items} />
    ) : (
      <FullTable items={items} />
    );
  return (
    <TableWrapper>
      <div className="invoice-table">{table}</div>
      <div className="total-wrapper">
        <span className="total-wrapper__label">Amount Due</span>
        <span className="total-wrapper__total">{total}</span>
      </div>
    </TableWrapper>
  );
};
