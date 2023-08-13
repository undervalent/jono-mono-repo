import { atom, selector, atomFamily, selectorFamily } from "recoil";
import { Invoices } from "../lib/types";
import { convertInvoices } from "../utils";
import invoices from "../lib/data/invoices.json";

const convertedInvoices = convertInvoices(invoices);

export const invoicesState = atom<Invoices[]>({
  key: "invoicesState",
  default: convertedInvoices || [],
});
export const invoiceFilterState = atom<string>({
  key: "invoiceFilterState",
  default: "all",
});

export const selectedInvoices = selector({
  key: "selectedInvoices",
  get: ({ get }) => {
    const selectedStatusFilter = get(invoiceFilterState);
    const allInvoices = get(invoicesState);
    if (selectedStatusFilter === "all") return allInvoices;
    return allInvoices.filter((el) => selectedStatusFilter === el.status);
  },
});

export const invoiceFamily = atomFamily({
  key: "invoice",
  default: selectorFamily({
    key: "MyAtom/Default",
    get:
      (param) =>
      ({ get }) => {
        const selected = get(selectedInvoices);
        return selected.filter((el) => el.id === param)[0];
      },
  }),
});

export const selectedInvoiceIdState = atom<string | null>({
  key: "selectedInvoiceId",
  default: null,
});

export const selectedInvoiceState = selector<Invoices | undefined>({
  key: "selectedInvoice",
  get: ({ get }) => {
    const id = get(selectedInvoiceIdState);
    if (id === null) return;
    return get(invoiceFamily(id));
  },
  set: ({ get, set }, newElement) => {
    const id = get(selectedInvoiceIdState);
    if (id === null || !newElement) return;

    set(invoiceFamily(id), newElement);
  },
});
