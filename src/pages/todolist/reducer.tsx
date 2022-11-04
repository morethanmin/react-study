import styled from '@emotion/styled'
import React, { useRef } from 'react'
import TodoItem from '../../components/todolist/TodoItem'
import useForm from '../../hooks/useForm'
import { validateTodolist } from '../../libs/validate'
import { handleDeleteBtnType, todoListType } from '../../types'
import useTodolistReducer from './reducer.reducer'

const initialValues = {
  title: '',
  description: '',
}

type Props = {}

const ReducerPage: React.FC<Props> = ({}) => {
  const [data, dispatch] = useTodolistReducer()
  const nextId = useRef(0)

  const createTodo = (data: todoListType) => {
    dispatch({
      type: 'CREATE_TODO',
      payload: data,
    })
  }
  const deleteTodo = (id: number) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    })
  }
  const handleSubmit = () => {
    createTodo({
      id: nextId.current,
      title: todoListForm.values.title,
      description: todoListForm.values.description,
      done: false,
    })
    nextId.current += 1
    todoListForm.resetValues()
  }
  const handleDeleteBtn: handleDeleteBtnType = (id) => {
    deleteTodo(id)
  }
  const todoListForm = useForm({
    initialValues: initialValues,
    validateFn: validateTodolist,
    submitFn: handleSubmit,
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
      <div className="todolist">
        {data.map((todo, idx) => (
          <TodoItem key={idx} data={todo} onDeleteBtn={handleDeleteBtn} />
        ))}
      </div>
    </StyledWrapper>
  )
}

export default ReducerPage

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
  .todolist {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`
