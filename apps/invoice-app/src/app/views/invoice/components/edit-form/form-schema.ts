import { z } from 'zod/v4';

export const createInvoiceSchema = z.object({
  paymentTerms: z.number(),
  invoiceDate: z.string(),
  clientName: z.string(),
  senderStreet: z.string(),
  senderCity: z.string(),
  senderPostCode: z.string(),
  senderCountry: z.string(),
  clientStreet: z.string(),
  clientCity: z.string(),
  clientPostCode: z.string(),
  clientCountry: z.string(),
  clientEmail: z.string(),
  status: z.string(),
});

export const editInvoiceSchema = z.object({
  id: z.string(),
  paymentTerms: z.number(),
  invoiceDate: z.string(),
  clientName: z.string(),
  senderStreet: z.string(),
  senderCity: z.string(),
  senderPostCode: z.string(),
  senderCountry: z.string(),
  clientStreet: z.string(),
  clientCity: z.string(),
  clientPostCode: z.string(),
  clientCountry: z.string(),
  clientEmail: z.string(),
  status: z.string(),
});
