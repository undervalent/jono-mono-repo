import React from "react";
import { MobileTableItem } from "../mobile-table-item";
import { InvoiceItem } from "../../../../../../../../lib/types";

interface Props {
  items: InvoiceItem[];
}

export const MobileTable: React.FC<Props> = ({ items }) => {
  return (
    <>
      {items.map((el) => (
        <MobileTableItem key={el.name} data={el} />
      ))}
    </>
  );
};
