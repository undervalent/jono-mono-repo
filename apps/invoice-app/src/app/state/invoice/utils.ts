import { formatDate } from 'date-fns';

function valideDate(date: Date | string) {
  if (!date) return false;
  return !isNaN(new Date(date).getTime());
}

export function formatInvoiceDate(date: Date | string) {
  let formattedDate = date;
  if (!valideDate(date)) return '';
  if (typeof date === 'string') formattedDate = new Date(date);
  return formatDate(formattedDate, 'dd MMM yyyy');
}

export function formatInvoice(invoice: any) {
  if (!invoice) return null;
  return {
    ...invoice,
    createdAt: formatInvoiceDate(invoice.createdAt),
    paymentDue: formatInvoiceDate(invoice.paymentDue),
  };
}
