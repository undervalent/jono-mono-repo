import { TextInputType } from '@lib/types';
import { Invoice } from '@lib/schemas';

type FieldItem = {
  name: keyof Invoice;
  labelValue: string;
  type?: TextInputType;
};

export const senderFormItems: FieldItem[] = [
  {
    name: 'senderStreet',
    labelValue: 'Street Address',
    type: 'text',
  },
  {
    name: 'senderCity',
    labelValue: 'City',
    type: 'text',
  },
  {
    name: 'senderPostCode',
    labelValue: 'Post Code',
    type: 'text',
  },
  {
    name: 'senderCountry',
    labelValue: 'Country',
    type: 'text',
  },
];
export const clientFormItems: FieldItem[] = [
  {
    name: 'clientName',
    labelValue: "Client's Name",
    type: 'text',
  },
  {
    name: 'clientEmail',
    labelValue: "Client's Email",
    type: 'text',
  },
  {
    name: 'clientStreet',
    labelValue: 'Street Address',
    type: 'text',
  },
  {
    name: 'clientCity',
    labelValue: 'City',
    type: 'text',
  },
  {
    name: 'clientPostCode',
    labelValue: 'Post Code',
    type: 'text',
  },
  {
    name: 'clientCountry',
    labelValue: 'Country',
    type: 'text',
  },
];

export const options = [
  { value: '1', label: 'Net 1 Day' },
  { value: '7', label: 'Net 7 Days' },
  { value: '14', label: 'Net 14 Days' },
  { value: '30', label: 'Net 30 Days' },
];
