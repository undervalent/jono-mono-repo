import { add, formatDate, isValid } from 'date-fns';
import currency from 'currency.js';

export function formatInvoiceDate(date: Date | string) {
  if (!date || !isValid(new Date(date))) return '';
  let formattedDate = date;
  if (typeof date === 'string') formattedDate = new Date(date);
  return formatDate(formattedDate, 'dd MMM yyyy');
}

export function calculateInvoiceDueDate(date: Date | string, terms: number) {
  if (!date || !isValid(new Date(date))) return '';
  let formattedDate = date;
  if (typeof date === 'string') formattedDate = new Date(date);
  const updatedDate = add(formattedDate, { days: terms });
  return formatDate(updatedDate, 'dd MMM yyyy');
}

export function generateItemTotal({
  price,
  quantity,
}: {
  price: number | string;
  quantity: number | string;
}) {
  return currency(+price).multiply(+quantity);
}
export function generateInvoiceItemTotal({
  price,
  quantity,
}: {
  price: number | string;
  quantity: number | string;
}) {
  const calculated = generateItemTotal({ price, quantity });
  return calculated.format();
}

export function formatInvoice(invoice: any) {
  if (!invoice) return null;
  return {
    ...invoice,
    formattedInvoiceDate: formatInvoiceDate(invoice.invoiceDate),
    formattedDueDate: calculateInvoiceDueDate(
      invoice.invoiceDate,
      invoice.paymentTerms,
    ),
  };
}
