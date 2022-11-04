import { createContext, ReactNode, useContext, useRef } from 'react'
import useTodolistReducer from '../hooks/useTodoReducer'
import { TodoReducerActionType, TodoListType } from '../types'

const TodoStateContext = createContext<TodoListType[]>([])
const TodoDispatchContext =
  createContext<React.Dispatch<TodoReducerActionType> | null>(null)
const TodoNextIdContext = createContext<React.MutableRefObject<number> | null>(
  null
)

type Props = {
  children: ReactNode
}

const TodolistContext: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useTodolistReducer()
  const nextId = useRef(0)

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export default TodolistContext

export function useTodoState() {
  const context = useContext(TodoStateContext)
  if (!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext)
  if (!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext)
  if (!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context
}
