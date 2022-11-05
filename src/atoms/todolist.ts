import { atom } from 'recoil'
import { TodoListType } from '../types'

export const todolistState = atom<TodoListType[]>({
  key: 'todolistState', // unique ID (with respect to other atoms/selectors)
  default: [],
})
