import { z } from 'zod/v4';

export const invoiceSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  paymentDue: z.string(),
  description: z.string(),
  paymentTerms: z.number(),
  clientName: z.string(),
  clientEmail: z.string(),
  status: z.string(),
  senderAddress: z.object({
    street: z.string(),
    city: z.string(),
    postCode: z.string(),
    country: z.string(),
  }),
  clientAddress: z.object({
    street: z.string(),
    city: z.string(),
    postCode: z.string(),
    country: z.string(),
  }),
});
