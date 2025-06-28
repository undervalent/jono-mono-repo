import { z } from 'zod/v4';

export const invoiceSchema = z.object({
  id: z.string().optional(),
  paymentTerms: z.number().min(1),
  invoiceDate: z.string().min(1),
  clientName: z.string().min(1),
  senderStreet: z.string().min(1),
  senderCity: z.string().min(1),
  senderPostCode: z.string().min(1),
  senderCountry: z.string().min(1),
  clientStreet: z.string().min(1),
  clientCity: z.string().min(1),
  clientPostCode: z.string().min(1),
  clientCountry: z.string().min(1),
  clientEmail: z.email().min(1),
  status: z.string().min(1),
  description: z.string().min(1),
});
export const entrySchema = z.object({
  id: z.string(),
  invoiceId: z.string(),
  name: z.string().min(5),
  price: z.preprocess((val) => val?.toString?.(), z.string()),
  quantity: z.preprocess((val) => val?.toString?.(), z.string()),
});

export const formSchema = z.object({
  invoice: invoiceSchema,
  entities: z.array(entrySchema),
});

export type Invoice = z.infer<typeof invoiceSchema>;
export type Entry = z.infer<typeof entrySchema>;
export type FormSchema = z.infer<typeof formSchema>;

export interface InvoiceDisplay extends Invoice {
  formattedInvoice: string;
  formattedDueDate: string;
}
