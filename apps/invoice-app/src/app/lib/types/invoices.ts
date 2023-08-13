interface Address {
  street: string;
  city: string;
  postCode: string | number;
  country: string;
}

export interface InvoiceItem {
  name: string;
  quantity: number;
  price: string | number;
  total: string | number;
}

export interface Invoices {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: Address;
  clientAddress: Address;
  items: InvoiceItem[];
  total: number | string;
}
