import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectEntriesByInvoiceId, updateEntries } from '@state/entries';
import { useForm as useReactHookForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getActiveForm } from '@state/ui';
import { formSchema } from '@lib/schemas';
import type { FormSchema } from '@lib/schemas';
import { htmlSafeId } from '@lib/utils';
import { getSelectedInvoice, updateInvoice } from '@state/invoice';
import { setFormActive } from '@state/ui';

type RHF = UseFormReturn<FormSchema>;

interface UseFormState {
  errors: RHF['formState']['errors'];
  control: any;
  methods: any;
  activeInvoice: any;
  title: string;
}
interface UseFormActions {
  handleSubmit: (e: React.FormEvent) => void;
  resetForm: (e: React.FormEvent) => void;
}

export function useForm(): [UseFormState, UseFormActions] {
  const dispatch = useDispatch();
  const activeForm = useSelector(getActiveForm);
  const activeInvoice = useSelector(getSelectedInvoice);
  const rawEntries =
    useSelector(selectEntriesByInvoiceId(activeInvoice?.id)) ?? [];

  const activeId = activeInvoice?.id || htmlSafeId();

  const entries = rawEntries.map((e) => ({
    ...e,
    price: String(e.price ?? ''),
    quantity: String(e.quantity ?? ''),
  }));

  const methods = useReactHookForm<FormSchema>({
    // @ts-expect-error  -- duplicate RHF Resolver types after pnpm hoisting
    resolver: zodResolver(formSchema),
    defaultValues: {
      invoice: {
        id: activeId,
        paymentTerms: activeInvoice?.paymentTerms || 1,
        invoiceDate: activeInvoice?.invoiceDate || new Date().toISOString(),
        clientName: activeInvoice?.clientName || '',
        senderStreet: activeInvoice?.senderStreet || '',
        senderCity: activeInvoice?.senderCity || '',
        senderPostCode: activeInvoice?.senderPostCode || '',
        senderCountry: activeInvoice?.senderCountry || '',
        clientStreet: activeInvoice?.clientStreet || '',
        clientCity: activeInvoice?.clientCity || '',
        clientPostCode: activeInvoice?.clientPostCode || '',
        clientCountry: activeInvoice?.clientCountry || '',
        clientEmail: activeInvoice?.clientEmail || '',
        status: activeInvoice?.status || 'draft',
        description: activeInvoice?.description || '',
      },
      entities: entries || [],
    },
  });
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = methods;
  const onSubmit = (data: any, e: any) => {
    e.preventDefault();
    activeForm === 'edit'
      ? dispatch(
          updateInvoice({
            ...data.invoice,
            status: 'pending',
          }),
        )
      : dispatch(updateInvoice(data.invoice));
    dispatch(
      updateEntries(
        data.entities.map((entry: any) => {
          return {
            ...entry,
            invoiceId: data.invoice.id,
          };
        }),
      ),
    );
    dispatch(setFormActive(''));
  };

  return [
    {
      title: activeId,
      activeInvoice,
      errors,
      control,
      methods,
    },
    {
      handleSubmit: handleSubmit(onSubmit),
      resetForm: () => {
        dispatch(setFormActive(''));
        methods.reset();
      },
    },
  ];
}
