export const validateSignUp = (values: { [key: string]: string }) => {
  // init errors object
  const errors: {
    [key: string]: string
  } = {}
  Object.keys(values).map((key) => (errors[key] = ''))

  //check error
  Object.keys(values).map((key) => {
    const value = values[key]
    if (key === 'title') {
      if (value === '') errors.title = 'title은 필수값입니다.'
    }
    if (key === 'description') {
      if (value === '') errors.description = 'description은 필수값입니다.'
    }
  })
  return errors
}
