import { useFieldArray, Control } from 'react-hook-form';
import type { FormSchema } from '@lib/schemas';
import { htmlSafeId } from '@lib/utils';
import './entry-list.css';
import { EntryItem } from './entry-item';
import { Button } from '@components/buttons';

interface EntryListProps {
  control: Control<FormSchema>;
}

export function EntryList({ control }: EntryListProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'entities',
  });
  return (
    <div className="entry-list">
      {fields.map((field, index) => {
        return (
          <EntryItem
            key={field.id}
            index={index}
            remove={() => remove(index)}
            control={control}
            field={field}
          />
        );
      })}
      <Button
        type="tertiary"
        onClick={() =>
          append({
            id: htmlSafeId(),
            name: '',
            quantity: '1',
            price: '0',
            invoiceId: '',
          })
        }
      >
        + Add New Item
      </Button>
    </div>
  );
}
