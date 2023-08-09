import React from 'react'

export async function generateFormErrors(formData: any, validator: any) {

          const formObject = Object.fromEntries(formData.entries())
          const result = await validator.safeParseAsync(formObject);

  if (!result?.success) {
            console.log('FORM OBJECT -->', formObject)
            const keys = Object.keys(formObject);
            const formatted = result.error.format();
            console.log('FORMATTED -->', formatted);
            const err = {}
            for (const key of keys) {
              err[key] = formatted[key]?._errors[0]
            }

    return err;
          }

  return null;
}


interface State {
  errors: Record<string, string>
}

interface Handlers {
  handleSubmit(e:React.SyntheticEvent<HTMLFormElement>): Promise<void>
}

export function useFormValidator(formValidator: any): [State,Handlers] {
  const [errors, setErrors] = React.useState<any>(null)

  const handlers = {
    handleSubmit: async (e:React.SyntheticEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data = new FormData(e.target);
    const error = await generateFormErrors(data, formValidator);
    setErrors(error)
     },
  }

  const state = {
    errors,
  }
  return [state, handlers];
}
