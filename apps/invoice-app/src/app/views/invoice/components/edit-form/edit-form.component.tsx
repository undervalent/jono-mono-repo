import React from 'react';
import { getSelectedInvoice } from '../../../../state/invoice';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'radix-ui';
import { ThemedButton } from '../../../../components/buttons';
import { TextField } from '../../../../components/inputs/text-field';

export function EditForm() {
  const activeInvoice = useSelector(getSelectedInvoice);
  console.log('ACTIVE INVOICE -->', activeInvoice);
  return (
    <Form.Root>
      <TextField
        name="name"
        defaultValue={activeInvoice?.name}
        labelValue="Name"
      />
      <Form.Submit asChild>
        <ThemedButton type="secondary">Submit</ThemedButton>
      </Form.Submit>
    </Form.Root>
  );
}
