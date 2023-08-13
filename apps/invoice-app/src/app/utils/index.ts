import Dinero from "dinero.js";
import { InvoiceItem, Invoices } from "../lib/types";
export const convertToDollars = (amount: number | string) => {
  if (typeof amount === "number") {
    const total = amount * 100;
    return Dinero({
      amount: total,
      precision: 2,
      currency: "USD",
    }).toFormat("$0,0.00");
  }
  return `$ ${amount}`;
};

export const convertItemsToDollars = (items: InvoiceItem[]): any =>
  items.map((el) => ({
    ...el,
    price: convertToDollars(el.price),
    total: convertToDollars(el.total),
  }));

export const convertInvoices = (invoices: Invoices[]) => {
  return invoices.map((el) => ({
    ...el,
    items: convertItemsToDollars(el.items),
    total: convertToDollars(el.total),
  }));
};
