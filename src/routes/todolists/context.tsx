import styled from '@emotion/styled'
import React from 'react'
import TodoItem from '../../components/Todolist/TodoItem'
import {
  useTodoDispatch,
  useTodoNextId,
  useTodoState,
} from '../../contexts/todolist'
import useForm from '../../hooks/useForm'
import { validateTodolist } from '../../libs/validate'
import { HandleDeleteBtnType, TodoListType } from '../../types'

const initialValues = {
  title: '',
  description: '',
}

type Props = {}

const ContextPage: React.FC<Props> = ({}) => {
  const data = useTodoState()
  const dispatch = useTodoDispatch()
  const nextId = useTodoNextId()

  const createTodo = (data: TodoListType) => {
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

  const handleDeleteBtn: HandleDeleteBtnType = (id) => {
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
        <div>useContext 투두리스트</div>
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

export default ContextPage

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
