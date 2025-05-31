import React from 'react';
import { getSelectedInvoice } from '../../../../state/invoice';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'radix-ui';
import { ThemedButton } from '../../../../components/buttons';
import { TextField } from '../../../../components/inputs/text-field';
import ScrollArea from '../../../../components/scroll-area/scroll-area.component';
import { senderFormItems, clientFormItems } from './constants';
import { DatePicker } from '../../../../components/date-picker/date-picker.component';
import { Dropdown } from '../../../../components/dropdown/dropdown.component';
const options = [
  { value: 1, label: 'Net 1 Day' },
  { value: 7, label: 'Net 7 Days' },
  { value: 14, label: 'Net 14 Days' },
  { value: 30, label: 'Net 30 Days' },
];
export function EditForm() {
  const activeInvoice = useSelector(getSelectedInvoice);
  console.log('ACTIVE INVOICE -->', activeInvoice);
  return (
    <Form.Root>
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
        <DatePicker />
        <Dropdown
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
      </ScrollArea>
      <Form.Submit asChild>
        <ThemedButton type="secondary">Submit</ThemedButton>
      </Form.Submit>
    </Form.Root>
  );
}
