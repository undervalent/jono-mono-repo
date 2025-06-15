import React from 'react';
import { useFormContext, Control } from 'react-hook-form';

import { ControllerTextField } from '@components/inputs/text-field';
import { IconButton } from '@components/buttons';
import { FaTrash } from 'react-icons/fa';
import type { FormSchema } from '@lib/schemas';

import { generateInvoiceItemTotal } from '@lib/utils';

interface Props {
  index: number;
  remove: () => void;
  control: Control<FormSchema>;
  field: any;
}
export function EntryItem({ index, remove, control, field }: Props) {
  const total = generateInvoiceItemTotal({
    quantity: +field.quantity,
    price: +field.price,
  });
  return (
    <div className="entry-list__item">
      <ControllerTextField
        control={control}
        width="21.4rem"
        item={{
          name: `entities.${index}.name`,
          labelValue: 'Item name',
          type: 'text',
        }}
      />
      <ControllerTextField
        control={control}
        width="4.8rem"
        item={{
          name: `entities.${index}.quantity`,
          labelValue: 'Qty.',
          type: 'text',
        }}
      />
      <ControllerTextField
        control={control}
        width="10rem"
        item={{
          name: `entities.${index}.price`,
          labelValue: 'Price',
          type: 'text',
        }}
      />

      <div className="entry-list__total">
        <span className="entry-list__total-label">Total</span>
        <span className="entry-list__total-value">{total}</span>
      </div>
      <IconButton
        icon={<FaTrash />}
        onClick={remove}
        iconLabel="delete entry"
      />
    </div>
  );
}
