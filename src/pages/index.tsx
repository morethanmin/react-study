import styled from '@emotion/styled'
import React from 'react'
import useInputs from '../hooks/useInputs'
import { validateSignUp } from '../libs/validate'

const initialValues = {
  email: '',
  name: '',
  password: '',
}

type Props = {}

const IndexPage: React.FC<Props> = ({}) => {
  const signUpInputs = useInputs({
    initialValues: initialValues,
    validateFn: validateSignUp,
  })

  return (
    <StyledWrapper>
      <div>회원가입</div>
      <input
        type="text"
        placeholder="이메일"
        name="email"
        value={signUpInputs.values.email}
        onChange={signUpInputs.handleChange}
      />
      <input
        type="text"
        placeholder="이름"
        name="name"
        value={signUpInputs.values.name}
        onChange={signUpInputs.handleChange}
      />
      <input
        type="password"
        placeholder="비밀번호"
        name="password"
        value={signUpInputs.values.password}
        onChange={signUpInputs.handleChange}
      />
      <button>제출하기</button>
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
