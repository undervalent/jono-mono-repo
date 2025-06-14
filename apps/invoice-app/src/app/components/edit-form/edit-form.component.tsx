import React from 'react';
import { getSelectedInvoice } from '@state/invoice';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'radix-ui';
import { ThemedButton } from '@components/buttons';
import { TextField, ControllerTextField } from '@components/inputs/text-field';
import ScrollArea from '@components/scroll-area/scroll-area.component';
import { senderFormItems, clientFormItems } from './constants';
import { DatePicker } from '@components/date-picker';
import { Select } from '@components/select';
import { selectEntriesByInvoiceId } from '@state/entries';
import { EntryList } from './entry-list';
import {
  useForm as useReactHookForm,
  UseFormReturn,
  Controller,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { formSchema, invoiceSchema, Invoice } from '@lib/schemas';

const options = [
  { value: 1, label: 'Net 1 Day' },
  { value: 7, label: 'Net 7 Days' },
  { value: 14, label: 'Net 14 Days' },
  { value: 30, label: 'Net 30 Days' },
];

export function useForm(): [
  {
    activeInvoice: Invoice | undefined;
    entries: any; // Replace with actual entry type if you have it
    register: UseFormReturn<Invoice>['register'];
    errors: UseFormReturn<Invoice>['formState']['errors'];
    control: UseFormReturn<Invoice>['control'];
  },
  {
    handleSubmit: (e: React.FormEvent) => void;
  },
] {
  const activeInvoice = useSelector(getSelectedInvoice);
  const entries = useSelector(selectEntriesByInvoiceId(activeInvoice?.id));

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useReactHookForm<Invoice>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      ...activeInvoice,
    },
  });

  const onSubmit = (data: Invoice) => console.log('data', data);

  return [
    {
      activeInvoice,
      entries,
      register,
      errors,
      control,
    },
    {
      handleSubmit: handleSubmit(onSubmit),
    },
  ];
}
export function EditForm() {
  const [
    { activeInvoice, entries, register, errors, control },
    { handleSubmit },
  ] = useForm();
  console.log('ERRORS -->', errors);
  return (
    <Form.Root onSubmit={handleSubmit}>
      <ScrollArea>
        {senderFormItems.map((item) => {
          return (
            <ControllerTextField
              key={item.name}
              item={item}
              control={control}
            />
          );
        })}

        {clientFormItems.map((item) => {
          return (
            <ControllerTextField
              key={item.name}
              item={item}
              control={control}
            />
          );
        })}
        <DatePicker title="Invoice date" control={control} name="invoiceDate" />
        <Select
          name="paymentTerms"
          options={options}
          placeholder="Select Payment Terms"
          label="Payment Terms"
          control={control}
        />
        <ControllerTextField
          control={control}
          item={{
            name: 'description',
            labelValue: 'Project Description',
            type: 'text',
          }}
        />
        <EntryList entries={entries} activeInvoiceId={activeInvoice?.id} />
      </ScrollArea>
      <Form.Submit asChild>
        <ThemedButton type="secondary">Submit</ThemedButton>
      </Form.Submit>
    </Form.Root>
  );
}
