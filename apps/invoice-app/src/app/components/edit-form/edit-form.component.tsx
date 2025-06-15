import React from 'react';
import { Form } from 'radix-ui';
import { Button } from '@components/buttons';
import { ControllerTextField } from '@components/inputs/text-field';
import ScrollArea from '@components/scroll-area/scroll-area.component';
import { senderFormItems, clientFormItems, options } from './constants';
import { DatePicker } from '@components/date-picker';
import { Select } from '@components/select';
import { FormProvider } from 'react-hook-form';
import { EntryList } from './entry-list';
import { useForm } from './hooks';
import './edit-form.styles.css';

export function EditForm() {
  const [{ errors, control, methods, title }, { handleSubmit, resetForm }] =
    useForm();
  return (
    <FormProvider {...methods}>
      <Form.Root onSubmit={handleSubmit} className="edit-form">
        <h2 className="edit-form__header">{title}</h2>
        <ScrollArea>
          <h3 className="edit-form__section-label">Bill From</h3>
          <div className="edit-form__sender">
            {senderFormItems.map((item) => {
              return (
                <ControllerTextField
                  key={item.name}
                  item={{ ...item, name: `invoice.${item.name}` }}
                  control={control}
                  error={errors?.invoice?.[`${item.name}`]?.message}
                />
              );
            })}
          </div>

          <h3 className="edit-form__section-label">Bill To</h3>
          <div className="edit-form__client">
            {clientFormItems.map((item) => {
              return (
                <ControllerTextField
                  key={item.name}
                  item={{ ...item, name: `invoice.${item.name}` }}
                  control={control}
                  error={errors?.invoice?.[`${item.name}`]?.message}
                />
              );
            })}
          </div>
          <div className="edit-form__dropdowns">
            <DatePicker
              title="Invoice date"
              control={control}
              name="invoice.invoiceDate"
              error={errors?.invoice?.invoiceDate?.message}
            />
            <Select
              name="invoice.paymentTerms"
              options={options}
              placeholder="Select Payment Terms"
              label="Payment Terms"
              control={control}
              error={errors?.invoice?.paymentTerms?.message}
            />
          </div>
          <ControllerTextField
            control={control}
            error={errors?.invoice?.description?.message}
            item={{
              name: `invoice.description`,
              labelValue: 'Project Description',
              type: 'text',
            }}
          />

          <EntryList control={control} />
        </ScrollArea>
        <div className="edit-form__actions">
          <Button type="tertiary" onClick={resetForm}>
            Discard
          </Button>
          <div className="edit-form__actions-section">
            <Form.Submit asChild>
              <Button type="secondary" data-intent="draft">
                Save as Draft
              </Button>
            </Form.Submit>
            <Form.Submit asChild>
              <Button type="primary" data-intent="submit">
                Save and Send
              </Button>
            </Form.Submit>
          </div>
        </div>
      </Form.Root>
    </FormProvider>
  );
}
