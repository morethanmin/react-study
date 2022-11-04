import { Reducer, useReducer } from 'react'
import { todoListType } from '../../types'

type reducerActionType =
  | {
      type: 'CREATE_TODO'
      payload: todoListType
    }
  | {
      type: 'DELETE_TODO'
      payload: number
    }

const reducer: Reducer<todoListType[], reducerActionType> = (state, action) => {
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
  todoListType[],
  React.Dispatch<reducerActionType>
]

const useTodolistReducer: useTodolistReducerType = () => {
  return useReducer(reducer, [])
}

export default useTodolistReducer
