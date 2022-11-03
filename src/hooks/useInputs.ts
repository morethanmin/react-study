import React, { FormEvent, useEffect, useState } from 'react'

type useInputsType = <initialValuesType>(
  options: options<initialValuesType>
) => {
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
  onSubmit?: (_?: any) => Promise<void>
  deps?: Array<any>
}

const useInputs: useInputsType = ({
  initialValues,
  validateFn,
  onSubmit,
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
    setValues(changedValues)
    if (JSON.stringify(initialValues) === JSON.stringify(changedValues))
      setIsChanged(false)
    else setIsChanged(true)

    if (validateFn) {
      const changedErrors = validateFn(changedValues)
      setErrors(changedErrors)
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (validateFn) {
      const changedErrors = validateFn(values)
      let isError = false
      Object.keys(changedErrors).forEach((val, idx, arr) => {
        if (changedErrors[val] !== '') {
          return (isError = true)
        }
      })
      if (isError) return
      setErrors(changedErrors)
    }
    if (onSubmit) {
      await onSubmit()
    }
  }

  const resetValues = () => {
    setValues(initialValues)
  }

  return { values, errors, handleChange, handleSubmit, resetValues, isChanged }
}

export default useInputs
