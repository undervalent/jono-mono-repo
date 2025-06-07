import React from 'react';
import { getSelectedInvoice } from '../../../../state/invoice';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'radix-ui';
import { ThemedButton } from '../../../../components/buttons';
import { TextField } from '../../../../components/inputs/text-field';
import ScrollArea from '../../../../components/scroll-area/scroll-area.component';
import { senderFormItems, clientFormItems } from './constants';
import { DatePicker } from '../../../../components/date-picker';
import { Select } from '../../../../components/select';
import { selectEntriesByInvoiceId } from '../../../../state/entries';
import { EntryList } from './entry-list';

import { formSchema } from '../../../../lib/schemas';

const options = [
  { value: 1, label: 'Net 1 Day' },
  { value: 7, label: 'Net 7 Days' },
  { value: 14, label: 'Net 14 Days' },
  { value: 30, label: 'Net 30 Days' },
];

function useForm() {
  const activeInvoice = useSelector(getSelectedInvoice);
  const entries = useSelector(selectEntriesByInvoiceId(activeInvoice?.id));

  return [
    {
      activeInvoice,
      entries,
    },
    {
      handleSubmit: (e) => {
        e.preventDefault();
      },
    },
  ];
}
export function EditForm() {
  const [{ activeInvoice, entries }, { handleSubmit }] = useForm();
  return (
    <Form.Root onSubmit={handleSubmit}>
      <ScrollArea>
        {senderFormItems.map((item) => {
          return (
            <TextField
              key={item.name}
              name={item.name}
              defaultValue={activeInvoice?.[item.name]}
              labelValue={item.labelValue}
              type={item.type}
            />
          );
        })}

        {clientFormItems.map((item) => {
          return (
            <TextField
              key={item.name}
              name={item.name}
              defaultValue={activeInvoice?.[item.name]}
              labelValue={item.labelValue}
              type={item.type}
            />
          );
        })}
        <DatePicker
          title="Invoice date"
          defaultValue={
            activeInvoice?.createdAt
              ? new Date(activeInvoice.createdAt)
              : new Date()
          }
        />
        <Select
          options={options}
          placeholder="Select Payment Terms"
          label="Payment Terms"
          defaultValue={activeInvoice?.paymentTerms}
          name="paymentTerms"
        />
        <TextField
          name="projectDescription"
          defaultValue={activeInvoice?.description}
          labelValue="Project Description"
          type="text"
        />
        <EntryList entries={entries} />
      </ScrollArea>
      <Form.Submit asChild>
        <ThemedButton type="secondary">Submit</ThemedButton>
      </Form.Submit>
    </Form.Root>
  );
}
