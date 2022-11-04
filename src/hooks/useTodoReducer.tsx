import { Reducer, useReducer } from 'react'
import { TodoReducerActionType, TodoListType } from '../types'

const reducer: Reducer<TodoListType[], TodoReducerActionType> = (
  state,
  action
) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return state.concat(action.payload)
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload)

    default:
      return state
  }
}

type useTodolistReducerType = () => [
  TodoListType[],
  React.Dispatch<TodoReducerActionType>
]

const useTodolistReducer: useTodolistReducerType = () => {
  return useReducer(reducer, [])
}

export default useTodolistReducer
