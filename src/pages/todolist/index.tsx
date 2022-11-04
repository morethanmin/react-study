import styled from '@emotion/styled'
import React from 'react'
import useForm from '../../hooks/useForm'
import { validateSignUp } from '../../libs/validate'

const initialValues = {
  title: '',
  description: '',
}

type Props = {}

const TodolistPage: React.FC<Props> = ({}) => {
  const todoListForm = useForm({
    initialValues: initialValues,
    validateFn: validateSignUp,
    submitFn: () => {
      console.log('submitted')
    },
  })

  return (
    <StyledWrapper>
      <div className="todolist-form">
        <div>투두리스트</div>
        <input
          type="text"
          placeholder="제목"
          name="title"
          value={todoListForm.values.title}
          onChange={todoListForm.handleChange}
        />
        <input
          type="text"
          placeholder="내용"
          name="description"
          value={todoListForm.values.description}
          onChange={todoListForm.handleChange}
        />
        {JSON.stringify(todoListForm.errors)}
        <button onClick={todoListForm.handleSubmit}>제출하기</button>
      </div>
      <div className="todolist">ff</div>
    </StyledWrapper>
  )
}

export default TodolistPage

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .todolist-form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 300px;
  }
`
