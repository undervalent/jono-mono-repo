
import React from 'react'
import { z } from 'zod';
import { useAppSelector, useAppDispatch } from '../../state/hooks';
import { getQuery, getFormStatus, fetchDefinition, setQuery } from '../../state/features/form';


async function generateFormErrors<K>(formData: any, validator: K|any):Promise<any> {

  const formObject = Object.fromEntries(formData.entries());
  const result = await validator?.safeParseAsync(formObject);

  if (!result?.success) {
    const keys = Object.keys(formObject);
    const formatted = result.error.format();
            const err:any = {}
            for (const key of keys) {
              err[key] = formatted[key]?._errors[0]
            }

    return err;
          }

  return null;
}


export function emptyToNull(arg: unknown) {
  if (typeof arg !== 'string') {
    return arg;
  }

  if (arg.trim() === '') {
    return null;
  }

  return arg;
}
const formValidator = z.object({
  search: z.string().trim().min(1, "Whoops can't be empty"),
})



export function useForm(): [{ query: string; formError: string | null }, {
  handleFormSubmit(e: React.FormEvent<HTMLFormElement>): void,
  handleInputChange(e:React.ChangeEvent<HTMLInputElement>): void
}] {
  const dispatch = useAppDispatch()
  const status = useAppSelector(getFormStatus)
  const query = useAppSelector(getQuery)
  const [formError, setFormError] = React.useState<string|null>(null);


React.useEffect(() => {
  if (status === 'idle') {
    dispatch(fetchDefinition(query))
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [status])


  const handleFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const formErrors = await generateFormErrors(formData, formValidator);
    const word = formData.get("search")?.toString() || "";
    setFormError(formErrors?.['search'])

    if (!formErrors) {
    dispatch(setQuery(word))
    dispatch(fetchDefinition(word))
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value))
  }
  return [{ formError,  query }, { handleFormSubmit,handleInputChange }];
}
