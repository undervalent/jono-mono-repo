import { z } from 'zod/v4';

export const invoiceSchema = z.object({
  id: z.string().optional(),
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
export const entrySchema = z.object({
  id: z.string(),
  invoiceId: z.string(),
  name: z.string(),
  quantity: z.number(),
  price: z.number(),
});


export const formSchema = z.object({
  invoice: invoiceSchema,
  entities: z.array(entrySchema),
});

export type Invoice = z.infer<typeof invoiceSchema>;
export type Entry = z.infer<typeof entrySchema>;
