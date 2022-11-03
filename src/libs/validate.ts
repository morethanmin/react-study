export const validateSignUp = (values: { [key: string]: string }) => {
  // init errors object
  const errors: {
    [key: string]: string
  } = {}
  Object.keys(values).map((key) => (errors[key] = ''))

  //check error
  Object.keys(values).map((key) => {
    const value = values[key]
    if (key === 'email') {
      if (value === '') errors.email = '이메일은 필수값입니다.'
    }
    if (key === 'name') {
      if (value === '') errors.name = '이름은 필수값입니다.'
    }
    if (key === 'password') {
      if (value === '') errors.password = '비번은 필수값입니다.'
    }
  })
  return errors
}
