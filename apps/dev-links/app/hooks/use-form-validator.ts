import React from 'react';
import { z } from 'zod';

async function generateFormErrors<K>(formData: any, validator: K) {

          const formObject = Object.fromEntries(formData.entries())
          const result = await validator?.safeParseAsync(formObject);

  if (!result?.success) {
            const keys = Object.keys(formObject);
            const formatted = result.error.format();
            const err = {}
            for (const key of keys) {
              err[key] = formatted[key]?._errors[0]
            }

    return err;
          }

  return null;
}



interface Handlers {
  handleSubmit(e:React.FormEvent<HTMLFormElement>): Promise<void>
}



export function useFormValidator<T,K>(formValidator:K): [{errors: T|null},Handlers] {
  const [errors, setErrors] = React.useState<T|null>(null)
  const handlers = {
    handleSubmit: async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data = new FormData(e.target);
    const error = await generateFormErrors<K>(data, formValidator);
    setErrors(error)
     },
  }

  const state = {
    errors,
  }
  return [state, handlers];
}
