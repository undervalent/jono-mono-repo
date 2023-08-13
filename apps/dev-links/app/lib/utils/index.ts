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
