import React, { FormEvent, useEffect, useState } from 'react'

type useFormType = <initialValuesType>(options: options<initialValuesType>) => {
  values: initialValuesType
  errors: initialValuesType
  handleChange: React.ChangeEventHandler
  handleSubmit: (e: FormEvent) => void
  resetValues: () => void
  isChanged: boolean
}

type options<initialValuesType> = {
  initialValues: initialValuesType
  validateFn?: any
  submitFn?: any
  deps?: Array<any>
}

const useForm: useFormType = ({
  initialValues,
  validateFn,
  submitFn,
  deps = [],
}) => {
  const [values, setValues] = useState(initialValues)
  const [isChanged, setIsChanged] = useState(false)
  const [errors, setErrors] = useState<any>({})

  useEffect(() => {
    setValues(initialValues)
  }, [...deps])

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    const { name, value } = e.target
    const changedValues = {
      ...values,
      [name]: value,
    }
    const changedErrors: {
      [key: string]: string
    } = {}

    const isChanged =
      JSON.stringify(initialValues) !== JSON.stringify(changedValues)
    Object.keys(changedValues).map((key) => (changedErrors[key] = ''))

    setValues(changedValues)
    setErrors(changedErrors)
    setIsChanged(isChanged)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (validateFn) {
      const changedErrors = validateFn(values)
      setErrors(changedErrors)
      let isError = false
      Object.keys(changedErrors).forEach((val) => {
        if (changedErrors[val] !== '') {
          return (isError = true)
        }
      })
      if (isError) return
    }
    if (submitFn) {
      submitFn()
    }
  }

  const resetValues = () => {
    setValues(initialValues)
  }

  return { values, errors, handleChange, handleSubmit, resetValues, isChanged }
}

export default useForm
