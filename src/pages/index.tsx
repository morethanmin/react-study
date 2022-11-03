import styled from '@emotion/styled'
import React from 'react'
import useForm from '../hooks/use\bForm'
import { validateSignUp } from '../libs/validate'

const initialValues = {
  title: '',
  description: '',
}

type Props = {}

const IndexPage: React.FC<Props> = ({}) => {
  const signUpInputs = useForm({
    initialValues: initialValues,
    validateFn: validateSignUp,
    submitFn: () => {
      console.log('submitted')
    },
  })

  return (
    <StyledWrapper>
      <div>투두리스트</div>
      <input
        type="text"
        placeholder="제목"
        name="title"
        value={signUpInputs.values.title}
        onChange={signUpInputs.handleChange}
      />
      <input
        type="text"
        placeholder="내용"
        name="description"
        value={signUpInputs.values.description}
        onChange={signUpInputs.handleChange}
      />
      {JSON.stringify(signUpInputs.errors)}
      <button onClick={signUpInputs.handleSubmit}>제출하기</button>
    </StyledWrapper>
  )
}

export default IndexPage

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 300px;
`
