export type TodoListType = {
  id: number
  title: string
  description: string
  done: boolean
}

export type HandleDeleteBtnType = (id: number) => void

export type TodoReducerActionType =
  | {
      type: 'CREATE_TODO'
      payload: TodoListType
    }
  | {
      type: 'DELETE_TODO'
      payload: number
    }
